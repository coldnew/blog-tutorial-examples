(ns mybot.core
  (:require [irclj.core :as irc]
            [irclj.events :as events]
            [clj-http.client :as client]
            [http.async.client :as http]
            [clojure.data.json :as json]
            [clojure.core.async :refer [chan go-loop >! <! put!] :as async])
  (:gen-class))

(def config {:gitter {:token   "YOUR TOKEN"
                      :room-id "YOUR ROOM ID"}
             :irc    {:server "irc.freenode.net"
                      :port 6667
                      :nickname "bot123132134"
                      :channel "#test-bot"}})

(def conn (atom nil))

(def irc-chan    (chan))
(def gitter-chan (chan))

(defn send-to-gitter!
  "Send message to gitter."
  [message]
  (let [{:keys [token room-id]} (:gitter config)]
    (client/post (str "https://api.gitter.im/v1/rooms/" room-id "/chatMessages")
                 {:content-type :json
                  :accept :json
                  :headers {"Authorization" (str "Bearer " token)}
                  :conn-timeout (* 10 1000)
                  :body (json/write-str {:text message})})))

(defn listen-gitter-event []
  (let [{:keys [token room-id]} (:gitter config)]
    (with-open [conn (http/create-client)]
      (let [resp (http/stream-seq conn
                                  :get (str "https://stream.gitter.im/v1/rooms/" room-id "/chatMessages")
                                  :headers {"Authorization" (str "Bearer " token) "Connection" "keep-alive"}
                                  :timeout -1)]
        (doseq [s (http/string resp)]
          (when-not (clojure.string/blank? s)
            (let [{:keys [fromUser text]} (json/read-str s :key-fn keyword)
                  username (:username fromUser)]
              (when-not (re-find #"ircbot" text)
                (put! gitter-chan (str "<" username ">: " text))))))))))

(defn send-to-irc!
  "Send message to irc."
  [message]
  (let [{:keys [channel]} (:irc config)]
    (irclj.core/message @conn channel message)))

(defn listen-irc-event []
  (let [{:keys [server port channel nickname]} (:irc config)
        c (irclj.core/connect server port nickname
                              :callbacks {:privmsg (fn [ _ {:keys [nick text]}]
                                                     (when-not (re-find (re-pattern nickname) nick)
                                                       (put! irc-chan (str "`ircbot` <" nick ">: " text))))
                                          :raw-log irclj.events/stdout-callback ; for debug
                                          })]
    ;; join to channel
    (irclj.core/join c channel)
    ;; save the connection to atom
    (reset! conn c)
    ;; tick the irc server to prevent get "Connection reset by peer" error.
    (while true
      (irc/message c server "Hi")
      (Thread/sleep 5000))))

(defn event-loop []
  ;; gitter -> irc
  (go-loop []
    (send-to-irc! (<! gitter-chan))
    (recur))
  ;; irc -> gitter
  (go-loop []
    (send-to-gitter! (<! irc-chan))
    (recur)))

(defn -main [& args]
  ;; start event-loop
  (event-loop)
  ;; start listener
  (future (listen-irc-event))
  (future (listen-gitter-event)))

(ns mybot.core
  (:require [irclj.core :as irc]
            [irclj.events :as events]
            [clj-http.client :as client]
            [http.async.client :as http]
            [clojure.data.json :as json]
            [clojure.core.async :refer [chan go-loop >! <! put!] :as async])
  (:gen-class))

(def config {:gitter {:token   "YOUR TOKEN"
                      :room-id "YOUR ROOM ID"}})

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
              (println (str username ": " text))
              )))))))

(defn -main [& args]
  ;; listen gitter event
  (listen-gitter-event)
  )

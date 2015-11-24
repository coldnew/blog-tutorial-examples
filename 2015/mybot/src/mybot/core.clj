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


(defn -main [& args]
  (println "Hello, Clojure!"))

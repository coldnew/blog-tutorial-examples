(ns mybot.core
  (:require [irclj.core :as irc]
            [irclj.events :as events]
            [clj-http.client :as client]
            [http.async.client :as http]
            [clojure.data.json :as json]
            [clojure.core.async :refer [chan go-loop >! <! put!] :as async]
  (:gen-class))


(defn -main [& args]
  (println "Hello, Clojure!"))

(ns jline2.example0
  (:import [jline.console ConsoleReader])
  (:gen-class))

(defn -main []
  (let [console (ConsoleReader.)
        line (.readLine console "user> ")]
    (println (str "You enter: " line))))
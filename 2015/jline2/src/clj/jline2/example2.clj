(ns jline2.example2
  (:import [jline.console ConsoleReader])
  (:gen-class))

(defn -main []
  (let [console (ConsoleReader.)]
    (loop []
      (let [line (.readLine console "user> " \*)]
        (when-not (= line "quit")
          (println (str "You enter: " line))
          (recur))))
    (println "Exit application.")))
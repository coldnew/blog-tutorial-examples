(ns jline2.core
  (:import [jline.console ConsoleReader])
  (:gen-class))

(defn readline-1 []
  (let [console (ConsoleReader.)
        line (.readLine console "user> ")]
    (println (str "You enter: ") line)))

(defn readline-2 []
  (let [console (ConsoleReader.)]
    (loop []
      (when-let [line (.readLine console "user> ")]
        (when-not (= line "quit")
          (println (str "You enter: " line))
          (recur))))
    ))

(defn readline-3 []
  (try
    (let [console (ConsoleReader.)]
      (loop []
        (when-let [line (.readLine console "clojure> ")]
          (when-not (= line "quit")
            (println (str "You enter: " line))
            (recur)))))
    (catch Exception e
      (.printStackTrace e))
    ))

(defn -main []
  (readline-1)

  )
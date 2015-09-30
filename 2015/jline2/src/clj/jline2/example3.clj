(ns jline2.example3
  (:import [jline.console ConsoleReader])
  (:gen-class))

(defn -main []
  (let [console (ConsoleReader.)]
    (loop []
      (let [line (.readLine console "user> ")
            line-seq (clojure.string/split line #"\s+")]
        (when-not (= line "quit")
          (case (first line-seq)
            "ls" (doseq [f (-> (System/getProperty "user.dir")
                               clojure.java.io/file
                               .list)]
                   (println (str f)))
            "clear" (.clearScreen console)
            "echo" (println (str (second line-seq)))
            ;; default
            (println (str "No such command!! You enter: " line)))
          (recur))))
    (println "Exit application.")))
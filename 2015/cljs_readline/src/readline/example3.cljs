(ns readline.example3
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as str]))

;; enable *print-fn* in clojurescript
(enable-console-print!)

(defn -main [& args]
  (let [fs (nodejs/require "fs")
        readline (nodejs/require "readline")
        rl (.createInterface readline
                             (clj->js {:input  (.-stdin  js/process)
                                       :output (.-stdout js/process)}))]
    (doto rl
      (.setPrompt "user> ")
      (.on "line"
           (fn [line]
             (let [line-seq (str/split line #"\s+")]
               (case (first line-seq)
                 "quit" (.close rl)
                 "ls" (.readdir fs (.cwd js/process)
                                (fn [err items]
                                  (doseq [f items]
                                    (println (str f)))
                                  (.prompt rl)))
                 "clear" (do (println "\033[2J]\033[H") (.prompt rl))
                 "echo"  (do (println (str (second line-seq))) (.prompt rl))
                 ;; default
                 (do
                   (println (str "No such command!! You enter: " line))
                   (.prompt rl))))))
      (.on "close" #(println "Exit application."))
      (.prompt)
      )))

;; setup node.js starter point
(set! *main-cli-fn* -main)

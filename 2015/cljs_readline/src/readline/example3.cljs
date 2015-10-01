(ns readline.example3
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as str]))

;; enable *print-fn* in clojurescript
(enable-console-print!)

(defn -main [& args]
  (let [readline (nodejs/require "readline")
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
                 "ls" (println "FIXME:")
                 "clear" (println "\033[2J]\033[H")
                 "echo"  (println (str (second line-seq)))
                 ;; default
                 (println (str "No such command!! You enter: " line)))
               (if-not (= line "quit")(.prompt rl))
               )))
      (.prompt)
      )))

;; setup node.js starter point
(set! *main-cli-fn* -main)

(ns readline.example1
  (:require [cljs.nodejs :as nodejs]))

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
             (case line
               "quit" (.close rl)
               ;; default
               (do
                 (println (str "You enter: " line))
                 (.prompt rl)))))
      (.on "close" (fn[]
                     (println "Exit application.")))
      (.prompt)
      )))

;; setup node.js starter point
(set! *main-cli-fn* -main)

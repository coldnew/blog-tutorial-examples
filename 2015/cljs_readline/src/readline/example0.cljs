(ns readline.example0
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
      (.prompt)
      (.on "line"
           (fn [line]
             (println (str "You enter: " line))
             (.close rl)))
      )))

;; setup node.js starter point
(set! *main-cli-fn* -main)

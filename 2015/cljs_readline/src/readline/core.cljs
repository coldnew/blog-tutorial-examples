(ns readline.core
  (:require [cljs.nodejs :as nodejs]))

;; enable *print-fn* in clojurescript
(enable-console-print!)

(defn -main [& args]
  (let [rl (.createInterface
            (nodejs/require "readline")
            (clj->js {:input  (.-stdin  js/process)
                      :output (.-stdout js/process)}))]
    (.setPrompt rl "user> ")
    (.prompt rl)
    (.on rl "line"
         (fn [line]
           (case line
             "quit" (.close rl)
             ;; default
             (do
               (println (str "You enter: " line))
               (.prompt rl)))
           ))))

;; setup node.js starter point
(set! *main-cli-fn* -main)

(ns readline.example2
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as str]))

;; enable *print-fn* in clojurescript
(enable-console-print!)

(defn -main [& args]
  (let [readline (nodejs/require "readline")
        rl (.createInterface readline
                             (clj->js {:input  (.-stdin  js/process)
                                       :output (.-stdout js/process)}))]
    (.on js/process.stdin "data"
         (fn [c]
           (if  (or (and (>= c \A) (<= c \Z))
                    (and (>= c \a) (<= c \z))
                    (and (>= c \0) (<= c \9)))
             (.write js/process.stdout "\b*"))))

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
      (.on "close" #(println "Exit application."))
      (.prompt)
      )))

;; setup node.js starter point
(set! *main-cli-fn* -main)

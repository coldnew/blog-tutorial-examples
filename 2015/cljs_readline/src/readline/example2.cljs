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
    ;; mask input char
    ;; http://stackoverflow.com/questions/24037545/how-to-hide-password-in-the-nodejs-console
    (.on js/process.stdin "data"
         (fn [char]
           (.write js/process.stdout "\033[2K") ; clear entire lin
           (.prompt rl)
           (.write js/process.stdout
                   (apply str (repeat (count rl.line) "*")))
           ))

    (doto rl
      (.setPrompt "user> ")
      (.on "line"
           (fn [line]
             (let [line* (str/reverse line)]
               (case line*
                 "quit" (.exit js/process) ; real quit application
                 ;; default
                 (println (str "You enter: " line*)))
               (if-not (= line* "quit") (.prompt rl))
               )))
      (.prompt)
      )))


;; setup node.js starter point
(set! *main-cli-fn* -main)

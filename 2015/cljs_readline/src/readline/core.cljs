(ns readline.core
  (:require [cljs.nodejs :as nodejs]))

;; enable *print-fn* in clojurescript
(enable-console-print!)

(defn -main [& args]
  (println "Hello World!"))

;; setup node.js starter point
(set! *main-cli-fn* -main)
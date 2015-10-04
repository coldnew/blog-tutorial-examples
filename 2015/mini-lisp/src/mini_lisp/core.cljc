(ns mini-lisp.core
  (:require #?(:cljs [cljs.nodejs :as nodejs])
            [clojure.string :as str])
  #?(:clj (:gen-class)))

;; enable *print-fn* in clojurescript
#?(:cljs (enable-console-print!))

(defn -main [& args]
  (println "Hello World"))

;; setup node.js starter point
#?(:cljs (set! *main-cli-fn* -main))
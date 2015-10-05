(ns mini-lisp.core
  (:require ;; #?(:cljs [cljs.nodejs :as nodejs])
   [clojure.string :as str])
  ;;#?(:clj (:gen-class))
  )

;; enable *print-fn* in clojurescript
;; #?(:cljs (enable-console-print!))

(defn strip-comments [s]
  (str/join "" (str/split s #";.*\n?")))


(defn tokenize [exp]
  (remove empty? (-> (strip-comments exp)
                     (str/replace "(" " ( ")
                     (str/replace ")" " ) ")
                     (str/replace "'" " ' ")
                     (str/split #"\s+"))))


(tokenize "(+ 1 2 (- 3 4)) (- 1 2)")

(defn parse-list [l]
  )

(defn parse-atom [tok]
  (let [repr (read-string tok)]
    (if (number? repr)
      repr
      tok)))

(defn parse [tokens]
  (let [token (first tokens)]
    (if (= token "(")
      (parse-list tokens)
      (parse-atom token))))

(parse (tokenize "1"))

(defn -main [& args]
  (println "Hello World"))

;; setup node.js starter point
#?(:cljs (set! *main-cli-fn* -main))
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


(first (tokenize "(+ 1 2 (- 3 4)) (- 1 2)"))

(def globals
  (ref {"+" +, "-" -, "*" *, "/" /, "not" not, ">" >, "<" <, ">=" >=, "<=" <=, "=" =, "equal?" =, "eq?" =,
   "length" count, "cons" cons, "car" first, "cdr" rest, "list" list, "list?" vector?,
   "null?" nil?, "symbol?" symbol?}))

(globals "x" )
( "x" globals)

(defn to-string [exp]
  (if (vector? exp)
    (str "(" (str/join " " (map to-string exp)) ")")
    (str exp)))

(defn read-from [tokens]
  (assert (not= 0 (count tokens)))
  (case (first tokens)
    "("

    ;; default

    )
  )

(assert (not= 0 (count (tokenize "( + 1 2)"))))

(comment
  (println
   (to-string
    (eval
     (read-from (tokenize "(+ 1 2)"))
     )))
  )

(defn -main [& args]
  ;; REPL

  ;; (->> input
  ;;      read-expr
  ;;      eval-expr
  ;;      print-expr)
  )

;; setup node.js starter point
#?(:cljs (set! *main-cli-fn* -main))
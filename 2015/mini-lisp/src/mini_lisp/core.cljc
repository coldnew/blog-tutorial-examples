(ns mini-lisp.core
  (:require ;; #?(:cljs [cljs.nodejs :as nodejs])
   [clojure.string :as str])
  ;;#?(:clj (:gen-class))
  )

;; enable *print-fn* in clojurescript
;; #?(:cljs (enable-console-print!))

;;;; Helper Functions

(defn error [message]
  (throw (IllegalArgumentException. message)))

;;;; Read

(defn strip-comments
  "Remove comments in string."
  [s]
  (str/join "" (str/split s #";.*\n?")))

(defn tokenize
  "Convert a string of characters into a list of tokens."
  [exp]
  (remove empty? (-> (strip-comments exp)
                     (str/replace "(" " ( ")
                     (str/replace ")" " ) ")
                     (str/replace "'" " ' ")
                     (str/split #"\s+"))))

(defn atomic
  "Numbers become numbers; every other token is a symbol."
  [tok]
  (let [repr (read-string tok)]
    (if (number? repr)
      repr
      ;; no strings
      tok)))

(defn atomic
  "Numbers become numbers; every other token is a symbol."
  [tok]
  (let [repr (read-string tok)]
    (if (number? repr)
      repr
      ;; no strings
      tok)))

(map atomic (tokenize "(+ 1 2 ( - 3 4))"))

(map read-string ["1" "2" "3" "4"])

(number? (atomic "1"))

(defn parse
  "Read a lisp expression from string."
  [token]
  ;; token should not contains null string
  (assert (not (empty? token)))
  ;; parse the token to atom
  (case token
    ;;    ("(" ")")  (symbol token)
    "(" (symbol "[")
    ")" (symbol "]")
    ;; else
    (atomic token)))

(defn read [sexp]
  (map parse (tokenize sexp)))

(nth (vec   (read "(+ 1 2 (- 3 4))")) 1)

(parse (tokenize "(+ 1 2)"))

(doseq [s (tokenize "(+ 1 2)")]
  (parse s)
  )

(parse (tokenize "( + 1 2) \n (+ 1 2)"))
(parse (tokenize "( + 1 2 (- 3 4))"))

(map atomic (tokenize "+ 1 2 (+ 1 2)"))

(map #(atomic %) '("("))

;; (+ 1 2) => [["+" 1  2]]
;; (+ 1 2) => (("+" 1  2))
;; (+ 1 2 (- 3 4)) => [["+" 1 2 ["-" 3 4]]]
;; (+ 1 2 (- 3 4)) => (("+" 1 2 ("-" 3 4)))
;; (begin (+ 1 2))  => ['begin' , ['+' '1' '2'] ]
;; (begin (+ 1 2))  => ('begin' , ('+' '1' '2') )

;;;; Eval

;;;; Print

;;;; Loop


(first (tokenize "(+ 1 2 (- 3 4)) (- 1 2)"))

(def globals
  {"+" +, "-" -, "*" *, "/" /, "not" not, ">" >, "<" <, ">=" >=, "<=" <=, "=" =, "equal?" =, "eq?" =,
   "length" count, "cons" cons, "car" first, "cdr" rest, "list" list, "list?" vector?, "begin" do, "#t" true, "#nil" nil,
   "null?" nil?, "symbol?" symbol?})

(globals "x" )
( "x" globals)

;; TODO: remove
(defn to-string [exp]
  (if (seq? exp)
    (str "(" (str/join " " (map to-string exp)) ")")
    (str exp)))

(defn expr->string [expr]
  (if (seq? expr)
    (str "(" (str/join " " expr) ")")
    (str expr)))

(expr->string "asd")
(expr->string '("asd"))
(expr->string '["asd" a b])
(expr->string 'b)



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
   (expr->string
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
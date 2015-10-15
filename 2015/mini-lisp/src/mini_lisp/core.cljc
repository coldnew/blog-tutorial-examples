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

(defn parse
  "Read a lisp expression from string."
  [token]
  ;; token should not contains null string
  (assert (not (empty? token)))
  ;; parse the token to atom
  (case token
    ("(" ")")  (symbol token)
    ;; else
    (atomic token)))

(defn read
  "Read the string and return the AST in sequence."
  [sexp]
  (map parse (tokenize sexp)))

(seq? (read "(+ 1 2 (+ 1 2))"))


;; (+ 1 2) => [["+" 1  2]]
;; (+ 1 2) => (("+" 1  2))
;; (+ 1 2 (- 3 4)) => [["+" 1 2 ["-" 3 4]]]
;; (+ 1 2 (- 3 4)) => (("+" 1 2 ("-" 3 4)))
;; (begin (+ 1 2))  => ['begin' , ['+' '1' '2'] ]
;; (begin (+ 1 2))  => ('begin' , ('+' '1' '2') )

;;;; Eval

(def builtins {"+" +, "-" -, "*" *, "/" /,
               "t" true})

;; (def builtins {:+ + :- -, :* * :/ / :t true})

(defn eval
  ([x] (eval x builtins))
  ([x scope]
   (cond
     (number?  x) x
     (contains? scope x) (scope x)
     ;;(contains? scope x) 'println
     ;;
     :else (let [exps (map #(eval % scope) x)
                 fun (first exps)]
             (apply fun (next exps))
             )
     )
   )
  )

(defn eval
  ([x] (eval x builtins))
  ([x scope]
   (cond
     (number? x) x
     (contains? scope x) (scope x)
     ;; a list
     :else
     (apply (eval (first x)) (rest x))
     )
   )
  )

(apply (eval (first '("+" 1 2))) (rest '(+ 1 2)))

(apply (eval (first expr) env)
       (rest expr) env)

(eval '("-" 1 2 3 4 ))

(def aa '(+ 1 2))

(apply + '(1 2))

(eval (rest aa)

(map #(eval %) aa)

(eval '(+ 1 2 (- 3 4)))

(eval (read "(+ 1 2)"))

(eval (read "+ 1 2"))

(map #(eval %) (read "+ 1 2"))

(eval (read "1"))

(eval (read "(+)"))

(apply + nil)

(map eval (drop-last (next (read "(+ 1 2 (- 1 2))"))))


(eval (read "1"))


(map eval (read "(+ 1 2)"))

(map eval (read "1"))
(first (map eval (read "1")))

(first (vec (read "1")))

(next (read "1"))

(apply 1 '())

(first (map eval '(1)))

(eval (first '(1)))

(eval (read "1"))
(eval
 (drop-last (rest (read "(+ 1 2 )"))))

(apply + '(1 2))

(eval
 (drop-last
  (rest (read "1")))

 (map #(atomic %) '("("))
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
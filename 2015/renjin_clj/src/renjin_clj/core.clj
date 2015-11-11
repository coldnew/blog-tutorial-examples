(ns renjin-clj.core
  (:import [javax.script ScriptEngine ScriptEngineManager ScriptException])
  (:require [incanter.core :as core]
            [incanter.charts :as charts]
            )
  )

(def renjin (.getEngineByName (ScriptEngineManager.) "Renjin"))

(.eval renjin "df <- data.frame(x=1:10, y=(1:10) + rnorm(n=10))")
(.toString (.eval renjin "print(df)"))

;;org.renjin.sexp.DoubleArrayVector
;; (extend-type org.renjin.sexp.DoubleArrayVector

;;   )

(vec (.eval renjin "a <- 2; b<- 3; a * b"))
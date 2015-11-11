(ns renjin-clj.core
  (:import [javax.script ScriptEngine ScriptEngineManager ScriptException])
  )

(def renjin (.getEngineByName (ScriptEngineManager.) "Renjin"))

(.eval renjin "df <- data.frame(x=1:10, y=(1:10) + rnorm(n=10))")
(.eval renjin "print(df)")

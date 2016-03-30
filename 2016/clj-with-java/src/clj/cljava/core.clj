(ns cljava.core
  (:import [cljava Hello]))

(defn -main []
  (.hello (Hello.)))

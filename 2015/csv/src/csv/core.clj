(ns csv.core
  (:require [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [incanter.io]
            [incanter.core]
            )
  )

((fn [k coll]
   (map #(vector %1 %2) k coll
        ;;(repeat 4 coll)
           ))
#{1 2 3} #{4 5})


(:a {:a 1})


(with-open [in-file (io/reader (io/resource "test.csv"))]
  (doall
   (csv/read-csv in-file)))

(class
 (incanter.core/to-matrix
  (incanter.io/read-dataset (io/resource "test.csv")))
)

(with-open [out-file (io/writer "out-file.csv")]
  (csv/write-csv out-file
                 [["abc" "def"]
                  ["ghi" "jkl"]]))
;; https://github.com/clojure-cookbook/clojure-cookbook/blob/master/04_local-io/4-20_read-write-csv.asciidoc
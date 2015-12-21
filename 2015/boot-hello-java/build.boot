(set-env!
 :source-paths    #{"src/java"}
 :resource-paths  #{"resources"}
 :dependencies '[[org.clojure/clojure "1.7.0"]])

(def +version+ "1.0.0-SNAPSHOT")

(deftask build []
  (comp (javac)
(pom) (aot) (jar :main 'myapp.HelloWorld)
        ))

(deftask run []
  (with-pre-wrap fileset
(myapp.HelloWorld/-main)
fileset)
)

(task-options!
 pom {:project 'myapp
      :version +version+})

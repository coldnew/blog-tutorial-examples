(defproject cljava "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]]

  :source-paths ["src/clj"]

  :java-source-paths ["src/java"]

  :aot [cljava.core]
  :main ^:skip-aot cljava.core)

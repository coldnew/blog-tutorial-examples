(defproject mini-lisp "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [jline/jline "2.13"] [incanter "1.5.6"]]

  :cljsbuild {:builds
              [{:source-paths ["src"]
                :compiler {:output-to "target/lisp.js"
                           :output-dir "target"
                           :source-map "target/lisp.js.map"
                           :target :nodejs
                           :optimizations :none
                           :pretty-print true}}]})

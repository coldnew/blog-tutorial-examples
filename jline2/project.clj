(defproject jline2 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [jline/jline "2.13"]]

  :source-paths ["src/clj"]
  :java-source-paths ["src/java"]

  :prep-tasks ["javac" "compile"]

  ;;:aot :all
  ;;:main jline2.core)
)
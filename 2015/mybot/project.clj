(defproject mybot "0.1.0"
  :description "A simple example to create irc/gitter bridge"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/core.async "0.2.374"]
                 [clj-http "2.0.0"]
                 [http.async.client "0.5.2"]
                 [irclj "0.5.0-alpha4"]
                 [org.clojure/data.json "0.2.6"]]
  :aot :all
  :main mybot.core)

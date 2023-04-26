(defproject app-creator "0.1.0-SNAPSHOT"
  :description "App-Creator: app to help you create your client-server projects"
  :url "https://github.com/KateG20/app-creator"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [clj-commons/clj-yaml "0.7.0"]
                 [org.clojure/tools.cli "1.0.206"]
                 [org.clojure/java.jdbc "0.7.12"]
                 [metosin/malli "0.8.0"]
                 [selmer "1.12.58"]
                 [org.babashka/sci "0.3.4"]

                 [thheller/shadow-cljs "2.23.2"]
                 [reagent "0.8.1"]
                 [compojure "1.7.0"]
                 [hiccup "1.0.5"]
                 [ring "1.9.6"]
                 [ring/ring-defaults "0.3.4"]
                 [ring/ring-json "0.3.1"]
                 [ring-cors "0.1.13"]
                 [re-frame "1.3.0"]
                 [day8.re-frame/http-fx "0.2.4"]
                 [cljs-ajax "0.7.5"]

                 [aero "1.1.6"]
                 [com.taoensso/timbre "5.2.1"]
                 [integrant "0.8.0"]
                 [org.slf4j/slf4j-simple "1.6.2"]]

  :profiles
  {:cljs
   {:source-paths ["src/app_creator/client"]
    :dependencies [[thheller/shadow-cljs "2.23.2"]
                   [reagent "0.8.1"]
                   [re-frame "1.3.0"]
                   [day8.re-frame/http-fx "0.2.4"]
                   [cljs-ajax "0.7.5"]
                   ;[selmer "1.12.58"]                       ; не робит
                   [org.slf4j/slf4j-simple "1.6.2"]]}
   :clj
   {:source-paths ["src/app_creator/server"]
    :dependencies [[org.clojure/clojure "1.11.1"]
                   [ring "1.9.6"]
                   [ring/ring-defaults "0.3.4"]
                   [compojure "1.7.0"]]}}

  :repl-options {:init-ns app-creator.server.core}
  :main app-creator.server.core)
  ;:repl-options {:init-ns app-creator.core}
  ;:main app-creator.core)

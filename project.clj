(defproject app-creator "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :main app-creator.core
  :source-paths ["src-clj" "src-cljs"]
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"]
                 [reagent "1.1.1"]
                 [cljsjs/react "18.2.0-0"]
                 [cljsjs/react-dom "17.0.2-0"]
                 [clj-commons/clj-yaml "0.7.0"]
                 [org.clojure/tools.cli "1.0.206"]
                 [org.clojure/java.jdbc "0.7.12"]
                 [metosin/malli "0.8.0"]
                 [selmer "1.12.50"]
                 [org.babashka/sci "0.3.4"]
                 [ring/ring-core "1.9.6"]
                 [ring/ring-jetty-adapter "1.9.6"]
                 [ring/ring-defaults "0.3.4"]
                 [compojure "1.7.0"]]
  :hooks [leiningen.cljsbuild]
  :plugins [[lein-cljsbuild "1.1.8"]
            [lein-ring "0.12.6"]
            ;[lein-figwheel "0.5.18"]
            ]
  :ring {:handler app-creator.core/app}
  :cljsbuild {
              :builds [{
                        ;:id           "example"
                        :source-paths ["src-cljs"]
                        ;:figwheel     true
                        :compiler     {
                                       ;:main "example.core"
                                       ;:asset-path    "js/out"
                                       :output-to     "resources/public/js/main.js"
                                       :output-dir    "resources/public/js/out"
                                       :optimizations :whitespace
                                       :pretty-print  true}}]}
  :repl-options {:init-ns app-creator.core})

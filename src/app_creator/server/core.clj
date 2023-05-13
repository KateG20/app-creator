(ns app-creator.server.core
  (:require [taoensso.timbre :as log]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :as json-middleware]
            [app-creator.server.wrapper :as wrapper]
            [app-creator.server.routes :as routes])
  (:gen-class))

(def app
  (->
    (wrap-defaults routes/routes api-defaults)
    (wrapper/wrap-preflight)
    (json-middleware/wrap-json-body)
    (json-middleware/wrap-json-response {:pretty true})))

(defn start [port]
  (log/info "\n[App-Creator]: started Jetty")
  (jetty/run-jetty app {:port  port
                        :join? false}))

(defn -main []
  (let [port (Integer/parseInt (or (System/getenv "PORT") "80"))]
    (start port)))

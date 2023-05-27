(ns app-creator.server.core
  (:require [taoensso.timbre :as log]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :as json-middleware]
            [app-creator.server.wrapper :as wrapper]
            [app-creator.server.routes :as routes])
  (:gen-class)
  (:import (java.io IOException)))

(def app
  (->
    (wrap-defaults routes/routes api-defaults)
    (wrapper/wrap-preflight)
    (json-middleware/wrap-json-body)
    (json-middleware/wrap-json-response {:pretty true})))

(defn start [port]
  (log/info "\n[App-Creator]: started Jetty server")
  (try (jetty/run-jetty app {:port  port
                             :join? false})
       (catch IOException e (log/info "\n[App-Creator]: IOException occurred: probably,"
                                      "server instance or another process is already running on this port."
                                      "Make port 80 available and try again."))
       (catch Exception e (log/info "\n[App-Creator]: Exception occurred. Try restarting the server."))))

(defn -main []
  (let [port (Integer/parseInt "80")]
    (start port)))

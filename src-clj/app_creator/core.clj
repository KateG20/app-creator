(ns app-creator.core
  ;(:require [ring.middleware.defaults :refer [wrap-defaults site-defaults]])
  (:gen-class))

(use '[app-creator.ui.views])
(require '[app-creator.creator.creator :as creator]
         '[ring.middleware.defaults :refer [wrap-defaults site-defaults]]
         '[compojure.core :refer [defroutes GET POST]]
         '[compojure.route :as route])

(defroutes routes
           (GET "/" [] (index-page))
           (route/resources "/")
           (route/not-found "Page not found"))

(def app
  (wrap-defaults routes site-defaults))

;(defn start [port]
;  (run-jetty application {:port port
;                          :join? false}))

(defn -main [& args]
  (try
    ;(start 8080)
    ;(creator/start args)
    (catch Exception e
      (println "Something went wrong. Exception message: " (.getMessage e)))))
(ns app-creator.server.routes
  (:require [compojure.core :refer [defroutes GET POST context]]
            [app-creator.server.handlers :as handlers]))

(defroutes routes
           (context "/api/v1" []
             (POST "/create" data
               (handlers/create-projects data))
             (GET "/test" data
               (handlers/test-connection))))

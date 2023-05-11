(ns app-creator.server.core
  (:require [app-creator.creator.creator :as creator]
            [taoensso.timbre :as log]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :as json-middleware]
            [ring.util.response :refer [response]]
            [ring.middleware.cors :refer [wrap-cors]]
            [compojure
             [route :as route]
             [core :refer [defroutes GET POST context]]]
            [clojure.walk :refer [keywordize-keys]])
  (:gen-class))

(defn start-logic [data]
  (let [result (creator/create-from-web data)]
    (Thread/sleep 3000)
    (log/info (str "\n[App-Creator] the result: " result))
    {:data (str "Created projects with result: " result)}))

(def dummy-entity {:id 1 :name "Hello, world!"})

(defn not-found []
  (str "Resource not found!"))


(defroutes routes
           ;(GET "/api/v1/" data
           ;  (log/info (str "\n[AAAAAAAAAAA] request received. " data))
           ;  (response dummy-entity))
           (POST "/api/v1/create" data
             (log/info (str "\n[App-Creator] Request received: " data "\n"))
             (-> data
                 (:body)
                 (keywordize-keys)
                 (start-logic)
                 (response))
             )
           (route/not-found (not-found)))

(def cors-headers
  "Generic CORS headers"
  {"Access-Control-Allow-Origin"  "*"
   "Access-Control-Allow-Headers" "*"
   "Access-Control-Allow-Methods" "GET"})

(defn preflight?
  "Returns true if the request is a preflight request"
  [request]
  (= (request :request-method) :options))

(defn wrap-preflight
  "Allow requests from all origins - also check preflight"
  [handler]
  (fn [request]
    (if (preflight? request)
      {:status  200
       :headers cors-headers
       :body    "preflight complete"}
      (let [response (handler request)]
        (update-in response [:headers]
                   merge cors-headers)))))

(def app
  (->
    (wrap-defaults routes api-defaults)
    (wrap-preflight)
    (json-middleware/wrap-json-body)
    (json-middleware/wrap-json-response {:pretty true})))

;(defn handler [request]
;  (clojure.pprint/pprint request)
;  {:status  200
;   :headers {"Content-Type" "text/html"}
;   :body    "Hello World"})

(defn start [port]
  (log/info "\n[Me]: started Jetty")
  (jetty/run-jetty app {:port  port
                        :join? false}))

(defn -main []
  (let [port (Integer/parseInt (or (System/getenv "PORT") "80"))]
    (start port)))

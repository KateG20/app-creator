(ns app-creator.server.core
  (:require [app-creator.core.creator.creator :as creator]
            [taoensso.timbre :as log]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :as json-middleware]
            [ring.util.response :refer [response status]]
            [ring.middleware.cors :refer [wrap-cors]]
            [compojure
             [route :as route]
             [core :refer [defroutes GET POST context]]]
            [clojure.walk :refer [keywordize-keys]])
  (:gen-class))

(defn create-projects [data]
  (let [result-map (creator/create-from-web data)]
    (Thread/sleep 1000)
    (log/info (str "\n[App-Creator] RESULT MAP: " result-map))
    result-map))

(defn create-projects-handler [data]
  ;(log/info (str "\n[App-Creator] Request received: " (with-out-str (clojure.pprint/pprint (:body data))) "\n"))
  (let [result-map (-> data
                       (:body)
                       (keywordize-keys)
                       (create-projects))
        {:keys [result errors]} result-map
        no-errors (empty? errors)
        all-true (every? (fn [[_ v]] v) result)]

    (if (and no-errors all-true)
      (response {:info "Components were successfully created!"})

      (if (not (or no-errors all-true))
        (let [init-str "Couldn't create following component(s) successfully: "
              response-str (str
                             (reduce-kv (fn [m k v]
                                          (if (not v) (str m "\"" k "\" ")
                                                      (str m)))
                                        init-str
                                        result)
                             ". Following errors occurred: "
                             (clojure.string/join "\n" errors))]
          (-> {:info response-str}
              (response)
              (status 500)))

        (if (not no-errors)

          (as-> (clojure.string/join "\n" errors) $
                (str "Errors occurred! " $)
                {:info $}
                (response $)
                (status $ 500))

          (as-> "Undefined behaviour!" $
                {:info $}
                (response $)
                (status $ 500)))))))


(defroutes routes
           ;(GET "/api/v1/" data
           ;  (log/info (str "\n[AAAAAAAAAAA] request received. " data))
           ;  (response dummy-entity))
           (POST "/api/v1/create" data
             (create-projects-handler data))
           (GET "/api/v1/test" data
             (do
               (Thread/sleep 1000)
               (response {:info "test passed, everything is OK!"}))))

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
  (log/info "\n[App-Creator]: started Jetty")
  (jetty/run-jetty app {:port  port
                        :join? false}))

(defn -main []
  (let [port (Integer/parseInt (or (System/getenv "PORT") "80"))]
    (start port)))

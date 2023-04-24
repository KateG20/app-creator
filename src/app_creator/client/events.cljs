(ns app-creator.client.events
  (:require [re-frame.core :as re-frame]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax]))

; Событие для изначальной инициации дб (вызывается потом в методе run, перед рендером)
(re-frame/reg-event-db                                      ;; sets up initial application state
  ::initialize
  (fn [_ _]                                                 ;; arguments not important, so use _
    {:text                  "initial text"
     :error-display         "none"                          ;; returned value put into app-db
     :server-framework-text "default"
     :server-lang-text      "default"
     :success-display       "none"
     :http-post-result-text "null info"
     }))                                                    ; https://day8.github.io/re-frame/dominoes-live/#initialize

; Для вызова при изменении текста; меняет состояние текста и состояние дисплея ошибки в дб
(re-frame/reg-event-db
  ::text-change
  (fn [db [_ new-text-value]]
    (assoc db :text new-text-value
              :error-display (if (< (count new-text-value) 5) "block" "none"))))

(re-frame/reg-event-db
  ::server-framework-text-change
  (fn [db [_ new-text-value]]
    (assoc db :server-framework-text new-text-value
              :error-display (if (< (count new-text-value) 5) "block" "none"))))

(re-frame/reg-event-db
  ::server-lang-text-change
  (fn [db [_ new-text-value]]
    (assoc db :server-lang-text new-text-value
              :error-display (if (< (count new-text-value) 5) "block" "none"))))

(re-frame/reg-event-db
  ::success-post-result
  (fn [db [_ result]]
    (assoc db :success-display "block"
              :http-post-result-text (str "success! " result))))

(re-frame/reg-event-db
  ::failure-post-result
  (fn [db [_ result]]
    ;; result is a map containing details of the failure
    (assoc db :http-post-result-text (str "failure! " result))))

; :params - "GET will add params onto the query string, POST will put the params in the body"
; but there are also :body and :url-params.

(re-frame/reg-event-fx
  ::http-post
  (fn [{:keys [db] :as cofx} [_ val]]
    {:http-xhrio {:method          :post
                  :uri             "http://localhost:80/api/v1/create"
                  :params          {:framework (:server-framework-text db), :language (:server-lang-text db)} ;(str "{\"framework\": \"" (:server-framework-text db) "\", \"language\": \"" (:server-lang-text db) "\"}") ; val
                  :timeout         5000
                  :headers         {"Content-Type" "application/json"}
                  :format          (ajax/json-request-format)
                  ;:response-format {:content-type "application/json" :description "JSON body"}
                  ;(ajax/ring-response-format {:format ajax/json-response-format}) ;(ajax/json-response-format {:keywords? true})
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [::success-post-result]
                  :on-failure      [::failure-post-result]}}))

(re-frame/reg-event-fx                                      ;; <-- note the `-fx` extension
  ::http-get                                                ;; <-- the event id
  (fn                                                       ;; <-- the handler function
    [{db :db} _]                                            ;; <-- 1st argument is coeffect, from which we extract db

    ;; we return a map of (side) effects
    {:http-xhrio {:method          :get
                  :uri             "http://localhost:80/api/v1/"
                  :headers         {"Access-Control-Allow-Origin" "*"}
                  ;:format          (ajax/json-request-format)
                  ;:response-format (ajax/json-response-format {:keywords? true})
                  :response-format (ajax/ring-response-format {:format (ajax/json-response-format {:keywords? true})})
                  :on-success      [::success-post-result]
                  :on-failure      [::failure-post-result]}}))

(re-frame/reg-event-db
  ::process-response
  (fn [db [_ result]]
    (assoc db :http-post-result-text result)))              ;not post, but get, don't mind




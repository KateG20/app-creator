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
     ;:log-field-display     "none"
     :log-text              "Finished!"
     :tables                [0 1]
     :table-columns         [[0 0] [0 1] [1 0]]
     :controllers                [0]
     :controller-methods         [[0 0] [0 1] [0 2]]
     :client-endpoints [0 1]
     :jar-conts [0]
     :data                  {:db
                             {:postgresql
                              {:db-name  nil,
                               :host     nil,
                               :username nil,
                               :password nil,
                               :tables   nil
                               ;[{:table-name "t1",
                               ;  :columns
                               ;  ({:col-name "c1", :opts "string"}
                               ;   {:col-name "c2", :opts "number"}
                               ;   {:col-name "c3", :opts "date"})}
                               ; {:table-name "t2", :columns
                               ;  ({:col-name "c1", :opts "bool"})}]
                               }},
                             :server
                             {:spring
                              {:project
                               {:build        "maven",
                                :language     "java",
                                :boot-version "2.6.6",
                                :group        "com.example",
                                :artifact     "demo_proj",
                                :proj-name    "my_demo_project",
                                :description  "demo_description",
                                :packaging    "jar",
                                :java-version "11",
                                ;:project-version "0.0.1-SNAPSHOT",
                                ;:deps            ("security")
                                },
                               :properties
                               {:db
                                {:type     "postgresql",
                                 :username nil,
                                 :password nil,
                                 :sql-host nil,
                                 :sql-port nil,
                                 :db-name  nil}},
                               :controllers nil
                               ;[{:controller-name nil,
                               ;  :requests
                               ;  [{:req-name "login", :uri "/login", :mapping "get"}
                               ;   {:req-name "deleteUser", :uri "/user/delete", :mapping "delete"}
                               ;   {:req-name "createUser", :uri "/user/create", :mapping "post"}]}
                               ; {:controller-name "ShoutController",
                               ;  :requests
                               ;  [{:req-name "shout", :uri "/shout", :mapping "post"}
                               ;   {:req-name "findAll", :uri "/shouts", :mapping "get"}]}]
                               }},
                             :client
                             {:android
                              {:proj-name      nil,
                               :language       nil,
                               :package-name   nil,
                               :test-framework nil,
                               :server-host    nil,
                               :server-port    nil,
                               :requests       nil
                               ;[{:req-name "getUser", :uri "/user", :type "get", :entity "User"}
                               ; {:req-name "postShout",
                               ;  :uri      "/shout",
                               ;  :type     "post",
                               ;  :entity   "Shout"}]
                               }},
                             :containerization
                             {:docker
                              {:jars
                               [{:image-name     nil,
                                 :container-name nil,
                                 :dir-name       nil,
                                 :jar-path       nil}
                                ;{:image-name     "second-image",
                                ; :container-name "second-container",
                                ; :dir-name       "second-dir",
                                ; :jar-path
                                ; "C:/Users/Lenovo X1/Downloads/kursach files/first.jar"}
                                ],
                               :nginx
                               [{:image-name             nil,
                                 :container-name         nil,
                                 :dir-name               nil,
                                 :backend-container-name nil}
                                ;{:image-name             "second-nginx",
                                ; :container-name         "second-nginx-c",
                                ; :dir-name               "second-nginx-dir",
                                ; :backend-container-name "does-not-matter"}
                                ],
                               :postgres [{:container-name nil, :port nil, :password nil}],
                               :network  {:network-name nil}}}}
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
    (assoc db :log-field-display "block"
              ;:http-post-result-text (str "success! " result)
              :log-text "Finished!"
              )))

(re-frame/reg-event-db
  ::failure-post-result
  (fn [db [_ result]]
    ;; result is a map containing details of the failure
    (assoc db :log-field-display "block"
              ;:http-post-result-text (str "failure! " result)
              :log-text "Something went wrong!"
              )))

; :params - "GET will add params onto the query string, POST will put the params in the body"
; but there are also :body and :url-params.

(re-frame/reg-event-fx
  ::http-post
  (fn [{:keys [db] :as cofx} [_ val]]
    {:http-xhrio {:method          :post
                  :uri             "http://localhost:80/api/v1/create"
                  :params          (:data db)               ;{:framework (:server-framework-text db), :language (:server-lang-text db)} ;(str "{\"framework\": \"" (:server-framework-text db) "\", \"language\": \"" (:server-lang-text db) "\"}") ; val
                  ;:timeout         5000
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

; Добавляет таблицу БД (new item = table-num)
(re-frame/reg-event-db
  ::add-table-item
  (fn [db [_ new-item]]
    (update-in db [:tables] conj new-item)))

; Добавляет колонку в таблицу БД (new item = [table-num col-num])
(re-frame/reg-event-db
  ::add-table-column-item
  (fn [db [_ new-item]]
    (update-in db [:table-columns] conj new-item)))

; Добавляет контроллер сервера (new item = controller-num)
(re-frame/reg-event-db
  ::add-controller-item
  (fn [db [_ new-item]]
    (update-in db [:controllers] conj new-item)))

; Добавляет метод в контроллер сервера (new item = [controller-num req-num])
(re-frame/reg-event-db
  ::add-controller-method-item
  (fn [db [_ new-item]]
    (update-in db [:controller-methods] conj new-item)))

; Добавляет эндпоинт клиента (new item = endpoint-num)
(re-frame/reg-event-db
  ::add-client-endpoint-item
  (fn [db [_ new-item]]
    (update-in db [:client-endpoints] conj new-item)))

; Добавляет джар-контейнер (new item = jar-cont-num)
(re-frame/reg-event-db
  ::add-jar-cont-item
  (fn [db [_ new-item]]
    (update-in db [:jar-conts] conj new-item)))






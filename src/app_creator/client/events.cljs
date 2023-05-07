(ns app-creator.client.events
  (:require [re-frame.core :as re-frame]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax]
            [app-creator.client.ui.validator :as v]
            [app-creator.client.init :as init]))

; С событиями всё понятно, тут просто регистрируем события, чтобы потом по ключу
; их диспатчить в нужных местах. Мне нужно было много времени, чтобы понять, как куда и что
; в них правильно писать, но для стандартных событий всё изично.

; Событие для изначальной инициации дб (вызывается потом в методе run, перед рендером)
(re-frame/reg-event-db                                      ;; sets up initial application state
  ::initialize
  (fn [_ _]                                                 ;; arguments not important, so use _
    init/init-db))                                          ; https://day8.github.io/re-frame/dominoes-live/#initialize

; мусор START
; Для вызова при изменении текста; меняет состояние текста и состояние дисплея ошибки в дб
;(re-frame/reg-event-db
;  ::text-change
;  (fn [db [_ new-text-value]]
;    (assoc db :text new-text-value
;              :error-display (if (< (count new-text-value) 5) "block" "none"))))
;
;(re-frame/reg-event-db
;  ::server-framework-text-change
;  (fn [db [_ new-text-value]]
;    (assoc db :server-framework-text new-text-value
;              :error-display (if (< (count new-text-value) 5) "block" "none"))))
;
;(re-frame/reg-event-db
;  ::server-lang-text-change
;  (fn [db [_ new-text-value]]
;    (assoc db :server-lang-text new-text-value
;              :error-display (if (< (count new-text-value) 5) "block" "none"))))

; мусор END

(re-frame/reg-event-db
  ::success-post-result
  (fn [db [_ result]]
    (assoc db
      ;:log-field-display "block"
      ;:http-post-result-text (str "success! " result)
      :log-text (str "Finished! " result)
      )))

(re-frame/reg-event-db
  ::failure-post-result
  (fn [db [_ result]]
    ;; result is a map containing details of the failure
    (assoc db
      ;:log-field-display "block"
      ;:http-post-result-text (str "failure! " result)
      :log-text "Something went wrong!"
      )))

; :params - "GET will add params onto the query string, POST will put the params in the body"
; but there are also :body and :url-params.

(re-frame/reg-event-fx
  ::http-post
  (fn [{:keys [db] :as cofx} [_ val]]
    ;(if-not (:all-valid db)
    ;(assoc db :log-text "Some data is incorrect. Check it again!")
    {:http-xhrio {:method          :post
                  :uri             "http://localhost:80/api/v1/create"
                  :params          (:data db)
                  ;:body          (:data db)
                  ;:timeout         5000
                  :headers         {"Content-Type" "application/json"}
                  :format          (ajax/json-request-format)
                  ;:response-format {:content-type "application/json" :description "JSON body"}
                  ;(ajax/ring-response-format {:format ajax/json-response-format}) ;(ajax/json-response-format {:keywords? true})
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [::success-post-result]
                  :on-failure      [::failure-post-result]}}))

;(re-frame/reg-event-fx
;  ::create-projects
;  (fn [{:keys [db] :as cofx} _]
;    ;(if-not (:all-valid db)
;    (assoc db :log-text (str "Is DB valid? " (v/whole-app-db-valid? db)))
;    {
;     :db (assoc db :log-text (v/whole-app-db-valid? db))
;     ;:fx [[:dispatch [::http-post]]]
;     }))

(re-frame/reg-event-fx
  ::create-projects
  (fn [{:keys [db]} _]
    ;{:db (assoc db :log-text (str "Is DB valid? " (v/whole-map-valid? (:data db))))
    ; :fx [[:dispatch [::http-post]]]}
    (let [data-valid (v/whole-map-valid? (:data db))]
      (-> {}
          (assoc :db (if data-valid nil
                                    (assoc db :log-text
                                              "Cannot create project: some data is invalid!
                                              Check red fields above.")))
          (assoc :fx (if data-valid [[:dispatch [::http-post]]] nil))))))

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
  ::out-path-text-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (v/valid-dir? new-value)                 ;todo
          place [:data :out-path]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

;-----------------------------------------------DB EVENTS-----------------------------------------------

; Отмечает выбранный тип бд (new-value = тип)
(re-frame/reg-event-db
  ::change-db-checked
  (fn [db [_ new-value]]
    (assoc-in db [:data :db :type] new-value)))

(re-frame/reg-event-db
  ::postgres-db-name-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :db :postgres :db-name]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::postgres-host-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))
          place [:data :db :postgres :host]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::postgres-username-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :db :postgres :username]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::postgres-password-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :db :postgres :password]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::postgres-table-name-change
  (fn [db [_ new-value box]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :db :postgres :tables :content box :name]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::postgres-column-name-change
  (fn [db [_ new-value box row]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :db :postgres :tables :content box :columns row :name]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::postgres-column-opts-change
  (fn [db [_ new-value box row]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :db :postgres :tables :content box :columns row :opts]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

; Добавляет таблицу БД (new item = table-num)
(re-frame/reg-event-db
  ::add-table-item
  (fn [db [_ new-item]]
    (-> db
        (update-in [:data :db :postgres :tables :table-vec] conj new-item)
        (assoc-in [:data :db :postgres :tables :content new-item]
                  {:name    {:value ""
                             :valid true}
                   :columns nil
                   }))))

; Добавляет колонку в таблицу БД (new item = [table-num col-num])
(re-frame/reg-event-db
  ::add-table-column-item
  (fn [db [_ new-item]]
    (-> db
        (update-in [:data :db :postgres :tables :column-vec] conj new-item)
        (assoc-in [:data :db :postgres :tables :content (first new-item) :columns (second new-item)]
                  {:name {:value ""
                          :valid true}
                   :opts {:value ""
                          :valid true}}))))


;-----------------------------------------------SERVER EVENTS-----------------------------------------------

; Отмечает выбранный тип сервера (new-value = тип)
(re-frame/reg-event-db
  ::change-server-checked
  (fn [db [_ new-value]]
    (assoc-in db [:data :server :type] new-value)))

(re-frame/reg-event-db
  ::change-spring-opt-radio
  (fn [db [_ opt-keyword new-value]]
    (assoc-in db [:data :server :spring :project opt-keyword] new-value)))

(re-frame/reg-event-db
  ::spring-group-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :project :group]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::spring-artifact-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :project :artifact]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::spring-proj-name-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :project :proj-name]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::spring-description-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :project :description]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

; попробую запихнуть все пропсы в один ивент
(re-frame/reg-event-db
  ::spring-db-props-change
  (fn [db [_ prop-keyword new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (case prop-keyword
                            :type (v/valid-host? new-value) ;todo
                            :username (v/valid-host? new-value) ;todo
                            :password (v/valid-host? new-value) ;todo
                            :sql-host (v/valid-host? new-value)
                            :sql-port (v/valid-host? new-value) ;todo
                            :db-name (v/valid-host? new-value))) ;todo
          place [:data :server :spring :properties :db prop-keyword]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::spring-controller-name-change
  (fn [db [_ new-value box]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :controllers :content box :name]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::spring-method-name-change
  (fn [db [_ new-value box row]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :controllers :content box :methods row :name]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::spring-method-url-change
  (fn [db [_ new-value box row]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :controllers :content box :methods row :url]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::spring-method-type-change
  (fn [db [_ new-value box row]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :controllers :content box :methods row :type]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

;(re-frame/reg-event-db
;  ::change-spring-lang
;  (fn [db [_ new-value]]
;    (assoc-in db [:checked :server :spring :lang] new-value)))
;
;(re-frame/reg-event-db
;  ::change-spring-pack
;  (fn [db [_ new-value]]
;    (assoc-in db [:checked :server :spring :pack] new-value)))
;
;(re-frame/reg-event-db
;  ::change-spring-boot-v
;  (fn [db [_ new-value]]
;    (assoc-in db [:checked :server :spring :boot-v] new-value)))
;
;(re-frame/reg-event-db
;  ::change-spring-java-v
;  (fn [db [_ new-value]]
;    (assoc-in db [:checked :server :spring :java-v] new-value)))

; Добавляет контроллер сервера (new item = controller-num)
(re-frame/reg-event-db
  ::add-controller-item
  (fn [db [_ new-item]]
    (-> db
        (update-in [:data :server :spring :controllers :controller-vec] conj new-item)
        (assoc-in [:data :server :spring :controllers :content new-item]
                  {:name    {:value ""
                             :valid true}
                   :methods nil
                   }))))

; Добавляет метод в контроллер сервера (new item = [controller-num req-num])
(re-frame/reg-event-db
  ::add-controller-method-item
  (fn [db [_ new-item]]
    (-> db
        (update-in [:data :server :spring :controllers :method-vec] conj new-item)
        (assoc-in [:data :server :spring :controllers :content (first new-item) :methods (second new-item)]
                  {:name {:value ""
                          :valid true}
                   :url  {:value ""
                          :valid true}
                   :type {:value ""
                          :valid true}}))))


;-----------------------------------------------CLIENT EVENTS-----------------------------------------------

(re-frame/reg-event-db
  ::change-client-checked
  (fn [db [_ new-value]]
    (assoc-in db [:data :client :type] new-value)))

(re-frame/reg-event-db
  ::android-radio-opts-change
  (fn [db [_ opt-keyword new-value]]
    (assoc-in db [:data :client :android opt-keyword] new-value)))

(re-frame/reg-event-db
  ::android-props-change
  (fn [db [_ prop-keyword new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (case prop-keyword
                            :proj-name (v/valid-host? new-value) ;todo
                            :package-name (v/valid-host? new-value) ;todo
                            :server-host (v/valid-host? new-value)
                            :server-port (v/valid-host? new-value))) ;todo
          place [:data :client :android prop-keyword]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

;(re-frame/reg-event-db
;  ::change-android-lang
;  (fn [db [_ new-value]]
;    (assoc-in db [:checked :client :android :lang] new-value)))

;(re-frame/reg-event-db
;  ::change-android-test
;  (fn [db [_ new-value]]
;    (assoc-in db [:checked :client :android :test] new-value)))

(re-frame/reg-event-db
  ::android-endpoint-url-change
  (fn [db [_ new-value box]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-url? new-value))
          place [:data :client :android :endpoints :content box :url]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::android-endpoint-method-change
  (fn [db [_ new-value box]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-java-name? new-value))
          place [:data :client :android :endpoints :content box :name]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::android-endpoint-request-change
  (fn [db [_ new-value box]]
    (let [new-value (v/trim-input new-value)
          is-valid (v/valid-req-type? new-value)
          place [:data :client :android :endpoints :content box :request]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::android-endpoint-body-change
  (fn [db [_ new-value box]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-java-name? new-value))
          place [:data :client :android :endpoints :content box :body]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

; Добавляет пустой эндпоинт клиента (new item = endpoint-num, в вектор добавляется новая чиселка)
(re-frame/reg-event-db
  ::add-client-endpoint-item
  (fn [db [_ new-item]]
    (-> db
        (update-in [:data :client :android :endpoints :endpoints-vec] conj new-item)
        (assoc-in [:data :client :android :endpoints :content new-item]
                  {:url     {:value ""
                             :valid true}
                   :name    {:value ""
                             :valid true}
                   :request {:value ""
                             :valid true}
                   :body    {:value ""
                             :valid true}}))))

;-----------------------------------------------DEPLOY EVENTS-----------------------------------------------

(re-frame/reg-event-db
  ::change-deploy-checked
  (fn [db [_ new-value]]
    (assoc-in db [:data :containerization :type] new-value)))

; type-keyword = :jars/:nginx/:postgres
(re-frame/reg-event-db
  ::docker-container-opts-change
  (fn [db [_ new-value box type-keyword prop-keyword]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (case prop-keyword
                            :image-name (v/valid-host? new-value) ;todo
                            :container-name (v/valid-host? new-value) ;todo
                            :dir-name (v/valid-host? new-value) ;todo
                            :backend-container-name (v/valid-host? new-value) ;todo
                            :jar-path (v/valid-host? new-value) ;todo
                            :port (v/valid-host? new-value) ;todo
                            :password (v/valid-host? new-value))) ;todo
          place [:data :containerization :docker type-keyword :content box prop-keyword]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

(re-frame/reg-event-db
  ::docker-network-change
  (fn [db [_ new-value]]
    (let [new-value (v/trim-input new-value)
          is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :containerization :docker :network]]
      (-> db
          (assoc-in (conj place :value) new-value)
          (assoc-in (conj place :valid) is-valid)))))

; Добавляет джар-контейнер (new item = jar-cont-num)
(re-frame/reg-event-db
  ::add-jar-cont-item
  (fn [db [_ new-item]]
    (-> db
        (update-in [:data :containerization :docker :jars :cont-vec] conj new-item)
        (assoc-in [:data :containerization :docker :jars :content new-item]
                  {:image-name     {:value ""
                                    :valid true}
                   :container-name {:value ""
                                    :valid true}
                   :dir-name       {:value ""
                                    :valid true}
                   :jar-path       {:value ""
                                    :valid true}}))))

; Добавляет nginx-контейнер (new item = nginx-cont-num)
(re-frame/reg-event-db
  ::add-nginx-cont-item
  (fn [db [_ new-item]]
    (-> db
        (update-in [:data :containerization :docker :nginx :cont-vec] conj new-item)
        (assoc-in [:data :containerization :docker :nginx :content new-item]
                  {:image-name             {:value ""
                                            :valid true}
                   :container-name         {:value ""
                                            :valid true}
                   :dir-name               {:value ""
                                            :valid true}
                   :backend-container-name {:value ""
                                            :valid true}}))))

; Добавляет postgres-контейнер (new item = postgres-cont-num)
(re-frame/reg-event-db
  ::add-postgres-cont-item
  (fn [db [_ new-item]]
    (-> db
        (update-in [:data :containerization :docker :postgres :cont-vec] conj new-item)
        (assoc-in [:data :containerization :docker :postgres :content new-item]
                  {:container-name {:value ""
                                    :valid true}
                   :port           {:value ""
                                    :valid true}
                   :password       {:value ""
                                    :valid true}}))))








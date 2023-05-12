(ns app-creator.client.events
  (:require [re-frame.core :as re-frame]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax]
            [app-creator.client.ui.validator :as v]
            [app-creator.client.init :as init]
            [cljs.reader :as r]
            [clojure.pprint :as pp]))

; С событиями всё понятно, тут просто регистрируем события, чтобы потом по ключу
; их диспатчить в нужных местах. Мне нужно было много времени, чтобы понять, как куда и что
; в них правильно писать, но для стандартных событий всё изично.

; Событие для инициации дб (вызывается в методе run, перед рендером)
(re-frame/reg-event-db                                      ;; sets up initial application state
  ::initialize
  (fn [_ _]                                                 ;; arguments not important, so use _
    (let [stored-data (.getItem (.-localStorage js/window) :all-data)
          empty-data init/init-db]
      (println stored-data)
      (if stored-data
        (assoc empty-data :data (r/read-string stored-data))
        empty-data)
      ;empty-data
      )))                                                   ; https://day8.github.io/re-frame/dominoes-live/#initialize

; clears only :data value! Not :loading, nor :log-text, nor anything else outside :data
(re-frame/reg-event-fx
  ::clear-data
  (fn [{:keys [db]} _]
    (let [db-with-empty-data (assoc db :data (get init/init-db :data))]
      {:db             db-with-empty-data
       :update-storage db-with-empty-data})))

; updates only :data value! Not :loading, nor :log-text, nor anything else outside :data
(re-frame/reg-fx
  :update-storage
  (fn [new-db]
    ;(println new-db)
    (.setItem (.-localStorage js/window) :all-data (pr-str (:data new-db)))))

(defn input-update-handler [is-valid-func place]
  (fn [{db :db} [_ new-value]]
    (let [is-valid (some? (is-valid-func new-value))
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(defn radio-check-handler
  ([place]
   (fn [{db :db} [_ new-value]]
     (let [updated-db (assoc-in db place new-value)]
       {:db             updated-db
        :update-storage updated-db})))
  ([place opts?]
   (fn [{db :db} [_ opt-keyword new-value]]
     (let [updated-db (assoc-in db (conj place opt-keyword) new-value)]
       {:db             updated-db
        :update-storage updated-db}))))

(re-frame/reg-event-fx
  ::success-post-result
  (fn [{db :db} [_ response]]
    {:db (assoc db :loading false
                   :log-text (str "Finished! " response))}))

(re-frame/reg-event-fx
  ::failure-post-result
  (fn [{db :db} [_ details]]
    {:db (assoc db :loading false
                   :log-text (str "Something went wrong! " (:debug-message details) ". Server may be down. \n" details))}))

; :params - "GET will add params onto the query string, POST will put the params in the body"
; but there are also :body and :url-params.

(re-frame/reg-event-fx
  ::http-post
  (fn [{:keys [db] :as cofx} [_ val]]
    {:http-xhrio {:method          :post
                  :uri             "http://localhost:80/api/v1/create"
                  :params          (:data db)
                  :headers         {"Content-Type" "application/json"}
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [::success-post-result]
                  :on-failure      [::failure-post-result]}}))

(re-frame/reg-event-fx
  ::create-projects
  (fn [{db :db} _]
    (let [data-valid (v/whole-map-valid? (:data db))
          at-least-one-component (v/at-least-one-component (:data db))]
      ;(println (pp/pprint (r/read-string (.getItem (.-localStorage js/window) :all-data))))
      ;(println data-valid)

      (if at-least-one-component
        (if data-valid
          {:db (assoc db :loading true
                         :log-text "Please wait...")
           :fx [[:dispatch [::http-post]]]}
          {:db (assoc db :log-text
                         "Cannot create project: some data is invalid!
                         Check red fields above.")})
        {:db (assoc db :log-text
                       "Choose at least one component you want to create!")}))))

(re-frame/reg-event-db
  ::set-loading
  (fn [db [_ loading?]]
    (assoc db :loading? loading?)))

(re-frame/reg-event-fx
  ::out-path-text-change
  (input-update-handler v/valid-dir? [:data :out-path]))

;-----------------------------------------------DB EVENTS-----------------------------------------------

; Отмечает выбранный тип бд (new-value = тип)
(re-frame/reg-event-fx
  ::change-db-checked
  (radio-check-handler [:data :db :type]))

(re-frame/reg-event-fx
  ::postgres-db-name-change
  (input-update-handler v/valid-host? [:data :db :postgres :db-name])) ;todo

(re-frame/reg-event-fx
  ::postgres-host-change
  (input-update-handler v/valid-host? [:data :db :postgres :host]))

(re-frame/reg-event-fx
  ::postgres-username-change
  (input-update-handler v/valid-host? [:data :db :postgres :username]))

(re-frame/reg-event-fx
  ::postgres-password-change
  (input-update-handler v/valid-host? [:data :db :postgres :password]))

(re-frame/reg-event-fx
  ::postgres-table-name-change
  (fn [{db :db} [_ new-value box]]
    (let [is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :db :postgres :tables :content box :name]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::postgres-column-name-change
  (fn [{db :db} [_ new-value box row]]
    (let [is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :db :postgres :tables :content box :columns row :name]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::postgres-column-opts-change
  (fn [{db :db} [_ new-value box row]]
    (let [is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :db :postgres :tables :content box :columns row :opts]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

; Добавляет таблицу БД (new item = table-num)
(re-frame/reg-event-fx
  ::add-table-item
  (fn [{db :db} [_ new-item]]
    (let [updated-db (-> db
                         (update-in [:data :db :postgres :tables :table-vec] conj new-item)
                         (assoc-in [:data :db :postgres :tables :content new-item]
                                   {:name    {:value ""
                                              :valid true}
                                    :columns nil
                                    }))]
      (println (str "added. new: \n" (get-in updated-db [:data :db :postgres :tables :table-vec])
                    "\n" (get-in updated-db [:data :db :postgres :tables :column-vec])
                    "\n" (get-in updated-db [:data :db :postgres :tables :content])))
      {:db             updated-db
       :update-storage updated-db})))

; Добавляет колонку в таблицу БД (new item = [table-num col-num])
(re-frame/reg-event-fx
  ::add-table-column-item
  (fn [{db :db} [_ new-item]]
    (let [updated-db (-> db
                         (update-in [:data :db :postgres :tables :column-vec] conj new-item)
                         (assoc-in [:data :db :postgres :tables :content (first new-item) :columns (second new-item)]
                                   {:name {:value ""
                                           :valid true}
                                    :opts {:value ""
                                           :valid true}}))]
      (println (str "added. new: \n" (get-in updated-db [:data :db :postgres :tables :table-vec])
                    "\n" (get-in updated-db [:data :db :postgres :tables :column-vec])
                    "\n" (get-in updated-db [:data :db :postgres :tables :content])))
      {:db             updated-db
       :update-storage updated-db})))

(defn remove-elem [coll pred]
  (vec (remove pred coll)))

; Удаляет таблицу БД
(re-frame/reg-event-fx
  ::minus-table-item
  (fn [{db :db} [_ id]]
    (println (str "old: \n" (get-in db [:data :db :postgres :tables :table-vec])
                  "\n" (get-in db [:data :db :postgres :tables :column-vec])
                  "\n" (get-in db [:data :db :postgres :tables :content])))

    (let [updated-db (-> db
                         (update-in [:data :db :postgres :tables :table-vec] remove-elem #(= % id))
                         (update-in [:data :db :postgres :tables :column-vec] remove-elem #(= (first %) id))
                         (update-in [:data :db :postgres :tables :content] dissoc id))]

      (println (str "removed. new: \n" (get-in updated-db [:data :db :postgres :tables :table-vec])
                    "\n" (get-in updated-db [:data :db :postgres :tables :column-vec])
                    "\n" (get-in updated-db [:data :db :postgres :tables :content])))
      {:db             updated-db
       :update-storage updated-db})))

; Удаляет колонку в таблице БД
(re-frame/reg-event-fx
  ::minus-table-column-item
  (fn [{db :db} [_ t-id col-id]]
    (println (str "old: \n" (get-in db [:data :db :postgres :tables :table-vec])
                  "\n" (get-in db [:data :db :postgres :tables :column-vec])
                  "\n" (get-in db [:data :db :postgres :tables :content])))

    (let [updated-db (-> db
                         (update-in [:data :db :postgres :tables :column-vec]
                                    remove-elem #(and
                                                   (= (first %) t-id)
                                                   (= (second %) col-id)))
                         (update-in [:data :db :postgres :tables :content t-id :columns] dissoc col-id))]

      (println (str "removed. new: \n" (get-in updated-db [:data :db :postgres :tables :table-vec])
                    "\n" (get-in updated-db [:data :db :postgres :tables :column-vec])
                    "\n" (get-in updated-db [:data :db :postgres :tables :content])))
      {:db             updated-db
       :update-storage updated-db})))


;-----------------------------------------------SERVER EVENTS-----------------------------------------------

; Отмечает выбранный тип сервера (new-value = тип)
(re-frame/reg-event-fx
  ::change-server-checked
  (radio-check-handler [:data :server :type]))

(re-frame/reg-event-fx
  ::change-spring-opt-radio
  (radio-check-handler [:data :server :spring :project] true))

(re-frame/reg-event-fx
  ::spring-group-change
  (input-update-handler v/valid-host? [:data :server :spring :project :group]))

(re-frame/reg-event-fx
  ::spring-artifact-change
  (input-update-handler v/valid-host? [:data :server :spring :project :artifact]))

(re-frame/reg-event-fx
  ::spring-proj-name-change
  (input-update-handler v/valid-host? [:data :server :spring :project :proj-name]))

(re-frame/reg-event-fx
  ::spring-description-change
  (input-update-handler v/valid-host? [:data :server :spring :project :description]))

; попробую запихнуть все пропсы в один ивент
(re-frame/reg-event-fx
  ::spring-db-props-change
  (fn [{db :db} [_ prop-keyword new-value]]
    (let [is-valid (some? (case prop-keyword
                            :type (v/valid-host? new-value) ;todo
                            :username (v/valid-host? new-value) ;todo
                            :password (v/valid-host? new-value) ;todo
                            :sql-host (v/valid-host? new-value)
                            :sql-port (v/valid-host? new-value) ;todo
                            :db-name (v/valid-host? new-value))) ;todo
          place [:data :server :spring :properties :db prop-keyword]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::spring-controller-name-change
  (fn [{db :db} [_ new-value box]]
    (let [is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :controllers :content box :name]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::spring-method-name-change
  (fn [{db :db} [_ new-value box row]]
    (let [is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :controllers :content box :methods row :name]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::spring-method-url-change
  (fn [{db :db} [_ new-value box row]]
    (let [is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :controllers :content box :methods row :url]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::spring-method-type-change
  (fn [{db :db} [_ new-value box row]]
    (let [is-valid (some? (v/valid-host? new-value))        ;todo
          place [:data :server :spring :controllers :content box :methods row :type]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

; Добавляет контроллер сервера (new item = controller-num)
(re-frame/reg-event-fx
  ::add-controller-item
  (fn [{db :db} [_ new-item]]
    (let [updated-db (-> db
                         (update-in [:data :server :spring :controllers :controller-vec] conj new-item)
                         (assoc-in [:data :server :spring :controllers :content new-item]
                                   {:name    {:value ""
                                              :valid true}
                                    :methods nil
                                    }))]
      {:db             updated-db
       :update-storage updated-db}
      )))

; Добавляет метод в контроллер сервера (new item = [controller-num req-num])
(re-frame/reg-event-fx
  ::add-controller-method-item
  (fn [{db :db} [_ new-item]]
    (let [updated-db (-> db
                         (update-in [:data :server :spring :controllers :method-vec] conj new-item)
                         (assoc-in [:data :server :spring :controllers :content (first new-item) :methods (second new-item)]
                                   {:name {:value ""
                                           :valid true}
                                    :url  {:value ""
                                           :valid true}
                                    :type {:value ""
                                           :valid true}}))]
      {:db             updated-db
       :update-storage updated-db}
      )))


;-----------------------------------------------CLIENT EVENTS-----------------------------------------------

(re-frame/reg-event-fx
  ::change-client-checked
  (radio-check-handler [:data :client :type]))

(re-frame/reg-event-fx
  ::android-radio-opts-change
  (radio-check-handler [:data :client :android] true))

(re-frame/reg-event-fx
  ::android-props-change
  (fn [{db :db} [_ prop-keyword new-value]]
    (let [is-valid (some? (case prop-keyword
                            :proj-name (v/valid-host? new-value) ;todo
                            :package-name (v/valid-host? new-value) ;todo
                            :server-host (v/valid-host? new-value)
                            :server-port (v/valid-host? new-value))) ;todo
          place [:data :client :android prop-keyword]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))


(re-frame/reg-event-fx
  ::android-endpoint-url-change
  (fn [{db :db} [_ new-value box]]
    (let [is-valid (some? (v/valid-url? new-value))         ;todo
          place [:data :client :android :endpoints :content box :url]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::android-endpoint-method-change
  (fn [{db :db} [_ new-value box]]
    (let [is-valid (some? (v/valid-java-name? new-value))   ;todo
          place [:data :client :android :endpoints :content box :name]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::android-endpoint-request-change
  (fn [{db :db} [_ new-value box]]
    (let [is-valid (some? (v/valid-req-type? new-value))    ;todo
          place [:data :client :android :endpoints :content box :request]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::android-endpoint-body-change
  (fn [{db :db} [_ new-value box]]
    (let [is-valid (some? (v/valid-java-name? new-value))   ;todo
          place [:data :client :android :endpoints :content box :body]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

; Добавляет пустой эндпоинт клиента (new item = endpoint-num, в вектор добавляется новая чиселка)
(re-frame/reg-event-fx
  ::add-client-endpoint-item
  (fn [{db :db} [_ new-item]]
    (let [updated-db (-> db
                         (update-in [:data :client :android :endpoints :endpoints-vec] conj new-item)
                         (assoc-in [:data :client :android :endpoints :content new-item]
                                   {:url     {:value ""
                                              :valid true}
                                    :name    {:value ""
                                              :valid true}
                                    :request {:value ""
                                              :valid true}
                                    :body    {:value ""
                                              :valid true}}))]
      {:db             updated-db
       :update-storage updated-db})))

;-----------------------------------------------DEPLOY EVENTS-----------------------------------------------

(re-frame/reg-event-fx
  ::change-deploy-checked
  (radio-check-handler [:data :containerization :type]))

; type-keyword = :jars/:nginx/:postgres
(re-frame/reg-event-fx
  ::docker-container-opts-change
  (fn [{db :db} [_ new-value box type-keyword prop-keyword]]
    (let [is-valid (some? (case prop-keyword
                            :image-name (v/valid-host? new-value) ;todo
                            :container-name (v/valid-host? new-value) ;todo
                            :dir-name (v/valid-host? new-value) ;todo
                            :backend-container-name (v/valid-host? new-value) ;todo
                            :jar-path (v/valid-host? new-value) ;todo
                            :port (v/valid-host? new-value) ;todo
                            :password (v/valid-host? new-value))) ;todo
          place [:data :containerization :docker type-keyword :content box prop-keyword]
          updated-db (-> db
                         (assoc-in (conj place :value) new-value)
                         (assoc-in (conj place :valid) is-valid))]
      {:db             updated-db
       :update-storage updated-db})))

(re-frame/reg-event-fx
  ::docker-network-change
  (input-update-handler v/valid-host? [:data :containerization :docker :network]))

; Добавляет джар-контейнер (new item = jar-cont-num)
(re-frame/reg-event-fx
  ::add-jar-cont-item
  (fn [{db :db} [_ new-item]]
    (let [updated-db (-> db
                         (update-in [:data :containerization :docker :jars :cont-vec] conj new-item)
                         (assoc-in [:data :containerization :docker :jars :content new-item]
                                   {:image-name     {:value ""
                                                     :valid true}
                                    :container-name {:value ""
                                                     :valid true}
                                    :dir-name       {:value ""
                                                     :valid true}
                                    :jar-path       {:value ""
                                                     :valid true}}))]
      {:db             updated-db
       :update-storage updated-db})))

; Добавляет nginx-контейнер (new item = nginx-cont-num)
(re-frame/reg-event-fx
  ::add-nginx-cont-item
  (fn [{db :db} [_ new-item]]
    (let [updated-db (-> db
                         (update-in [:data :containerization :docker :nginx :cont-vec] conj new-item)
                         (assoc-in [:data :containerization :docker :nginx :content new-item]
                                   {:image-name             {:value ""
                                                             :valid true}
                                    :container-name         {:value ""
                                                             :valid true}
                                    :dir-name               {:value ""
                                                             :valid true}
                                    :backend-container-name {:value ""
                                                             :valid true}}))]
      {:db             updated-db
       :update-storage updated-db})))

; Добавляет postgres-контейнер (new item = postgres-cont-num)
(re-frame/reg-event-fx
  ::add-postgres-cont-item
  (fn [{db :db} [_ new-item]]
    (let [updated-db (-> db
                         (update-in [:data :containerization :docker :postgres :cont-vec] conj new-item)
                         (assoc-in [:data :containerization :docker :postgres :content new-item]
                                   {:container-name {:value ""
                                                     :valid true}
                                    :port           {:value ""
                                                     :valid true}
                                    :password       {:value ""
                                                     :valid true}}))]
      {:db             updated-db
       :update-storage updated-db})))







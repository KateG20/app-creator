(ns app-creator.client.subs
  (:require [re-frame.core :as re-frame]))

; Неймспейс, где регистрируем подписки на все нужные значения.
; Иерархию db (app-db, то бишь просто состояние, все нужные хранящиеся данные) можно посмотреть
; в файле init.cljs. Там определяется изначальное состояние app-db.

; Ниже - это я давно писала комменты для себя тупенькой.

; Вызываются потом в методе subscribe, в результате - атом(?)-ссылка на значение, которое возвращает fn.
; Эти ссылки потом просто вставляются в нужные места разметки, а при вызовах событий в их (событий)
; функциях описано, как значения (идентифицируемые по ключам, возвращаемым fn в reg-sub) меняются.

; Для регистрации ноды текста
;(re-frame/reg-sub
;  ::text
;  (fn [db _]
;    (:text db)))
;
;; Для регистрации ноды дисплея ошибки
;(re-frame/reg-sub
;  ::error-display
;  (fn [db _]
;    (:error-display db)))
;
;(re-frame/reg-sub
;  ::success-display
;  (fn [db _]
;    (:success-display db)))

;; Для регистрации текста про сервер
;(re-frame/reg-sub
;  ::server-framework-text
;  (fn [db _]
;    (:server-framework-text db)))
;
;(re-frame/reg-sub
;  ::server-lang-text
;  (fn [db _]
;    (:server-lang-text db)))

;(re-frame/reg-sub
;  ::http-post-result-text
;  (fn [db _]
;    (:http-post-result-text db)))

; Окно с логами о прогрессе создания компонентов
;(re-frame/reg-sub
;  ::log-field-display
;  (fn [db _]
;    (:log-field-display db)))

; Текст логов о прогрессе создания компонентов
(re-frame/reg-sub
  ::log-text
  (fn [db _]
    (:log-text db)))

(re-frame/reg-sub
  ::out-path
  (fn [db _]
    (get-in db [:data :out-path])))

;-----------------------------------------------DB SUBS-----------------------------------------------

; Какая СУБД выбрана
(re-frame/reg-sub
  ::db-checked
  (fn [db _]
    (get-in db [:data :db :type])))

(re-frame/reg-sub
  ::postgres-data
  (fn [db _]
    (get-in db [:data :db :postgres])))

; Список таблиц у бд
(re-frame/reg-sub
  ::postgres-tables-vec
  (fn [db _]
    (get-in db [:data :db :postgres :tables :table-vec])))

; Список колонок у бд
(re-frame/reg-sub
  ::postgres-columns-vec
  (fn [db _]
    (get-in db [:data :db :postgres :tables :column-vec])))

(re-frame/reg-sub
  ::postgres-tables-content
  (fn [db _]
    (get-in db [:data :db :postgres :tables :content])))

;; Список таблиц в БД
;(re-frame/reg-sub
;  ::tables
;  (fn [db _]
;    (:tables db)))
;
;; Список колонок таблиц в БД
;(re-frame/reg-sub
;  ::table-columns
;  (fn [db _]
;    (:table-columns db)))

;-----------------------------------------------SERVER SUBS-----------------------------------------------

; Какой сервер фреймворк выбран
(re-frame/reg-sub
  ::server-checked
  (fn [db _]
    (get-in db [:data :server :type])))

(re-frame/reg-sub
  ::spring-data
  (fn [db _]
    (get-in db [:data :server :spring])))

(re-frame/reg-sub
  ::spring-project-opts
  (fn [db _]
    (get-in db [:data :server :spring :project])))

(re-frame/reg-sub
  ::spring-props
  (fn [db _]
    (get-in db [:data :server :spring :properties])))

(re-frame/reg-sub
  ::spring-db-props
  (fn [db _]
    (get-in db [:data :server :spring :properties :db])))

; Список контроллеров у сервера
(re-frame/reg-sub
  ::spring-controllers-vec
  (fn [db _]
    (get-in db [:data :server :spring :controllers :controller-vec])))

; Список методов у контроллеров сервера
(re-frame/reg-sub
  ::spring-controller-methods-vec
  (fn [db _]
    (get-in db [:data :server :spring :controllers :method-vec])))

(re-frame/reg-sub
  ::spring-controllers-content
  (fn [db _]
    (get-in db [:data :server :spring :controllers :content])))

;(re-frame/reg-sub
;  ::server-opts
;  (fn [db _]
;    (:server (:checked db))))

;-----------------------------------------------CLIENT SUBS-----------------------------------------------

; Какая платформа клиента выбрана
(re-frame/reg-sub
  ::client-checked
  (fn [db _]
    (get-in db [:data :client :type])))

(re-frame/reg-sub
  ::android-data
  (fn [db _]
    (get-in db [:data :client :android])))

; Список эндпоинтов у клиента
(re-frame/reg-sub
  ::client-endpoints-vec
  (fn [db _]
    (get-in db [:data :client :android :endpoints :endpoints-vec])))

; Значения эндпоинтов у клиента
(re-frame/reg-sub
  ::client-endpoints-content
  (fn [db _]
    (get-in db [:data :client :android :endpoints :content])))

;(re-frame/reg-sub
;  ::client-opts
;  (fn [db _]
;    (:client (:checked db))))


;-----------------------------------------------DEPLOY SUBS-----------------------------------------------

(re-frame/reg-sub
  ::deploy-checked
  (fn [db _]
    (get-in db [:data :containerization :type])))

; Список контейнеров нужного типа
; type-keyword = :jars/:nginx/:postgres
(re-frame/reg-sub
  ::docker-containers-vec
  (fn [db [_ type-keyword]]
    (get-in db [:data :containerization :docker type-keyword :cont-vec])))

; Список опций для контейнеров нужного типа
; type-keyword = :jars/:nginx/:postgres
(re-frame/reg-sub
  ::docker-containers-content
  (fn [db [_ type-keyword]]
    (get-in db [:data :containerization :docker type-keyword :content])))

;-----------------------------------------------NETWORK SUBS-----------------------------------------------

(re-frame/reg-sub
  ::docker-network
  (fn [db _]
    (get-in db [:data :containerization :docker :network])))

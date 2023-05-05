(ns app-creator.client.subs
  (:require [re-frame.core :as re-frame]))

; Вызываются потом в методе subscribe, в результате - атом(?)-ссылка на значение, которое возвращает fn.
; Эти ссылки потом просто вставляются в нужные места разметки, а при вызовах событий в их (событий)
; функциях описано, как значения (идентифицируемые по ключам, возвращаемым fn в reg-sub) меняются.

; Для регистрации ноды текста
(re-frame/reg-sub
  ::text
  (fn [db _]
    (:text db)))

; Для регистрации ноды дисплея ошибки
(re-frame/reg-sub
  ::error-display
  (fn [db _]
    (:error-display db)))

(re-frame/reg-sub
  ::success-display
  (fn [db _]
    (:success-display db)))

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

; Текст этих логов
(re-frame/reg-sub
  ::log-text
  (fn [db _]
    (:log-text db)))

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
    (:type (:client (:checked db)))))

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

(re-frame/reg-sub
  ::client-opts
  (fn [db _]
    (:client (:checked db))))


;-----------------------------------------------DEPLOY SUBS-----------------------------------------------

(re-frame/reg-sub
  ::deploy-checked
  (fn [db _]
    (:deploy (:checked db))))

; Список джар-контейнеров
(re-frame/reg-sub
  ::jar-conts
  (fn [db _]
    (:jar-conts db)))

; Список nginx-контейнеров
(re-frame/reg-sub
  ::nginx-conts
  (fn [db _]
    (:nginx-conts db)))

; Список postgres-контейнеров
(re-frame/reg-sub
  ::postgres-conts
  (fn [db _]
    (:postgres-conts db)))


;; Верный ли хост для бд
;(re-frame/reg-sub
;  ::db-host-valid
;  (fn [db _]
;    (:host (:db (:valid db)))))

(re-frame/reg-sub
  ::out-path-valid
  (fn [db _]
    (:out-path (:valid db))))

(re-frame/reg-sub
  ::data
  (fn [db _]
    (:data db)))
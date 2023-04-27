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

; Для регистрации текста про сервер
(re-frame/reg-sub
  ::server-framework-text
  (fn [db _]
    (:server-framework-text db)))

(re-frame/reg-sub
  ::server-lang-text
  (fn [db _]
    (:server-lang-text db)))

(re-frame/reg-sub
  ::http-post-result-text
  (fn [db _]
    (:http-post-result-text db)))

; Окно с логами о прогрессе создания компонентов
(re-frame/reg-sub
  ::log-field-display
  (fn [db _]
    (:log-field-display db)))

; Текст этих логов
(re-frame/reg-sub
  ::log-text
  (fn [db _]
    (:log-text db)))

; Список таблиц в БД
(re-frame/reg-sub
  ::tables
  (fn [db _]
    (:tables db)))

; Список колонок таблиц в БД
(re-frame/reg-sub
  ::table-columns
  (fn [db _]
    (:table-columns db)))

; Список контроллеров у сервера
(re-frame/reg-sub
  ::controllers
  (fn [db _]
    (:controllers db)))

; Список методов у контроллеров сервера
(re-frame/reg-sub
  ::controller-methods
  (fn [db _]
    (:controller-methods db)))

; Список эндпоинтов у клиента
(re-frame/reg-sub
  ::client-endpoints
  (fn [db _]
    (:client-endpoints db)))

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

; Какая СУБД выбрана
(re-frame/reg-sub
  ::db-checked
  (fn [db _]
    (:db (:checked db))))

; Какой сервер фреймворк выбран
(re-frame/reg-sub
  ::server-checked
  (fn [db _]
    (:type (:server (:checked db)))))

; Какая платформа клиента выбрана
(re-frame/reg-sub
  ::client-checked
  (fn [db _]
    (:type (:client (:checked db)))))

(re-frame/reg-sub
  ::deploy-checked
  (fn [db _]
    (:deploy (:checked db))))

(re-frame/reg-sub
  ::server-opts
  (fn [db _]
    (:server (:checked db))))

; Верный ли хост для бд
(re-frame/reg-sub
  ::db-host-valid
  (fn [db _]
    (:host (:db (:valid db)))))
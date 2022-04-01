(ns app-creator.creator.db.postgresql.filler
  (:import (java.io File)))

(require '[app-creator.creator.db.postgresql.templates :as templates])

(use 'selmer.parser)

(def sep File/separator)

(defn psql-script [db-name host username password out-path]
  (spit (<< "{{out-path}}{{sep}}sql.bat")
        (templates/sql-bat password host username db-name out-path)))

(defn create-DB-script [db-name out-path]
  (spit (<< "{{out-path}}{{sep}}createDB.sql")
        (templates/create-db db-name)))

(defn adjust-type [opts]
  (cond
    (= opts "string") "varchar(255)"
    (= opts "number") "integer"
    (= opts "bool") "boolean"
    (= opts "date") "date"))

(defn get-columns-info [columns]
  "Достает из мапы данные в формате 'имя_колонки параметры_колонки' "
  (apply str (map #(let [{:keys [col-name opts]} %
                         types (adjust-type opts)]
                     (<< "\t{{col-name}} {{types}},\n")) columns)))

(defn create-table-script [tables]
  "Запихивает данные о колонках в create-table DDL"
  (apply str (map #(let [{:keys [table-name columns]} %
                         columns (get-columns-info columns)]
                     (templates/create-table table-name columns)) tables)))

(defn create-tables-script [tables out-path]
  (spit (<< "{{out-path}}{{sep}}createTables.sql")
        (create-table-script tables)))

(defn create [specs out-path]
  "Создает скрипты для создания базы данных и таблиц и скрипт для их выполнения"
  (let [{:keys [db-name host username password tables]} specs]
    (psql-script db-name host username password out-path)
    (create-DB-script db-name out-path)
    (create-tables-script tables out-path))                 ;; TODO перенести заполнение БД таблицами в filler
  )




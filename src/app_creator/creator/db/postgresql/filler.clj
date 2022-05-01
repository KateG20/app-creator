(ns app-creator.creator.db.postgresql.filler
  (:import (java.io File)))

(require '[app-creator.creator.db.postgresql.templates :as templates])

(use 'selmer.parser)

(def sep File/separator)

(defn psql-script [db-name host username password out-path]
  (spit (<< "{{out-path}}{{sep}}sql-scripts.bat")
        (templates/sql-bat password host username db-name (str out-path sep "utils"))))

(defn create-DB-script [db-name out-path]
  (spit (<< "{{out-path}}{{sep}}utils{{sep}}createDB.sql")
        (templates/create-db db-name)))

(defn adjust-type [opts]
  (cond
    (= opts "string") "VARCHAR(255)"
    (= opts "number") "INTEGER"
    (= opts "bool") "BOOLEAN"
    (= opts "date") "DATE"))

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
  (spit (<< "{{out-path}}{{sep}}utils{{sep}}createTables.sql")
        (create-table-script tables)))

(defn create [specs out-path]
  "Создает скрипты для создания базы данных и таблиц и скрипт для их выполнения"
  (let [{:keys [db-name host username password tables]} specs]
    (psql-script db-name host username password out-path)
    (println "creating scripts for creating database...")
    (create-DB-script db-name out-path)
    (println "creating scripts for creating tables...")
    (create-tables-script tables out-path)
    (println "scripts created!")))




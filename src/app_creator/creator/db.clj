(ns app-creator.creator.db
  (:import (java.io File)))

(require '[app-creator.creator.templates :as tmpl])

(defn psql-script [db-name host username password out-path]
  (spit (format "%s%ssql.bat" out-path File/separator)
        (tmpl/sql-bat password host username db-name out-path)))

(defn create-DB-script [db-name out-path]
  (spit (format "%s%screateDB.sql" out-path File/separator)
        (tmpl/create-db db-name)))

(defn transform-opts [opts]
  (cond
    (= opts "string") "varchar(255)"
    (= opts "number") "integer"
    (= opts "bool") "boolean"
    (= opts "date") "date"))

(defn get-columns-info [m]
  "Достает из мапы данные в формате 'имя_колонки параметры_колонки' "
  (apply str (map #(let [{:keys [name opts]} %]
          (format "\t%s %s,\n" name (transform-opts opts))) m))
  )

(defn create-table-script [m]
  "Запихивает данные о колонках в create-table DDL"
  (apply str (map #(let [{:keys [name columns]} %]
          (tmpl/create-table name (get-columns-info columns))) m))
  )

(defn create-tables-script [tables out-path]
  (spit (format "%s%screateTables.sql" out-path File/separator)
        (create-table-script tables)))

(defn create [specs out-path]
  "Создает скрипты для создания базы данных и таблиц и скрипт для их выполнения"
  (let [{:keys [name host username password tables]} specs]
    (psql-script name host username password out-path)
    (create-DB-script name out-path)
    (create-tables-script tables out-path))
  )



(ns app-creator.core.creator.db.postgresql.filler
  (:import (java.io File)))

(require '[app-creator.core.creator.db.postgresql.templates :as templates]
         '[app-creator.core.creator.db.postgresql.defaults :as defaults])

(use 'selmer.parser)

(def sep File/separator)

(defn has-val [opt]
  (if (empty? (:value opt)) nil (:value opt)))

(defn psql-script [db-name host username password out-path]
  (spit (<< "{{out-path}}{{sep}}sql-scripts.bat")
        (templates/sql-bat password host username db-name (str out-path sep "utils"))))

(defn create-DB-script [db-name out-path]
  (spit (<< "{{out-path}}{{sep}}utils{{sep}}createDB.sql")
        (templates/create-db db-name)))

(defn adjust-type [opts]
  (let [opts (.toLowerCase opts)]
    (case opts
      "number" "INTEGER"
      "bool" "BOOLEAN"
      "date" "DATE"
      "id" "INT GENERATED BY DEFAULT AS IDENTITY"
      "VARCHAR(255)")))

(defn get-columns-info [columns]
  "Достает из мапы данные в формате 'имя_колонки параметры_колонки' "
  (apply str (map #(let [[num col] %
                         {:keys [name opts]} col
                         col-name (or (has-val name) defaults/column)
                         opts (or (has-val opts) defaults/opt)
                         types (adjust-type opts)]
                     (<< "\t{{col-name}} {{types}},\n")) columns)))

(defn create-table-script [tables]
  "Вписывает данные о колонках в create-table DDL"
  (apply str (map #(let [[num table] %
                         {:keys [name columns]} table]
                     (if (nil? name) ""
                       (let [table-name (:value name)
                             columns (if (nil? columns) defaults/column-content columns)
                             columns (get-columns-info columns)]
                         (templates/create-table table-name columns))))
                  tables)))

(defn create-tables-script [tables out-path]
  (spit (<< "{{out-path}}{{sep}}utils{{sep}}createTables.sql")
        (create-table-script tables)))

(defn create [specs out-path]
  "Создает скрипты для создания базы данных и таблиц и скрипт для их выполнения"
  (println "Creating sql-scripts...")
  (try (let [{:keys [db-name host username password tables]} specs
             db-name (or (has-val db-name) defaults/db-name)
             host    (or (has-val host) defaults/host)
             username (or (has-val username) defaults/username)
             password (or (has-val password) defaults/password)
             tables (if (empty? (:content tables))
                      defaults/table-content (:content tables))]

         (psql-script db-name host username password out-path)
         (create-DB-script db-name out-path)
         (create-tables-script tables out-path)

         (println "Sql-scripts created successfully!\n")
         ;true
         {:result true :errors nil})
       (catch Exception e
         (let [error-str (str "Something went wrong while creating sql-scripts. "
                              "Try again or contact us to solve issue.")]
           (do
             (println error-str)
             ;false
             {:result false :errors [error-str]})))))






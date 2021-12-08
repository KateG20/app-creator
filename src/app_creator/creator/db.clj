(ns app-creator.creator.db
  (:import (java.io File)))

(require '[clojure.java.jdbc :as sql]
         '[app-creator.creator.templates :as tmpl])

(defn create-DB-script [specs out-path]
  (let [{:keys [name host username password]} specs]
    (spit (format "%s%ssql.bat" out-path File/separator)
          (tmpl/sql-bat-templ password host username name out-path))))

(defn create-tables-script [specs out-path]
  )

(defn create [specs out-path]
  (create-DB-script specs out-path))

(defn create-db [name host user]
  (sql/create-table-ddl
    :shouts
    [[:id :serial "PRIMARY KEY"]
     [:body :varchar "NOT NULL"]
     [:created_at :timestamp
      "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]])
  )


(ns app-creator.core.creator.db.postgresql.templates
  (:import (java.io File)))

(require '[clojure.string :as string])

(use 'selmer.parser)

(def sep File/separator)

(defn sql-bat [pwd host user db-name path]
  (->> ["@echo off"
        ""
        "setlocal"
        "set PGPASSWORD={{pwd}}"
        "psql -h {{host}} -U {{user}} -f \"{{path}}{{sep}}createDB.sql\""
        "psql -h {{host}} -U {{user}} -d {{db-name}} -f \"{{path}}{{sep}}createTables.sql\""
        "endlocal"
        "pause"]
       (string/join \newline)
       (<<)))

(defn create-db [db-name]
  (<< "SELECT 'CREATE DATABASE \"{{db-name}}\"' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '{{db-name}}')\\gexec"))

(defn create-table [table-name cols]
  (->> ["CREATE TABLE \"{{table-name}}\" ("
        "{{cols}});"
        ""
        ""]
       (string/join \newline)
       (<<)))

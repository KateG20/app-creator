(ns app-creator.creator.templates
  (:import (java.io File)))
(require '[clojure.string :as string])

(defn sql-bat [pwd host user db-name path]
  (as-> ["@echo off"
         ""
         "setlocal"
         "set PGPASSWORD=%s"
         "psql -h %s -U %s -f \"%s%screateDB.sql\""
         "psql -h %s -U %s -d %s -f \"%s%screateTables.sql\""
         "endlocal"
         "pause"] $
        (string/join \newline $)
        (format $ pwd host user path File/separator host user db-name path File/separator)))

(defn create-db [db-name]
  (-> "SELECT 'CREATE DATABASE %s' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '%s')\\gexec"
      (format db-name db-name)))

(defn create-table [table-name cols]
  (as-> ["CREATE TABLE %s ("
         "%s);"
         ""
         ""] $
        (string/join \newline $)
        (format $ table-name cols)))

(defn spring-init [options path]
  (as-> ["@echo off"
         ""
         "spring init %s %s"] $
        (string/join \newline $)
        (format $ options path)))

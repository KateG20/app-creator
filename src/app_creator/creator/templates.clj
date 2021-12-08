(ns app-creator.creator.templates
  (:import (java.io File)))
(require '[clojure.string :as string])

(defn sql-bat-templ [pwd host user db-name path]
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

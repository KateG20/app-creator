(ns app-creator.creator.server.spring.templates
  (:import (java.io File)))

(defn spring-init [name options path]
  (as-> ["@echo off"
         ""
         "spring init %s\"%s%s%s\""] $
        (string/join \newline $)
        (format $ options path File/separator name)))

(ns app-creator.creator.server.spring.setter
  (:import (java.io File)))

(require '[app-creator.creator.server.spring.java.templates :as templates]
         '[app-creator.creator.server.spring.defaults :as defaults]
         '[app-creator.creator.server.spring.java.filler :as java-fill]
         '[clojure.java.shell :as cmd])

(use 'selmer.parser)

(def sep File/separator)

(defn create-options [specs]
  (let [{:keys [build language boot-version group artifact proj-name description
                packaging java-version project-version deps]} (:project specs)]

    (as-> {"build"        (or build defaults/build)         ; TODO проверить, влияет ли мавен/градл на пути к файлам с кодом
           "language"     (or language defaults/language)
           "boot-version" (or boot-version defaults/boot-version)
           "group-id"     (or group defaults/group)
           "artifact-id"  (or artifact defaults/artifact)
           "name"         (or proj-name defaults/proj-name)
           "description"  (or description defaults/description)
           "packaging"    (or packaging defaults/packaging)
           "java-version" (or java-version defaults/java-version)
           "version"      (or project-version defaults/project-version)
           "force"        "true"
           "dependencies" (clojure.string/join "," deps)} $
          (for [[k v] $]
            (<< "--{{k}}={{v}} "))
          (apply str $))))

(defn fulfill [specs out-path]
  ;(adapter/server-lang-adapter
  ;  (or (:language (:project specs))
  ;      defaults/language)
  ;  specs
  ;  out-path)
  (java-fill/fill specs out-path)                           ; пока иду напрямую без адаптера

  )

(defn create [specs out-path]
  ; Заливаем в файл команду
  (println "creating spring server...")
  (spit (<< "{{out-path}}{{sep}}springinit.bat")
        (templates/spring-init
          (:proj-name (:project specs))
          (create-options specs)
          out-path))
  ; Вызываем выполнение этого файла (создается сервер)
  ;(println (cmd/sh (<< "{{out-path}}{{sep}}springinit.bat")))
  (println "server created!")
  ; Заполняем внутренности сервера
  (fulfill specs out-path))

(ns app-creator.creator.server.spring.setter
  (:import (java.io File)))

(require '[app-creator.creator.server.spring.templates :as templates]
         '[app-creator.creator.server.spring.defaults :as defaults]
         '[app-creator.creator.server.spring.java.filler :as java]
         '[app-creator.creator.adapter :as adapter]
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
           "dependencies" (->> deps
                               (concat defaults/deps)
                               (into #{})
                               (into '())
                               (clojure.string/join ","))} $
          (for [[k v] $]
            (<< "--{{k}}={{v}} "))
          (apply str $))))

(defn fulfill [specs out-path]
  (let [lang (or (:language (:project specs))
                 defaults/language)]                        ; names: lang, specs, out-path - it's important
    (adapter/fill-project)))

(defn create [specs out-path]
  ; Заливаем в файл команду
  (println "Creating server project...")
  (let [utils-path (<< "{{out-path}}{{sep}}utils{{sep}}")]
    (spit (<< "{{utils-path}}springinit.bat")
          (templates/spring-init
            (:proj-name (:project specs))
            (create-options specs)
            out-path))
    ; Вызываем выполнение этого файла
    (let [{:keys [exit out err]} (cmd/sh (<< "{{utils-path}}springinit.bat"))]
      (cond
        (= exit 0)
        (do (println (str "Server project created successfully!\n" out))
            ; Заполняем внутренности сервера
            (println "Filling created server project...")
            (if (fulfill specs out-path)
              (do (println "Server project successfully filled!\n")
                  true)
              (do (println (str "Something went wrong while filling project. "
                                "Maybe, there are troubles with file paths. "
                                "Try again or contact us to solve issue."))
                  false)))

        :else
        (do
          (println (str "Something went wrong. Maybe, you do not have Spring installed.\n" err))
          false)))))

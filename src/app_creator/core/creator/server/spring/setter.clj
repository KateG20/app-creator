(ns app-creator.core.creator.server.spring.setter
  (:import (java.io File)))

(require '[app-creator.core.creator.server.spring.templates :as templates]
         '[app-creator.core.creator.server.spring.defaults :as defaults]
         '[app-creator.core.creator.server.spring.java.filler :as java]
         '[app-creator.core.creator.adapter :as adapter]
         '[clojure.java.shell :as cmd])

(use 'selmer.parser)

(def sep File/separator)

(defn has-val [opt]
  (if (empty? (:value opt)) nil (:value opt)))

(defn create-options [specs]
  (let [{:keys [build language boot-version group artifact proj-name description
                packaging java-version project-version deps]} (:project specs)]

    ; TODO проверить, влияет ли мавен/градл на пути к файлам с кодом

    (as-> {"type"         (if build (str build "-project") defaults/type)
           ;"build"        (or build defaults/build)         ; outdated
           "language"     (or language defaults/language)
           "boot-version" (or boot-version defaults/boot-version)
           "group-id"     (or (has-val group) defaults/group)
           "artifact-id"  (or (has-val artifact) defaults/artifact)
           "name"         (or (has-val proj-name) defaults/proj-name)
           "description"  (if (has-val description) (str "\"" (:value description) "\"") defaults/description)
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
                 defaults/language)]                         ; names: lang, specs, out-path - it's important
    (adapter/fill-project)))

(defn create [specs out-path]
  ; Заливаем в файл команду
  (println "Creating server project...")
  (let [utils-path (<< "{{out-path}}{{sep}}utils{{sep}}")
        proj-name (get-in specs [:project :proj-name :value])]
    (spit (<< "{{utils-path}}springinit.bat")
          (templates/spring-init
            (if (empty? proj-name) defaults/proj-name proj-name)
            (create-options specs)
            out-path))
    ; Вызываем выполнение этого файла
    (let [{:keys [exit out err]} (cmd/sh (<< "{{utils-path}}springinit.bat"))]
      (cond
        (= exit 0)
        (do (println (str "Server project created successfully!\n"
                          ;out
                          ))
            ; Заполняем внутренности сервера
            (println "Filling created server project...")
            (let [fill-result-map (fulfill specs out-path)]
              (if (:result fill-result-map)
                (do (println "Server project successfully filled!\n")
                    {:result true :errors []})
                (let [error-str (str "Something went wrong while filling Spring Boot project. "
                                     "Maybe, there are troubles with file paths. "
                                     "Try again or contact us to solve issue. "
                                     ;(:errors fill-result-map) ; мда, лучше это убрать
                                     )]
                  (do (println error-str)
                      {:result false :errors [error-str]})))))

        :else
        (let [error-str (str "Something went wrong. Maybe, you do not have Spring Boot or JDK installed.\n"
                             ;err
                             )]
          (do
            (println error-str)
            {:result false :errors [error-str]}))))
    ))

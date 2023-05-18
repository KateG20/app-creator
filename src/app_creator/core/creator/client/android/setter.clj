(ns app-creator.core.creator.client.android.setter
  (:require [taoensso.timbre :as log])
  (:import (java.io File)))

(require '[app-creator.core.creator.client.android.templates :as templates]
         '[app-creator.core.creator.client.android.defaults :as defaults]
         '[app-creator.core.creator.client.android.java.filler :as java]
         '[app-creator.core.creator.adapter :as adapter]
         '[clojure.java.shell :as cmd])

(use 'selmer.parser)

(def sep File/separator)

(defn has-val [opt]
  (if (empty? (:value opt)) nil (:value opt)))

(defn create-options [specs]
  (let [{:keys [proj-name language package-name test-framework]} specs]
    (as-> {"project-name"   (or (has-val proj-name) defaults/proj-name)
           "type"           (if (some? language) (str language "-application") defaults/language)
           "package"        (or (has-val package-name) defaults/package-name)
           "test-framework" (or test-framework defaults/test-framework)} $
          (for [[k v] $]
            (<< "--{{k}} {{v}} "))
          (apply str $))))

(defn fulfill [specs out-path]
  (let [lang (or (:language (:project specs))
                 defaults/language)]                        ; names: lang, specs, out-path - it's important
    (adapter/fill-project)))

(defn change-settings-gradle [path]
  (spit path templates/settings-gradle))

(defn create [specs out-path]
  (println "Creating android project...")
  (let [proj-name (get-in specs [:proj-name :value])
        proj-name (if (nil? proj-name) defaults/proj-name proj-name)
        utils-path (<< "{{out-path}}{{sep}}utils{{sep}}")]
    (->> specs
         (create-options)
         (templates/gradle-init proj-name out-path)
         (spit (<< "{{utils-path}}gradleinit.bat")))

    (let [proj-dir (<< "{{out-path}}{{sep}}{{proj-name}}{{sep}}")]
      ; Создается директория для проекта
      (clojure.java.io/make-parents (<< "{{proj-dir}}files"))

      ; Вызываем выполнение этого файла
      (let [{:keys [exit out err]} (cmd/sh (<< "{{utils-path}}gradleinit.bat"))]
        (cond
          (= exit 0)
          (do (println (str "Client android project created successfully!\n"))
              ; Заполняем внутренности клиента
              (println "Filling created client project...")
              ;(log/info out " OUT ERR " err)
              (change-settings-gradle (<< "{{proj-dir}}settings.gradle")) ;todo

              (let [fill-result-map (fulfill specs out-path)]
                (if (:result fill-result-map)
                (do (println "Client project successfully filled!\n")
                    {:result true :errors []})
                (let [error-str (str "Something went wrong while filling project. "
                                     "Maybe, there are troubles with file paths. "
                                     "Try again or contact us to solve issue. "
                                     ;(:errors fill-result-map) ; мда, лучше это убрать
                                     )]
                  (do (println error-str)
                      {:result false :errors [error-str]})))))

          :else
          (let [error-str (str "Something went wrong. Maybe, you do not have Android SDK or Gradle or JDK installed.\n"
                               ;err
                               )]
            (do
              (println error-str)
              {:result false :errors [error-str]})))))))

(ns app-creator.creator.client.android.setter
  (:import (java.io File)))

(require '[app-creator.creator.client.android.templates :as templates]
         '[app-creator.creator.client.android.defaults :as defaults]
         '[app-creator.creator.client.android.java.filler :as java]
         '[app-creator.creator.adapter :as adapter]
         '[clojure.java.shell :as cmd])

(use 'selmer.parser)

(def sep File/separator)

(defn create-options [specs]
  (let [{:keys [proj-name language package-name test-framework]} specs]
    (as-> {"project-name"   (or proj-name defaults/proj-name)
           "type"           (if (some? language) (str language "-application") defaults/language)
           "package"        (or package-name defaults/package-name)
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
  (let [proj-name (:proj-name specs)
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
              (println "Filling created client project...")
              ; Заполняем внутренности клиента
              (change-settings-gradle (<< "{{proj-dir}}settings.gradle"))

              (if (fulfill specs out-path)
                (do (println "Client project successfully filled!\n")
                    true)
                (do (println (str "Something went wrong while filling project. "
                                  "Maybe, there are troubles with file paths. "
                                  "Try again or contact us to solve issue."))
                    false)))

          :else
          (do
            (println (str "Something went wrong. Maybe, you do not have Android SDK or Gradle or JDK installed.\n"
                          ;err
                          ))
            false))))))

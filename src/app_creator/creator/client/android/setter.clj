(ns app-creator.creator.client.android.setter
  (:import (java.io File)))

(require '[app-creator.creator.client.android.templates :as templates]
         '[app-creator.creator.client.android.defaults :as defaults]
         '[clojure.java.shell :as cmd])

(use 'selmer.parser)

(def sep File/separator)

(defn create-options [specs]
  (let [{:keys [proj-name language dsl-language package-name test-framework]} specs]
    (as-> {"project-name"   (or proj-name defaults/proj-name)
           "type"           (if (some? language) (str language "-application") defaults/language)
           "dsl"            (or dsl-language defaults/dsl-language)
           "package"        (or package-name defaults/package-name)
           "test-framework" (or test-framework defaults/test-framework)} $
          (for [[k v] $]
            (<< "--{{k}} {{v}} "))
          (apply str $))))

(defn create [specs out-path]
  (println "creating android project...")
  (let [proj-name (:proj-name specs)]
    (println (str "proj-name: " proj-name))
    (->> specs
         (create-options)
         (templates/gradle-init proj-name out-path)
         (spit (<< "{{out-path}}{{sep}}gradleinit.bat")))

    ; Создается директория для проекта
    (println (<< "{{out-path}}{{sep}}{{proj-name}}{{sep}}files")) ; todo proj-name видимо нил(((
    (clojure.java.io/make-parents (<< "{{out-path}}{{sep}}{{proj-name}}{{sep}}files")))

  (println (<< "{{out-path}}{{sep}}gradleinit.bat"))
  ; Вызываем выполнение этого файла (создается клиент)
  ;(println (:out (cmd/sh (<< "{{out-path}}{{sep}}gradleinit.bat"))))
  (println "front created!")
  ; Заполняем внутренности клиента
  ;(fulfill specs out-path)
  )

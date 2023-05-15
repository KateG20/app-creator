(ns app-creator.core.creator.containerization.docker.filler
  (:import (java.io File)))

(require '[clojure.java.io :as io]
         '[app-creator.core.creator.containerization.docker.templates :as templates])

(use 'selmer.parser)

(def sep File/separator)

(defn build-jar-images [dirs-path bat-path jars]
  (dorun (map (fn [jar] (let [[num data] jar
                              {:keys [image-name dir-name jar-path]} data
                              image-name (:value image-name)
                              dir-name (:value dir-name)
                              jar-path (:value jar-path)
                              dockerfile-dir (<< "{{dirs-path}}{{sep}}{{dir-name}}")]
                          ; Создание директории для докерфайла,
                          ; чтобы потом в ней сбилдить образ
                          ; На всякий случай удаление, но в целом оно не нужно - todo
                          ;(io/delete-file (io/as-file dockerfile-dir))
                          (io/make-parents (<< "{{dockerfile-dir}}{{sep}}files"))
                          ; Заполняем докерфайл
                          (spit (<< "{{dockerfile-dir}}{{sep}}Dockerfile")
                                (templates/jar-dockerfile jar-path))
                          ; Вписываем инструкцию по билду в большой батник
                          (spit bat-path (templates/build-image dockerfile-dir image-name) :append true)))
              jars)))

(defn build-nginx-images [dirs-path bat-path nginx]
  (dorun (map (fn [n] (let [[num data] n
                            {:keys [image-name dir-name backend-container-name]} data
                            image-name (:value image-name)
                            dir-name (:value dir-name)
                            backend-container-name (:value backend-container-name)
                            dockerfile-dir (<< "{{dirs-path}}{{sep}}{{dir-name}}")]
                        ; Создание директории для докерфайла, чтобы потом в ней сбилдить образ
                        (io/make-parents (<< "{{dockerfile-dir}}{{sep}}files"))
                        ; Заполняем докерфайл
                        (spit (<< "{{dockerfile-dir}}{{sep}}Dockerfile")
                              templates/nginx-dockerfile)
                        ; Создаем nginx.conf
                        (spit (<< "{{dockerfile-dir}}{{sep}}nginx.conf")
                              (templates/nginx-conf backend-container-name))
                        ; Вписываем инструкцию по билду в большой батник
                        (spit bat-path (templates/build-image dockerfile-dir image-name) :append true)))
              nginx)))

(defn create-network [dirs-path bat-path network-name]
  (spit bat-path (templates/create-network dirs-path network-name) :append true))

(defn create-jar-containers [bat-path network-name jars]
  (dorun (map (fn [jar] (let [[num data] jar
                              {:keys [image-name container-name]} data
                              image-name (:value image-name)
                              container-name (:value container-name)]
                          (spit bat-path
                                (templates/run-jar-container network-name container-name image-name)
                                :append true)))
              jars)))

(defn create-nginx-containers [bat-path network-name nginx]
  (dorun (map (fn [n] (let [[num data] n
                            {:keys [image-name container-name]} data
                            image-name (:value image-name)
                            container-name (:value container-name)]
                        (spit bat-path
                              (templates/run-nginx-container network-name container-name image-name)
                              :append true)))
              nginx)))

(defn create-postgres-containers [bat-path network-name postgres]
  (dorun (map (fn [p] (let [[num data] p
                            {:keys [container-name port password]} data
                            port (:value port)
                            container-name (:value container-name)
                            password (:value password)]
                        (spit bat-path
                              (templates/run-postgres-container network-name container-name port password)
                              :append true)))
              postgres)))

(defn create [specs out-path]
  (println "Creating containerization scripts...")
  (try (let [{:keys [network jars nginx postgres]} specs
             network-name (:value network)
             jars (:content jars)
             nginx (:content nginx)
             postgres (:content postgres)
             docker-path (<< "{{out-path}}{{sep}}docker-dirs")
             bat-path (<< "{{out-path}}{{sep}}run-containers.bat")]

         ; На всякий случай чистим батник
         (spit bat-path "")

         (io/make-parents (<< "{{docker-path}}{{sep}}files"))

         ; Создаем скрипт сборки образов
         (build-jar-images docker-path bat-path jars)
         (build-nginx-images docker-path bat-path nginx)

         ; Создаем сеть
         (create-network docker-path bat-path network-name)

         ; Создаем скрипт запуска контейнеров
         (create-jar-containers bat-path network-name jars)
         (create-nginx-containers bat-path network-name nginx)
         (create-postgres-containers bat-path network-name postgres)

         (println "Containerization scripts created successfully!\n")
         {:result true :errors nil})
       (catch Exception e
         (let [error-str (str "Something went wrong while creating containerization scripts. "
                              "Try again or contact us to solve issue.")]
           (do
             (println error-str)
             ;false
             {:result false :errors [error-str]}))
         ;(println (str "Something went wrong while creating containerization scripts. "
         ;              "Try again or contact us to solve issue."))
         ;false
         )))
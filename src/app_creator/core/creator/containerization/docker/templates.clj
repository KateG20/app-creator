(ns app-creator.core.creator.containerization.docker.templates
  (:import (java.io File)))

(require '[clojure.string :as string])

(use 'selmer.parser)

(def sep File/separator)

(def current-jdk-image "eclipse-temurin:17.0.6_10-jdk")

(defn jar-dockerfile [jar-path]
  (->> [
        "FROM {{current-jdk-image}}"
        "COPY \"{{jar-path}}\" ."
        "CMD [\"java\", \"-jar\", \"{{jar-path}}\"]"
        ]
       (string/join \newline)
       (<<)))

(defn build-image [dockerfile-dir image-name]
  (->> [
        "cd \"{{dockerfile-dir}}\""
        "docker build -t {{image-name}}:1.0 ."
        "\n"
        ]
       (string/join \newline)
       (<<)))

(def nginx-dockerfile
  (->> [
        "FROM nginx:latest"
        "RUN apt-get update && apt-get install -y curl && apt-get clean && \\"
        "rm -rf /var/lib/apt/lists/* \\"
        "/tmp/* \\"
        "/var/tmp/*"
        "COPY nginx.conf /etc/nginx/nginx.conf"
        ]
       (string/join \newline)
       (<<)))

(defn nginx-conf [backend-cont-name]
  (->> [
        "events { }"
        "http {"
        "  server {"
        "    listen 80;"
        "    location / {"
        "      resolver 127.0.0.11 ipv6=off valid=50s;"
        "      set $backend \"{{backend-cont-name}}:8080\";"
        "      proxy_set_header Host $host;"
        "      proxy_set_header X-Real-IP $remote_addr;"
        "      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;"
        "      proxy_set_header X-Forwarded-Proto $scheme;"
        "      proxy_pass http://$backend;"
        "      }"
        "    }"
        "  }"
        ]
       (string/join \newline)
       (<<)))

(defn create-network [docker-dir network-name]
  (->> [
        "cd \"{{docker-dir}}\""
        "docker network create {{network-name}}"
        ""
        ""
        ]
       (string/join \newline)
       (<<)))

(defn run-jar-container [network-name container-name image-name]
  (->> [
        "docker run --network {{network-name}} --restart=always -e JAVA_TOOL_OPTIONS=\"-Xmx512M\""
        "--name {{container-name}} -d {{image-name}}:latest"
        "\n"
        "\n"
        ]
       (string/join " ")
       (<<)))

(defn run-nginx-container [network-name container-name image-name]
  (->> [
        "docker run -p 80:80 --restart=always --name {{container-name}}"
        "--network {{network-name}} {{image-name}}"
        "\n"
        "\n"
        ]
       (string/join " ")
       (<<)))

(defn run-postgres-container [network-name container-name port password]
  (->> [
        "docker run -d -p {{port}}:5432 --name {{container-name}} -e"
        "POSTGRES_PASSWORD=\"{{password}}\" -e PGDATA=/var/lib/postgresql/data/pgdata"
        "-v /custom/mount:/var/lib/postgresql/data --network {{network-name}} postgres"
        "\n"
        "\n"
        ]
       (string/join " ")
       (<<)))

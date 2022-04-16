(ns app-creator.creator.server.spring.java.templates
  (:import (java.io File)))

(require '[clojure.string :as string]
         '[selmer.util :as sutil :refer [without-escaping]])

(use 'selmer.parser)
(sutil/turn-off-escaping!)

(def sep File/separator)

(defn path-to-props [out-path proj-name group artifact lang]
  (cond
    (= lang "java")
    (let [group (string/replace group #"\." "/")]
      (-> "{{out-path}}/{{proj-name}}/src/main/resources/application.properties"
          (<<)
          (string/replace "/" sep)))))

(defn path-to-code [out-path proj-name group artifact lang]
  (cond
    (= lang "java")
    (let [group (string/replace group #"\." "/")]
      (-> "{{out-path}}/{{proj-name}}/src/main/java/{{group}}/{{artifact}}/"
          (<<)
          (string/replace "/" sep)))))

(defn service-name [controller-name & {:keys [var?] :or {var? false}}]
  (as-> controller-name $
        (count $)
        (- $ 10)
        (subs controller-name 0 $)
        (string/lower-case $)
        (if (false? var?) (string/capitalize $) $)
        (str $ "Service")))

(defn props [props]
  (let [{:keys [type username password sql-host sql-port db-name]} (:db props)]
    (->> ["# Before deploying, replace sql-host with your further container name"
          "spring.datasource.url=jdbc:{{type}}://{{sql-host}}:{{sql-port}}/{{db-name}}"
          "spring.datasource.username={{username}}"
          "spring.datasource.password={{password}}"
          "spring.sql.init.mode=always"]
       (string/join \newline)
       (<<))))

(defn entity-name [controller-name]
  (as-> controller-name $
        (count $)
        (- $ 10)
        (subs controller-name 0 $)))

(defn entity [group artifact entity-name]
  (->> ["package {{group}}.{{artifact}}.entity;"
        ""
        "import lombok.NoArgsConstructor;"
        ""
        "import javax.persistence.*;"
        ""
        "@Entity"
        "@NoArgsConstructor"
        "public class {{entity-name}} {"
        ""
        "    @Id"
        "    @Column"
        "    @GeneratedValue(strategy = GenerationType.IDENTITY)"
        "    Long id;"
        ""
        "    // your fields here"
        ""
        "}"]
       (string/join \newline)
       (<<)))

; TODO объединить эти два шаблона
(defn service-interface [group artifact service-name entity-name service-interface-methods]
  (->> ["package {{group}}.{{artifact}}.service;"
        ""
        "import {{group}}.{{artifact}}.entity.{{entity-name}};"
        ""
        "public interface {{service-name}} {"
        ""
        "    // Change these methods as per your needs"
        "{{service-interface-methods}}"
        "}"]
       (string/join \newline)
       (<<)))

(defn service-impl [group artifact service-name-impl service-name entity-name service-impl-methods]
  (->> ["package {{group}}.{{artifact}}.service;"
        ""
        "import {{group}}.{{artifact}}.entity.{{entity-name}};"
        "import org.springframework.stereotype.Service;"
        ""
        "@Service"
        "public class {{service-name-impl}} implements {{service-name}} {"
        ""
        "    // Change these methods as per your needs"
        "{{service-impl-methods}}}"]
       (string/join \newline)
       (<<)))

(defn service-method [entity-name method-name & {:keys [implementation?] :or {implementation? false}}]
  (let [type (string/capitalize type)]
    (as-> "{{entity-name}} {{method-name}}()" $
          (<< $)
          (if (true? implementation?)
            (->> ["    @Override"
                  "    public {{$}} {"
                  "        return new {{entity-name}}(); // instead of \"return new...\", connect with repo layer here"
                  "    }"
                  ""
                  ""]
                 (string/join \newline)
                 (<<))
            (str "    " $ ";" \newline)))))

(defn request [req-name uri mapping service-var-name entity-name]
  (let [mapping (string/capitalize mapping)]
    (->> ["    @{{mapping}}Mapping(\"{{uri}}\")"
          "    public ResponseEntity<Object> {{req-name}}() { // Put your type instead of Object"
          "        {{entity-name}} response = {{service-var-name}}.{{req-name}}();"
          "        // Change if-statements contents"
          "        if (response != null) {"
          "            return new ResponseEntity<>(response, HttpStatus.OK);"
          "        } else {"
          "            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND); // Put your status"
          "        }"
          "    }"
          ""]
         (string/join \newline)
         (<<))))

(defn controller [group artifact controller-name requests]
  (let [service-class-name (service-name controller-name)
        service-var-name (service-name controller-name :var? true)
        entity-name (entity-name controller-name)]
    (->> ["package {{group}}.{{artifact}}.controller;"
          ""
          "import {{group}}.{{artifact}}.entity.{{entity-name}};"
          "import {{group}}.{{artifact}}.service.{{service-class-name}};"
          "import org.springframework.beans.factory.annotation.Autowired;"
          "import org.springframework.http.HttpStatus;"
          "import org.springframework.http.ResponseEntity;"
          "import org.springframework.web.bind.annotation.*;"
          ""
          "@RestController"
          "public class {{controller-name}} {"
          ""
          "    private final {{service-class-name}} {{service-var-name}};"
          ""
          "    @Autowired"
          "    public {{controller-name}}({{service-class-name}} {{service-var-name}}) {"
          "        this.{{service-var-name}} = {{service-var-name}};"
          "    }"
          ""
          "    // Change these methods as per your needs"
          "{{requests}}"
          "}"]
         (string/join \newline)
         (<<))))

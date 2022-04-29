(ns app-creator.parser.messages)

(def host-error "invalid ip-address or host name")
(def port-error "invalid port number")
(def controller-name-error (str "incorrect controller class name, must start with a capital letter "
                                "and have a \"-Controller\" postfix"))
(def method-name-error "incorrect method name, must follow java method naming conventions")
(def package-name-error "incorrect android app package name: must contain at least one '.' (dot) character")
(def uri-path-error "incorrect uri path")
(def entity-name-error "incorrect entity name, must start with a capital letter")

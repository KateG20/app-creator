(ns app-creator.core.creator.containerization.docker.defaults)

(def image-name "demo-image")
(def dir-name "demo-dir")
(def cont-name "demo-cont")
(def jar-path "changeme.jar")
(def network-name "demo-network")
(def pg-port "5432")
(def pg-pwd "admin")
;(def jar-content {0
;                  {:image-name {:value "demo-java-image", :valid true},
;                   :container-name {:value "demo-java", :valid true},
;                   :dir-name {:value dir-name, :valid true},
;                   :jar-path {:value jar-path :valid true}}})
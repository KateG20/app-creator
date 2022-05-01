(ns app-creator.creator.adapter)

(defmacro create-db []
  '(let [{:keys [postgresql]} db]                           ; add other types into :keys
     (and (some? postgresql)
          (postgresql/create (:postgresql db) out-path))

     ; add redirections for other types here
     ))

(defmacro fill-project []
  '(cond
     (= lang "java")
     (java/fill specs out-path)

     ; add redirections for other types here
     ))

(defmacro create-server []
  '(let [{:keys [spring]} server]                           ; add other types into :keys
     (and (some? spring)
          (spring/create (:spring server) out-path))

     ; add redirections for other types here
     ))

(defmacro create-client []
  '(let [{:keys [android]} client]                           ; add other types into :keys
     (and (some? android)
          (android/create (:android client) out-path))

     ; add redirections for other types here
     ))

(defmacro containerize []
  '(let [{:keys [docker]} containerization]                           ; add other types into :keys
     (and (some? docker)
          (docker/create (:docker containerization) out-path)) ;todo убрать ки-функцию?

     ; add redirections for other types here
     ))



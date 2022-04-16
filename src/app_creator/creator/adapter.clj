(ns app-creator.creator.adapter)

(defmacro create-db []
  '(let [{:keys [postgresql]} db]                           ; add other types into :keys
     (and (some? postgresql)
          (postgresql/create (:postgresql db) out-path))

     ; add redirections for other types here
     ))

(defmacro fill-server []
  '(cond
     (= lang "java")
     (java/fill specs out-path)

     ; add redirections for other types here
     ))

(defmacro create-server []
  '(cond
     (= type "spring")
     (spring/create specs out-path)

     ; add redirections for other types here
     ))

(defmacro create-front []
  '(cond
     (= type "android")
     (android/create specs out-path)

     ; add redirections for other types here
     ))



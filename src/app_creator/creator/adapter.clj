(ns app-creator.creator.adapter)

(require '[app-creator.creator.db.postgresql.setter :as postgresql]
         '[app-creator.creator.server.spring.setter :as spring]
         '[app-creator.creator.server.spring.filler.java :as java-fill])

(defn db-type-adapter [type specs out-path]
  (cond
    (= type "postgresql")
    (postgresql/create specs out-path)

    ; add redirections for other types here
    )
  )

(defn server-type-adapter [type specs out-path]
  (cond
    (= type "spring")
    (spring/create specs out-path)

    ; add redirections for other types here
    )
  )

(defn server-lang-adapter [lang specs out-path]
  (cond
    (= lang "java")
    (java-fill/fill-controllers specs out-path)

    ; add redirections for other types here
    )
  )


(ns app-creator.creator.adapter)

(require '[app-creator.creator.db.postgresql.db :as postgresql]
         '[app-creator.creator.server.spring.server :as spring])

(defn db-type-adapter [type specs out-path]
  (cond
    (= type "postgresql")
    (postgresql/create specs out-path)

    ; add conditions for other types here
    ))

(defn server-type-adapter [type specs out-path]
  (cond
    (= type "spring")
    (spring/create specs out-path)

    ; add conditions for other types here
    ))

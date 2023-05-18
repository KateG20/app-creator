(ns app-creator.core.creator.db.postgresql.defaults)

(def column "demo-column")
(def opt "string")
(def column-content {0
                     {:name {:value "demoIdColumn", :valid true},
                      :opts {:value "id", :valid true}}
                     1
                     {:name {:value "demoNameColumn", :valid true},
                      :opts {:value "string", :valid true}}})

(def table-content {0
                    {:name    {:value "demoTable", :valid true},
                     :columns column-content}})

(def db-name "DemoDatabase")
(def host "localhost")
(def username "postgres")
(def password "admin")


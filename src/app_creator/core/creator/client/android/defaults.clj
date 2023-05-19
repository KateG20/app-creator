(ns app-creator.core.creator.client.android.defaults)

(def proj-name "democlient")
(def language "java")
(def package-name "demo.example")
(def test-framework "junit-jupiter")
(def server-host "localhost")
(def server-port "8080")
(def endpoint-content {0
               {:url {:value "/users", :valid true},
                :name {:value "getUsers", :valid true},
                :request {:value "get", :valid true},
                :body {:value "List<User>", :valid true}}})

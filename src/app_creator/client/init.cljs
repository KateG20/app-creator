(ns app-creator.client.init)

; Собственно сейчас отсюда я использую только :log-text и :data. Остальное - мусор,
; пока не удаляю, чтобы что-нибудь не полетело.
; Тут видно, как хранятся все характеристики сейчас

(def init-db {;:all-valid             true
              ;:text                  "initial text"
              ;:error-display         "none"                 ;; returned value put into app-db
              ;:server-framework-text "default"
              ;:server-lang-text      "default"
              ;:success-display       "none"
              :http-post-result-text "null info"
              :log-text              ""
              :loading              false
              :data                  {:db
                                      {:type     "postgres"
                                       :postgres {:db-name  {:value ""
                                                             :valid true}
                                                  :host     {:value ""
                                                             :valid true}
                                                  :username {:value ""
                                                             :valid true}
                                                  :password {:value ""
                                                             :valid true}
                                                  :tables   {:table-vec  [0 1]
                                                             :column-vec [[0 0] [0 1] [1 0]]
                                                             :content    {0 {:name    {:value ""
                                                                                       :valid true}
                                                                             :columns {0 {:name {:value ""
                                                                                                 :valid true}
                                                                                          :opts {:value ""
                                                                                                 :valid true}}
                                                                                       1 {:name {:value ""
                                                                                                 :valid true}
                                                                                          :opts {:value ""
                                                                                                 :valid true}}}}
                                                                          1 {:name    {:value ""
                                                                                       :valid true}
                                                                             :columns {0 {:name {:value ""
                                                                                                 :valid true}
                                                                                          :opts {:value ""
                                                                                                 :valid true}}}}}}}}
                                      :server
                                      {:type "spring"
                                       :spring
                                       {:project
                                        {:build        "gradle"
                                         :language     "java"
                                         :boot-version "3.0.6"
                                         :group        {:value ""
                                                        :valid true}
                                         :artifact     {:value ""
                                                        :valid true}
                                         :proj-name    {:value ""
                                                        :valid true}
                                         :description  {:value ""
                                                        :valid true}
                                         :packaging    "jar"
                                         :java-version "17"
                                         ;:project-version "0.0.1-SNAPSHOT",
                                         ;:deps            ("security")
                                         },
                                        :properties
                                        {:db
                                         {:type     {:value ""
                                                     :valid true}
                                          :username {:value ""
                                                     :valid true}
                                          :password {:value ""
                                                     :valid true}
                                          :sql-host {:value ""
                                                     :valid true}
                                          :sql-port {:value ""
                                                     :valid true}
                                          :db-name  {:value ""
                                                     :valid true}}}
                                        :controllers {:controller-vec [0]
                                                      :method-vec     [[0 0] [0 1]]
                                                      :content        {0 {:name    {:value ""
                                                                                    :valid true}
                                                                          :methods {0 {:name {:value ""
                                                                                              :valid true}
                                                                                       :url  {:value ""
                                                                                              :valid true}
                                                                                       :type {:value ""
                                                                                              :valid true}}
                                                                                    1 {:name {:value ""
                                                                                              :valid true}
                                                                                       :url  {:value ""
                                                                                              :valid true}
                                                                                       :type {:value ""
                                                                                              :valid true}}}}}}}},
                                      :client
                                      {:type "android"
                                       :android
                                       {:proj-name      {:value ""
                                                         :valid true}
                                        :language       "java"
                                        :package-name   {:value ""
                                                         :valid true}
                                        :test-framework "junit-jupiter"
                                        :server-host    {:value ""
                                                         :valid true}
                                        :server-port    {:value ""
                                                         :valid true}
                                        :endpoints      {:endpoints-vec [0 1]
                                                         :content       {0 {:url     {:value ""
                                                                                      :valid true}
                                                                            :name    {:value ""
                                                                                      :valid true}
                                                                            :request {:value ""
                                                                                      :valid true}
                                                                            :body    {:value ""
                                                                                      :valid true}}
                                                                         1 {:url     {:value ""
                                                                                      :valid true}
                                                                            :name    {:value ""
                                                                                      :valid true}
                                                                            :request {:value ""
                                                                                      :valid true}
                                                                            :body    {:value ""
                                                                                      :valid true}}}}}}
                                      :containerization
                                      {:type "docker"
                                       :docker
                                       {:network  {:value ""
                                                   :valid true}
                                        :jars     {:cont-vec [0]
                                                   :content  {0 {:image-name     {:value ""
                                                                                  :valid true}
                                                                 :container-name {:value ""
                                                                                  :valid true}
                                                                 :dir-name       {:value ""
                                                                                  :valid true}
                                                                 :jar-path       {:value ""
                                                                                  :valid true}}}}
                                        :nginx    {:cont-vec [0]
                                                   :content  {0 {:image-name             {:value ""
                                                                                          :valid true}
                                                                 :container-name         {:value ""
                                                                                          :valid true}
                                                                 :dir-name               {:value ""
                                                                                          :valid true}
                                                                 :backend-container-name {:value ""
                                                                                          :valid true}}}}
                                        :postgres {:cont-vec [0]
                                                   :content  {0 {:container-name {:value ""
                                                                                  :valid true}
                                                                 :port           {:value ""
                                                                                  :valid true}
                                                                 :password       {:value ""
                                                                                  :valid true}}}}}}
                                      :out-path {:value ""
                                                 :valid true}}})

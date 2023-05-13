(ns app-creator.server.handlers
  (:require [ring.util.response :refer [response status]]
            [clojure.walk :refer [keywordize-keys]]
            [app-creator.server.service :as service]))

(declare error-string)

(defn create-projects [request]
  ;(log/info (str "\n[App-Creator] Request received: " (with-out-str (clojure.pprint/pprint (:body request))) "\n"))
  (let [result-map (-> request
                       (:body)
                       (keywordize-keys)
                       (service/create-projects))
        {:keys [result errors]} result-map
        no-errors (empty? errors)
        all-true (every? (fn [[_ v]] v) result)]

    (if (and no-errors all-true)
      (response {:info "Components were successfully created!"})

      (if (not (or no-errors all-true))
        (as-> (error-string result errors) $
              {:info $}
              (response $)
              (status $ 500))

        (if (not no-errors)

          (as-> (error-string errors) $
                (str "Errors occurred! " $)
                {:info $}
                (response $)
                (status $ 500))

          (as-> (error-string) $
                {:info $}
                (response $)
                (status $ 500)))))))

(defn test-connection []
    (Thread/sleep 1000)
    (response {:info "test passed, everything is OK!"}))

(defn error-string
  ([] "Undefined behaviour!")
  ([errors] (clojure.string/join "\n" errors))
  ([result errors]
   (let [init-str "Couldn't create following component(s) successfully: "
         middle-str ". Following errors occurred: "
         error-components (reduce-kv (fn [m k v]
                                       (if (not v) (str m "\"" k "\" ")
                                                   (str m)))
                                     init-str
                                     result)]
     (str
       error-components
       middle-str
       (clojure.string/join " " errors)))))

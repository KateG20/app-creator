(ns app-creator.client.ui.validator)

(def ip-regex #"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

(defn valid-host? [host]
  (or (= "localhost" host)
      (or (empty? host)
          (re-matches ip-regex host))))

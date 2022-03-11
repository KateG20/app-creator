(ns app-creator.parser.validator)

(require '[malli.core :as m])

(def input-schema
  [:map
   [:info
    [:map
     [:name string?]
     [:description :maybe string?]]]
   [:db
    [:map
     [:type string?]
     [:name string?]
     [:host string?]
     [:username string?]
     [:password string?]
     [:tables
      [:sequential
       [:map
        [:name string?]
        [:columns
         [:sequential
          [:map
           [:name string?]
           [:opts string?]]]]]]]]]
   [:server
    [:map
     [:type string?]
     [:project
      [:map
       [:build {:optional true} string?]
       [:language {:optional true} string?]
       [:boot-version {:optional true} string?]
       [:group-id {:optional true} string?]
       [:artifact-id {:optional true} string?]
       [:name {:optional true} string?]
       [:description {:optional true} string?]
       [:packaging {:optional true} string?]
       [:java-version {:optional true} string?]
       [:version {:optional true} string?]
       [:deps
        [:sequential string?]]]]
     [:url
      [:map
       [:db
        [:map
         [:host string?]
         [:port int?]]]
       ]]
     [:controllers
      [:sequential
       [:map
        [:name string?]
        [:requests
         [:sequential
          [:map
           [:name string?]
           [:uri string?]
           [:type string?]]]]]]]]]
   [:client
    [:map
     [:os string?]
     [:language string?]
     [:endpoints
      [:sequential
       [:map
        [:name string?]
        [:endpoint string?]
        [:type string?]]]]]]])

(defn validate [input]
  (m/validate input-schema input))

(defn errors [input]
  (m/explain input-schema input))

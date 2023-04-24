(ns app-creator.hello)

;(defn ^:export say-hello []
;  (js/alert "Hello from ClojureScript!"))

(js/alert "Hello from ClojureScript!")

;(defn ^:export say-hello []
;  (js/alert "Hello from ClojureScript!"))

;(defn some-component []
;  [:div
;   [:h3 "I am a component!"]
;   [:p.someclass
;    "I have " [:strong "bold"]
;    [:span {:style {:color "red"}} " and red"]
;    " text."]])

(defn add-some-numbers [& numbers]
  (apply + numbers))
(ns app-creator.ui.views)

(require '[hiccup
           [element :refer [javascript-tag]]
           [page :refer [include-js html5]]])

;(defn- run-clojurescript [path init]
;  (list
;    (include-js path)
;    (javascript-tag init)))

;(defn index-page []
;  (html5
;    [:head
;     [:title "Hello World Title"]]
;    [:body
;     [:h1 "Hello World"]
;     (run-clojurescript
;       "/js/main.js"
;       "example.hello.say_hello()")]))

(defn index-page []
  (html5
    [:head
     [:title "Hello World"]
     (include-js "/js/main.js")]
    [:body
     [:h1 "Hello World"]]))

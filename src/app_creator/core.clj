(ns app-creator.core)

(require '[clojure.main :as main])

(defn start []
  (println "Application started!!!"))

(def repl-start-options
  [:prompt #(print "Print \"start\" to start. Print \"exit\" or Ctrl+D to exit. \n>> ")
   :read (fn [request-prompt request-exit]
           (let [read-inp (main/repl-read request-prompt request-exit)]
             (if (= 'start read-inp) (start)
                                     (if (= 'exit read-inp) request-exit
                                                            (read-inp)))))
   ])

(defn run []
  (println "Let's start.")
  (apply main/repl repl-start-options))

(defn -main []
  ;(println "Type (run) to run app, or Ctrl+D to exit!")
  (run))

;(defn exit []
;  (System/exit 0))

;; This enters a new REPL loop that shows a new prompt.
;; Type ctrl+d to exit the nested REPL and go back to normal.
;(apply main/repl repl-options)

;(defn clever-exit []
;  (main/repl
;    ; Exit the repl whenever the user enters "exit" at the prompt.
;    :read (fn [request-prompt request-exit]
;            (let [form (main/repl-read request-prompt request-exit)]
;              (if (= 'exit form) request-exit form)))))

;(apply main/repl repl-start-options)


;(defn aaaaa []
;  (main/repl
;    :prompt #(printf "enter expression :> ")
;    :read   (fn [request-prompt request-exit]
;             (or ({:line-start request-prompt :stream-end request-exit}
;                  (main/skip-whitespace *in*))
;                 (re-find #"^(\d+)([\+\-\*\/])(\d+)$" (read-line))))
;    :eval   (fn [[_ x op y]]
;              (({"+" + "-" - "*" * "/" /} op)
;               (Integer. x)
;               (Integer. y)))))
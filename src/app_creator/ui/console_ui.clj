(ns app-creator.ui.console-ui)

(require '[clojure.main :as main])

(defn creator [] (println "DONE"))

;(def repl-create-options
;  [:prompt #(print "\nYour app is ready. Press any key to exit. ")
;   :read (fn [request-prompt request-exit]
;           (let [read-inp (main/repl-read request-prompt request-exit)]
;             (System/exit 0)))])

(defn start-creating []
  (creator)
  ;(apply main/repl repl-create-options)
  (println "\nYour app is ready. Bye for now!\n")
  (System/exit 0)
  )

(def repl-enter-dir-options
  [:prompt #(print "\nEnter path to directory where the result will be. Type \"prev\" to go to previous step. \n>> ")
   :read (fn [request-prompt request-exit]
           (let [read-inp (main/repl-read request-prompt request-exit)]
             (if (= 'start read-inp) (start-creating)
                                     (if (= 'prev read-inp) request-exit
                                                            (println "Incorrect path!")))))
   ])

(defn enter-dir []
  (apply main/repl repl-enter-dir-options))

(def repl-enter-path-options
  [:prompt #(print "\nEnter path to .yml/.yaml-file with description. Type \"prev\" to go to previous step. \n>> ")
   :read (fn [request-prompt request-exit]
           (let [read-inp (main/repl-read request-prompt request-exit)]
             (if (= 'start read-inp) (enter-dir)
                                     (if (= 'prev read-inp) request-exit
                                                            (println "Incorrect path!")))))
   ])

(defn enter-path []
  (apply main/repl repl-enter-path-options))

(def repl-start-options
  [:prompt #(print "\nPrint \"start\" to start app. Type \"exit\" to exit. \n>> ")
   :read (fn [request-prompt request-exit]
           (let [read-inp (main/repl-read request-prompt request-exit)]
             (if (= 'start read-inp) (enter-path)
                                     (if (= 'exit read-inp) (do (println "Okay, bye!\n") request-exit)
                                                            (println "Unknown input!")))))
   ])

(defn run []
  (apply main/repl repl-start-options))
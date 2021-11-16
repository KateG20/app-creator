(ns app-creator.ui.console-ui)

(require '[clojure.main :as main],
         '[app-creator.parser.parser :as parser])

(defn creator [path-from path-to] (parser/parse-from-file path-from))

;(def repl-create-options
;  [:prompt #(print "\nYour app is ready. Press any key to exit. ")
;   :read (fn [request-prompt request-exit]
;           (let [read-inp (main/repl-read request-prompt request-exit)]
;             (System/exit 0)))])

(defn start-creating [path-from, path-to]
  (creator path-from path-to)
  ;(apply main/repl repl-create-options)
  (println "\nYour app is ready. Bye for now!\n")
  (System/exit 0))


(def repl-enter-dir-options
  [:prompt #(print "\nEnter path to directory where the result will be. Type \"prev\" to go to previous step. \n>> ")
   :read (fn [request-prompt request-exit]
           (let [read-inp (main/repl-read request-prompt request-exit)]
             (if (re-matches #"^(.+)(\\/|\\\\)([^(\\/|\\\\)]+)(\\.yaml|\\.yml)$" (name read-inp))
               (start-creating read-inp, "blob")
               (if (= 'prev read-inp) request-exit
                                      (println "Incorrect path!")))))])


(defn enter-dir [path-to]                                   ; как???????????
  (println path-to)
  (apply main/repl repl-enter-dir-options))

;(def path-regex #"^(.+)(\\/|\\\\)([^(\\/|\\\\)]+)(\\.yaml|\\.yml)$")
(def path-regex #"^(.+)(\/|\\)([^(\/|\\)]+)(\.yaml|\.yml)$")
; C:/Users/Lenovo X1/Downloads/yaml.yaml
; C:\Users\Lenovo X1\Downloads\yaml.yaml

(defn my-skip-whitespace
  "Skips whitespace characters on stream s. Returns :line-start, :stream-end,
  or :body to indicate the relative location of the next character on s.
  Interprets comma as whitespace and semicolon as comment to end of line.
  Does not interpret #! as comment to end of line because only one
  character of lookahead is available. The stream must either be an
  instance of LineNumberingPushbackReader or duplicate its behavior of both
  supporting .unread and collapsing all of CR, LF, and CRLF to a single
  \\newline."
  [s]
  (loop [c (.read s)]
    (cond
      (= c (int \newline)) :line-start
      (= c -1) :stream-end
      (= c (int \;)) (do (.readLine s) :line-start)
      (or (Character/isWhitespace (char c)) (= c (int \,))) (recur (.read s))
      :else (do (println (char c)) (.unread s c) :body))))

(defn my-repl-read
  "Default :read hook for repl. Reads from *in* which must either be an
  instance of LineNumberingPushbackReader or duplicate its behavior of both
  supporting .unread and collapsing all of CR, LF, and CRLF into a single
  \\newline. repl-read:
    - skips whitespace, then
      - returns request-prompt on start of line, or
      - returns request-exit on end of stream, or
      - reads an object from the input stream, then
        - skips the next input character if it's end of line, then
        - returns the object."
  [request-prompt request-exit]
  (println (str "skip-wh: " (my-skip-whitespace *in*)))
  (or ({:line-start request-prompt :stream-end request-exit}
       (my-skip-whitespace *in*))
      (let [input (main/renumbering-read {:read-cond :allow} *in* 1)]
        (main/skip-if-eol *in*)
        input)))

(def repl-enter-path-options
  [:prompt #(print "\nEnter absolute path to .yml/.yaml-file with description. Type \"prev\" to go to previous step. \n>> ")
   :read (fn [request-prompt request-exit]
           (let [read-inp (my-repl-read request-prompt request-exit)
                 ;inp (read-line)
                 ]
             (println (str "\"" read-inp "\""))
             ;(println (str "\"" inp "\""))
             (if (= 'prev read-inp) request-exit
                                (if (some? (re-matches path-regex (name read-inp)))

                                  (do
                                    (println read-inp)
                                    (enter-dir read-inp))

                                  (println "Incorrect path!")))))])


(defn enter-path []
  (apply main/repl repl-enter-path-options))

(def repl-start-options
  [:prompt #(print "\nPrint \"start\" to start app. Type \"exit\" to exit. \n>> ")
   :read (fn [request-prompt request-exit]
           (let [read-inp (main/repl-read request-prompt request-exit)]
             (if (= 'start read-inp) (enter-path)
                                     (if (= 'exit read-inp) (do (println "Okay, bye!\n") request-exit)
                                                            (println "Unknown input!")))))])

(defn run []
  (apply main/repl repl-start-options))
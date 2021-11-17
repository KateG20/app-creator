(ns app-creator.ui.cli)

(require '[clojure.tools.cli :exclude boolean? :as cli-tools]
         '[clojure.string :as string]
         '[clojure.java.io :as io]
         '[app-creator.parser.parser :as parser])

(def in-path-regex #"^(.+)(\.yaml|\.yml)$")
(def out-path-regex #"^([^\.])+$")
(defn required-opt-errs [opt-name]
  [(str "Invalid options number: " opt-name " option must be specified.")])

; C:/Users/Lenovo X1/Downloads/yaml.yaml
; C:\Users\Lenovo X1\Downloads\yaml.yaml

(def cli-options
  [["-i" "--in-path IN-PATH" "Absolute path to .yml/.yaml-file with description"
    :validate [#(and (.exists (io/file %)) (some? (re-matches in-path-regex %)))
               "Must be correct absolute path to existing .yml/.yaml-file with quotes."]]
   ["-o" "--out-path OUT-PATH" "Absolute path to directory where the result will be"
    :validate [#(and (.isDirectory (io/file %)) (some? (re-matches out-path-regex %)))
               "Must be correct absolute path to directory with quotes."]]
   ["-h" "--help"]])

(defn usage [options-summary]
  (->> ["Hello!"
        ""
        "Usage: program-name action [options]"
        ""
        "Options:"
        options-summary
        ""
        "Actions:"
        "  start    Start app"
        ""
        "You have to specify both path to source file and path to target directory to start."]
       (string/join \newline)))

(defn error-msg [errors]
  (str "The following errors occurred while parsing your command:\n\n"
       (string/join \newline errors)))

(defn validate-args
  "Validate command line arguments. Either return a map indicating the program
  should exit (with an error message, and optional ok status), or a map
  indicating the action the program should take and the options provided."
  [args]
  ;(println (str "\nvalidate-args. unparsed args: " args))
  (let [{:keys [options arguments errors summary]} (cli-tools/parse-opts args cli-options)]
    ;(println (str "\nvalidate-args. parsed-opts:\noptions: " options
    ;              "\narguments: " arguments "\nerrors: " errors "\nsummary: " summary))
    ;(println "")

    ;(try
    ;  (assert (:in-path options) "`--in-path` must be specified!")
    ;  (assert (:out-path options) "`--out-path` must be specified!")
    ;  (catch AssertionError e
    ;    (println "Invalid options number: " (.getMessage e))
    ;    ))

    (cond
      ; если в options есть help, то возвращаем мапу:
      ; exit-message=описание и "всё ли ок"=true
      (:help options)
      {:exit-message (usage summary) :ok? true}

      ; если есть ошибки, то возвращаем мапу:
      ; exit-message=сообщение об ошибке и "всё ли ок"=false (nil)
      errors
      {:exit-message (error-msg errors)}

      ;; custom validation on arguments
      ; если валидация аргументов проходит (он 1 и равен start либо exit)
      ; и если есть обе необходимые опции (указаны оба пути),
      ; то возвращаем мапу, что нужно действие с таким-то аргументом и такими опциями
      (and (= 1 (count arguments))
           (#{"start" "exit"} (first arguments)))
      (cond
         (not (:in-path options))
         {:exit-message (error-msg (required-opt-errs "--in-path"))}

         (not (:out-path options))
         {:exit-message (error-msg (required-opt-errs "--out-path"))}

         :else
         {:action (first arguments) :options options})

      ; иначе считаем что пользователь тупой и просто выводим ему саммари
      :else
      {:exit-message (usage summary)})))

(defn exit [status msg]
  (println msg)
  (System/exit status))

(defn start [path-in path-out]
  (parser/parse-from-file path-in))

(defn run [args]
  ;(println (str "\nrun. args: " args))
  (let [{:keys [action options exit-message ok?]} (validate-args args)]
    ;(println (str "\nrun. validated args: " [action options exit-message ok?]))
    (if exit-message
      (exit (if ok? 0 1) exit-message)
      (case action
        "start" (start (:in-path options) (:out-path options))))))


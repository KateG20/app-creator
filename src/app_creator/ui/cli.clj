(ns app-creator.ui.cli)

(require '[clojure.tools.cli :as tools]
         '[clojure.string :as string]
         '[clojure.java.io :as io]
         '[app-creator.parser.parser :as parser])

;(def path-in-regex #"^(.+)(\/|\\)([^(\/|\\)]+)(\.yaml|\.yml)$")
(def path-in-regex #"^(.+)(\.yaml|\.yml)$")
(def path-out-regex #"^([^\.])+$")
(def path-in nil)
(def path-out nil)

(defn start [path-in path-out]
  (parser/parse-from-file path-in))

(def cli-options
  [["-i" "--path-in PATH-IN" "Absolute path to .yml/.yaml-file with description"
    ;:validate [#(some? (re-matches path-in-regex %)) "Must be correct absolute path to .yml/.yaml-file."]
    :validate [#(and (.exists (io/file %)) (some? (re-matches path-in-regex %)))
               "Must be correct absolute path to existing .yml/.yaml-file."]]
   ["-o" "--path-out PATH-OUT" "Absolute path to directory where the result will be"
    :validate [#(and (.isDirectory (io/file %)) (some? (re-matches path-out-regex %)))
               "Must be correct absolute path to directory."]]
   ["-q" "--quit" "Quit from app"]
   ["-h" "--help"]])

(defn usage [options-summary]
  (->> ["This is my program. There are many like it, but this one is mine."
        ""
        "Usage: program-name [options] action"
        ""
        "Options:"
        options-summary
        ""
        "Actions:"
        "  start    Start app"
        "  exit     Exit app"
        ""
        "Please refer to the manual page for more information."]
       (string/join \newline)))

(defn error-msg [errors]
  (str "The following errors occurred while parsing your command:\n\n"
       (string/join \newline errors)))

(defn validate-args
  "Validate command line arguments. Either return a map indicating the program
  should exit (with an error message, and optional ok status), or a map
  indicating the action the program should take and the options provided."
  [args]
  (let [{:keys [options arguments errors summary]} (tools/parse-opts args cli-options)]
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
      ; если валидация аргументов проходит (он 1 и равен start либо exit),
      ; то возвращаем мапу, что нужно действие с таким-то аргументом и такими опциями
      (and (= 1 (count arguments))
           (#{"start" "exit"} (first arguments)))
      {:action (first arguments) :options options}

      ; иначе считаем что пользователь тупой и просто выводим ему саммари
      :else
      {:exit-message (usage summary)})))

(defn exit [status msg]
  (println msg)
  (System/exit status))

(defn run [& args]
  (let [{:keys [action options exit-message ok?]} (validate-args args)]
    (println (str "options: " options "."))
    (if exit-message
      (exit (if ok? 0 1) exit-message)                      ; не оч поняла, зачем тут выходить
      (case action
        "start" (start (first options) (second options))
        "exit" (exit 0 "Bye!")))))


;(defn run [& args]
;  (tools/parse-opts args cli-options))

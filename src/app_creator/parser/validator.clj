(ns app-creator.parser.validator)

(require '[sci.core]                                        ; https://github.com/metosin/malli#serializable-functions
         '[malli.core :as m]
         '[malli.error :as me]
         '[clojure.string :as string]
         '[app-creator.parser.messages :as msg]
         '[clojure.java.io :as io]
         '[app-creator.parser.regex :as r]
         '[app-creator.parser.opts :as o])

(use 'selmer.parser)

(defn find-error-paths [data]
  "Находит все пути от корня до листьев в ациклическом графе, где листья - строки,
  а другие ноды могут быть векторы или мапы. Возвращает всегда вектор строк -
  найденных для данной вершины путей. Форматирует по пути"

  (if (string? data)
    [(str "\nError message: \"" data "\"\n")]
    (if (vector? data)
      (reduce
        (fn [prev new]
          (->> new
               (find-error-paths)
               (concat prev)
               (vec)))
        []
        data)
      (if (map? data)
        (reduce-kv (fn [prev key val]
                     (->> val
                          (find-error-paths)
                          (reduce
                            (fn [prev new]
                              (let [key (as-> key k
                                              (str k)
                                              (if (= ":" (subs k 0 1))
                                                (subs k 1) k)
                                              (if (every? #(Character/isDigit ^char %) k)
                                                (str "element " (+ 1 (Integer/parseInt k))) k))
                                    sep (if (= (subs new 0 1) "\n") "" " >> ")]
                                (conj prev (str key sep new))))
                            [])
                          (concat prev)
                          (vec)))
                   []
                   data)
        data))))

(defn error-fn [msg]
  {:error/fn (fn [{:keys [value]} _] (<< "'{{value}}': {{msg}}"))})

(defn restrict-error-msg [elems & {:keys [in-work] :or {in-work false}}]
  "Создает сообщение об недопустимом значении, перечисляя допустимые"
  (as-> elems e
        (if in-work (conj e "*more options are coming soon!*") e)
        (string/join " | " e)
        (str "should be one of: " e)))

(defn restrict-enum [elems & {:keys [in-work] :or {in-work false}}]
  "Создает перечисление со всеми возможными значениями для malli, а также сообщение об ошибке"
  (let [error-message (restrict-error-msg elems :in-work in-work)
        enum (map str elems)]
    (vec (concat [:enum (error-fn error-message)] enum))))

;(defmacro is-correct [regex]
;  `(fn [~'s] (and (string? s) (re-matches ~regex s))))

(def db-schema
  [:db {:optional true}
   [:map {:closed        true
          ; if map keys are not from allowed list:
          :error/message (restrict-error-msg o/dbms-opts :in-work true)}
    [:postgresql {:optional true}
     [:map {:closed true}
      [:db-name string?]                                    ; любое, т.к. скрипт не запускается прогой. валидация на совести юзера
      [:host [:fn (error-fn msg/host-error)
              (fn [host]
                (and (string? host)
                     (or (= "localhost" host)
                         (re-matches r/ip-regex host))))]]
      [:username string?]
      [:password string?]
      [:tables
       [:sequential
        [:map {:closed true}
         [:table-name string?]
         [:columns
          [:sequential
           [:map {:closed true}
            [:col-name string?]
            [:opts (restrict-enum o/col-type-opts)]]]]]]]]]
    ; other db types here, for example:
    ; [:mongo {:optional true} string?]
    ]])

(def server-schema
  [:server {:optional true}
   [:map {:closed        true
          ; if map keys are not from allowed list:
          :error/message (restrict-error-msg o/server-opts :in-work true)}
    [:spring {:optional true}
     [:map {:closed true}
      [:project
       [:map {:closed true}
        [:build {:optional true} (restrict-enum o/build-opts)]
        [:language {:optional true} (restrict-enum o/lang-opts)]
        [:boot-version {:optional true} (restrict-enum o/boot-v-opts)]
        [:group {:optional true} string?]
        [:artifact {:optional true} string?]
        [:proj-name {:optional true} string?]
        [:description {:optional true} string?]
        [:packaging {:optional true} (restrict-enum o/packaging-opts)]
        [:java-version {:optional true} [:and string? (restrict-enum o/java-v-opts)]]
        [:project-version {:optional true} string?]
        [:deps {:optional true}
         [:sequential (restrict-enum o/deps-opts)]]]]
      [:properties
       [:map {:closed true}
        [:db
         [:map {:closed true}
          [:type string?]
          [:username string?]
          [:password string?]
          [:sql-host [:fn (error-fn msg/host-error)
                      (fn [host] (and (string? host)
                                      (or (= "localhost" host)
                                          (re-matches r/ip-regex host))))]]
          [:sql-port [:fn (error-fn msg/port-error)
                      (fn [port] (and (int? port) (< 1 port) (< port 65535)))]]
          [:db-name string?]]]]]
      [:controllers
       [:sequential
        [:map {:closed true}
         [:controller-name [:fn (error-fn msg/controller-name-error)
                            (fn [name] (and (string? name) (re-matches r/controller-name-regex name)))]]
         [:requests
          [:sequential
           [:map {:closed true}
            [:req-name [:fn (error-fn msg/method-name-error)
                        (fn [name] (and (string? name) (re-matches r/method-name-regex name)))]]

            [:uri [:fn (error-fn msg/uri-path-error)
                   (fn [uri] (and (string? uri) (re-matches r/uri-regex uri)))]]

            [:mapping (restrict-enum o/server-mapping-opts)]]]]]]]]]]])

(def client-schema
  [:client {:optional true}
   [:map {:closed        true
          ; if map keys are not from allowed list:
          :error/message (restrict-error-msg o/client-type-opts :in-work true)}
    [:android {:optional true}
     [:map {:closed true}
      [:proj-name string?]
      [:language (restrict-enum o/client-language-opts :in-work true)]
      [:package-name [:fn (error-fn msg/package-name-error)
                      (fn [name] (and (string? name) (string/includes? name ".")))]]
      [:test-framework (restrict-enum o/test-framework-opts)]
      [:server-host [:fn (error-fn msg/host-error)
              (fn [host] (and (string? host)
                              (or
                                (= "localhost" host)
                                (re-matches r/ip-regex host))))]]
      [:server-port [:fn (error-fn msg/port-error)
              (fn [port] (and (int? port) (< 1 port) (< port 65535)))]]
      [:requests
       [:sequential
        [:map {:closed true}
         [:req-name string?]
         [:uri [:fn (error-fn msg/uri-path-error)
                (fn [uri] (and (string? uri) (re-matches r/uri-regex uri)))]]
         [:type (restrict-enum o/client-mapping-opts)]
         [:entity [:fn (error-fn msg/entity-name-error)
                   (fn [name] (and (string? name) (re-matches r/entity-regex name)))]]]]]]]]])

(def containerization-schema
  [:containerization {:optional true}
   [:map {:closed        true
          ; if map keys are not from allowed list:
          :error/message (restrict-error-msg o/cont-opts :in-work true)}
    [:docker {:optional true}
     [:map {:closed true}
      [:jars {:optional true}
       [:sequential
        [:map {:closed true}
         [:image-name string?]
         [:container-name string?]
         [:dir-name string?]
         [:jar-path [:fn (error-fn msg/jar-path-error)
                     (fn [name] (and (string? name)
                                     (re-matches r/jar-path-regex name)
                                     ; "jar не обязательно должен существовать; может, мы хотим заюзать
                                     ; создаваемый проект" - неверно. Создаваемый проект еще надо забилдить,
                                     ; такая опция не встроена, - todo
                                     ; значит, safer будет требовать существование джарника
                                     (.exists (io/as-file name))))]]]]]
      [:nginx {:optional true}
       [:sequential
        [:map {:closed true}
         [:image-name string?]
         [:container-name string?]
         [:dir-name string?]
         [:backend-image-name string?]]]]
      [:postgres {:optional true}
       [:sequential
        [:map {:closed true}
         [:container-name string?]
         [:password string?]]]]
      [:network
       [:map {:closed true}
        [:network-name string?]]]]]]])

(def input-schema
  [:map {:closed true}
   db-schema
   server-schema
   client-schema
   containerization-schema])

(defn explain [input]
  (-> input-schema
      (m/explain input)
      (me/humanize)
      (find-error-paths)))

(ns app-creator.creator.client.android.java.templates
  (:import (java.io File)))

(require '[clojure.string :as string]
         '[selmer.util :as sutil :refer [without-escaping]])

(use 'selmer.parser)
(sutil/turn-off-escaping!)

(def sep File/separator)

(def current-gradle-version "7.0.4")
(def current-constraint-layout-version "2.0.4")
(def current-app-compat-version "1.4.1")
(def current-retrofit-version "2.8.1")
(def current-retrofit-gson-version "2.8.1")

(def gradle-properties
  (->> ["android.useAndroidX=true"
        "android.enableJetifier=true"]
       (string/join \newline)))

(defn delete-resources [app-dir]
  (->> ["@echo off"
        ""
        "rmdir \"{{app-dir}}src{{sep}}main{{sep}}resources\""
        ""]
       (string/join \newline)
       (<<)))

(defn delete-app-class [package-dir]
  (->> ["@echo off"
        ""
        "del \"{{package-dir}}App.java\""
        ""]
       (string/join \newline)
       (<<)))

(def root-build-gradle
  (->> ["buildscript {"
        ""
        "    repositories {"
        "        google()"
        "        mavenCentral()"
        "    }"
        "    dependencies {"
        "        classpath 'com.android.tools.build:gradle:{{current-gradle-version}}'"
        "    }"
        "}"
        ""
        "allprojects {"
        "    repositories {"
        "        google()"
        "        mavenCentral()"
        "    }"
        "}"
        ""
        "task clean(type: Delete) {"
        "    delete rootProject.buildDir"
        "}"]
       (string/join \newline)
       (<<)))

(defn app-build-gradle [package-name]
  (->> ["apply plugin: 'com.android.application'"
        ""
        "android {"
        "    compileSdkVersion 31"
        "    buildToolsVersion \"30.0.3\""
        ""
        "    defaultConfig {"
        "        applicationId \"{{package-name}}\""
        "        minSdkVersion 16"
        "        targetSdkVersion 31"
        "        versionCode 1"
        "        versionName \"1.0\""
        "    }"
        ""
        "    buildTypes {"
        "        release {"
        "            minifyEnabled false"
        "            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'"
        "        }"
        "    }"
        ""
        "    compileOptions {"
        "        sourceCompatibility JavaVersion.VERSION_11"
        "        targetCompatibility JavaVersion.VERSION_11"
        "    }"
        "}"
        ""
        "dependencies {"
        "    implementation 'com.android.support.constraint:constraint-layout:{{current-constraint-layout-version}}'"
        "    implementation 'androidx.appcompat:appcompat:{{current-app-compat-version}}'"
        ""
        "    implementation 'com.squareup.retrofit2:retrofit:{{current-retrofit-version}}'"
        "    implementation 'com.squareup.retrofit2:converter-gson:{{current-retrofit-gson-version}}'"
        "}"]
       (string/join \newline)
       (<<)))

(def styles
  (->> ["<resources>"
        ""
        "    <!-- Base application theme. -->"
        "    <style name=\"AppTheme\" parent=\"Theme.AppCompat.Light.NoActionBar\">"
        "        <!-- Customize your theme here. -->"
        "    </style>"
        ""
        "</resources>"]
       (string/join \newline)))

(defn manifest [package-name]
  (->> ["<?xml version=\"1.0\" encoding=\"utf-8\"?>"
        "<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\""
        "    package=\"{{package-name}}\">"
        "    <uses-permission android:name=\"android.permission.INTERNET\" />"
        ""
        "    <application"
        "        android:label=\"Demo App\""
        "        android:theme=\"@style/AppTheme\">"
        ""
        "        <activity android:name=\".MainActivity\""
        "            android:exported=\"true\">"
        "            <intent-filter>"
        "                <action android:name=\"android.intent.action.MAIN\" />"
        "                <category android:name=\"android.intent.category.LAUNCHER\" />"
        "            </intent-filter>"
        "        </activity>"
        "    </application>"
        ""
        "</manifest>"]
       (string/join \newline)
       (<<)))

(defn main-activity [package-name]
  (->> ["package {{package-name}};"
        ""
        "import androidx.appcompat.app.AppCompatActivity;"
        "import android.os.Bundle;"
        ""
        "public class MainActivity extends AppCompatActivity {"
        ""
        "    @Override"
        "    protected void onCreate(Bundle savedInstanceState) {"
        "        super.onCreate(savedInstanceState);"
        "        setContentView(R.layout.activity_main);"
        "    }"
        "}"]
       (string/join \newline)
       (<<)))

(def main-activity-layout
  (->> [
        "<?xml version=\"1.0\" encoding=\"utf-8\"?>"
        "<android.support.constraint.ConstraintLayout xmlns:android=\"http://schemas.android.com/apk/res/android\""
        "    xmlns:app=\"http://schemas.android.com/apk/res-auto\""
        "    xmlns:tools=\"http://schemas.android.com/tools\""
        "    android:layout_width=\"match_parent\""
        "    android:layout_height=\"match_parent\""
        "    tools:context=\".MainActivity\">"
        ""
        "    <TextView"
        "        android:layout_width=\"wrap_content\""
        "        android:layout_height=\"wrap_content\""
        "        android:text=\"Hello World!\""
        "        app:layout_constraintBottom_toBottomOf=\"parent\""
        "        app:layout_constraintLeft_toLeftOf=\"parent\""
        "        app:layout_constraintRight_toRightOf=\"parent\""
        "        app:layout_constraintTop_toTopOf=\"parent\" />"
        ""
        "    </android.support.constraint.ConstraintLayout>"
        ]
       (string/join \newline)
       (<<)))

(defn network-service [package-name base-url]
  (->> ["package {{package-name}};"
        ""
        "public class NetworkService {"
        "    private static NetworkService mInstance;"
        "    private static final String BASE_URL = \"{{base-url}}\";"
        "    private Retrofit mRetrofit;"
        ""
        "    private NetworkService() {"
        "        mRetrofit = new Retrofit.Builder()"
        "                 .baseUrl(BASE_URL)"
        "                 .addConverterFactory(GsonConverterFactory.create())"
        "                 .build();"
        "        }"
        ""
        "    public static NetworkService getInstance() {"
        "        if (mInstance == null) {"
        "             mInstance = new NetworkService();"
        "        }"
        "        return mInstance;"
        "    }"
        ""
        "    public MyApi getApi() { "
        "        return mRetrofit.create(MyApi.class);"
        "    }"
        "}"
        ]
       (string/join \newline)
       (<<)))

(defn api-interface [package-name requests entity-imports]
  (->> [
        "package {{package-name}};"
        ""
        "import retrofit2.Call;"
        "import retrofit2.http.GET;"
        "import retrofit2.http.Query;"
        ;"{{entity-imports}}"
        ""
        "public interface MyApi {"
        ""
        "    // Change and add methods as per your needs"
        "{{requests}}"
        "}"
        ]
       (string/join \newline)
       (<<)))

(defn request [name uri type entity]
  (let [type (string/upper-case type)]
    (->> [
          "    @{{type}}(\"{{uri}}\")"
          "    Call<{{entity}}> {{name}}();"
          ""
          ""
          ]
         (string/join \newline)
         (<<))))

(defn pojo [package-name entity]
  (->> [
        "package {{package-name}};"
        ""
        "import com.google.gson.annotations.Expose;"
        "import com.google.gson.annotations.SerializedName;"
        ""
        "public class {{entity}} {"
        "    @SerializedName(\"id\")"
        "    @Expose"
        "    private int id;"
        ""
        "    public int getId() {"
        "        return id;"
        "    }"
        ""
        "    public void setId(int id) {"
        "        this.id = id;"
        "    }"
        ""
        "    // your fields here"
        "}"
        ]
       (string/join \newline)
       (<<)))

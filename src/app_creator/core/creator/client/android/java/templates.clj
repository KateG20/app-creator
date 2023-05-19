(ns app-creator.core.creator.client.android.java.templates
  (:import (java.io File)))

(require '[clojure.string :as string]
         '[selmer.util :as sutil :refer [without-escaping]])

(use 'selmer.parser)
(sutil/turn-off-escaping!)

(def sep File/separator)

(def current-gradle-version "7.0.4")
(def current-constraint-layout-version "2.1.4")
(def current-app-compat-version "1.6.1")
(def current-retrofit-version "2.9.0")
(def current-retrofit-gson-version "2.9.0")

(def gradle-properties
  (->> ["android.useAndroidX=true"
        "android.enableJetifier=true"]
       (string/join \newline)))

(defn delete-resources [app-dir]
  (->> ["@echo off"
        ""
        "rmdir \"{{app-dir}}src{{sep}}main{{sep}}resources\""
        "rmdir \"{{app-dir}}src{{sep}}test{{sep}}resources\""
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
        "    compileSdk 33"
        "    buildToolsVersion \"30.0.3\""
        ""
        "    defaultConfig {"
        "        applicationId \"{{package-name}}\""
        "        minSdk 21"
        "        targetSdk 33"
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
        "    implementation 'androidx.constraintlayout:constraintlayout:{{current-constraint-layout-version}}'"
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
        "    <style name=\"MainScreen\" parent=\"TextAppearance.AppCompat\">"
        "        <item name=\"android:background\">#fff</item>"
        "    </style>"
        ""
        "    <style name=\"MainText\" parent=\"TextAppearance.AppCompat\">"
        "        <item name=\"android:textColor\">#6db43d</item>"
        "        <item name=\"android:textSize\">32sp</item>"
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
        "        android:allowBackup=\"false\""
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
        "<androidx.constraintlayout.widget.ConstraintLayout"
        "    xmlns:android=\"http://schemas.android.com/apk/res/android\""
        "    xmlns:app=\"http://schemas.android.com/apk/res-auto\""
        "    xmlns:tools=\"http://schemas.android.com/tools\""
        "    style=\"@style/MainScreen\""
        "    android:layout_width=\"match_parent\""
        "    android:layout_height=\"match_parent\""
        "    tools:context=\".MainActivity\">"
        ""
        "    <TextView"
        "        style=\"@style/MainText\""
        "        android:layout_width=\"match_parent\""
        "        android:layout_height=\"wrap_content\""
        "        android:text=\"Hello World!\""
        "        android:gravity=\"center\""
        "        app:layout_constraintBottom_toBottomOf=\"parent\""
        "        app:layout_constraintLeft_toLeftOf=\"parent\""
        "        app:layout_constraintRight_toRightOf=\"parent\""
        "        app:layout_constraintTop_toTopOf=\"parent\"/>"
        ""
        "    </androidx.constraintlayout.widget.ConstraintLayout>"
        ]
       (string/join \newline)
       (<<)))

(defn network-service [package-name host port]
  (let [host (if (= host "localhost") "127.0.0.1" host)]
    (->> ["package {{package-name}};"
          ""
          "import retrofit2.Retrofit;"
          "import retrofit2.converter.gson.GsonConverterFactory;"
          ""
          "public class NetworkService {"
          "    private static NetworkService mInstance;"
          "    private static final String BASE_URL = \"http://{{host}}:{{port}}/\";"
          "    private final Retrofit mRetrofit;"
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
         (<<))))

(defn api-interface [package-name requests]
  (->> [
        "package {{package-name}};"
        ""
        "import java.util.List;"
        ""
        "import retrofit2.Call;"
        "import retrofit2.http.*;"
        ;"{{entity-imports}}"
        ""
        "public interface MyApi {"
        ""
        "    // Change and add methods as per your needs"
        ""
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

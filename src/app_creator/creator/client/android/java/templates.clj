(ns app-creator.creator.client.android.java.templates
  (:import (java.io File)))

(require '[clojure.string :as string]
         '[selmer.util :as sutil :refer [without-escaping]])

(use 'selmer.parser)
(sutil/turn-off-escaping!)

(def sep File/separator)
(def current-gradle-version "7.0.4")
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
        "    implementation 'com.android.support.constraint:constraint-layout:2.0.4'"
        "    implementation 'androidx.appcompat:appcompat:1.4.1'"
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

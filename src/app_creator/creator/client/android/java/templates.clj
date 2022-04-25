(ns app-creator.creator.client.android.java.templates
  (:import (java.io File)))

(require '[clojure.string :as string]
         '[selmer.util :as sutil :refer [without-escaping]])

(use 'selmer.parser)
(sutil/turn-off-escaping!)

(def sep File/separator)
(def current-gradle-version "4.0.2")
(def gradle-properties "android.useAndroidX=true")

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
        "    defaultConfig {"
        "        applicationId \"{{package-name}}\""
        "        minSdkVersion 16"
        "        targetSdkVersion 31"
        "        versionCode 1"
        "        versionName \"1.0\""
        "    }"
        "    buildTypes {"
        "        release {"
        "            minifyEnabled false"
        "            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'"
        "        }"
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
        "        <activity android:name=\".MainActivity\">"
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

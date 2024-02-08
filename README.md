# Spyware Weather App (Android)

## What is it?

This spyware app was made for a school project using Kotlin.
The goal of the app is making it look legitimate while collecting private user information. This could be the location, but also dumping contacts etc.
An extra assignment was making a Frida script to bypass certain screens on the app. For example bypassing the login screen. 


## App Information:

When logged in the app will ask for permissions.

If the user accepts these permissions it will start tracking the users location and dump the contacts to a database without their knowledge.


## App Features:

* Login/register page (can be bypassed using the frida scripts)
* Weather forecast (using OpenWeatherMap API)
* Location tracking (using FusedLocationProviderClient)
* Firebase realtime database

## Some screenshots:

![Login screen](/image/sample.webp "Login screen")

![Weather screen](/image/sample.webp "Weather screen")

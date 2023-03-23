package com.example.loginregistration

data class User(val username: String, val latitude: Double, val longitude: Double) {
    constructor() : this("", 0.0, 0.0)
}
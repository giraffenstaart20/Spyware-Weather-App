'use strict'

if(Java.available){
  Java.perform(function () {
    // Get a reference to the MainActivity class
    var MainActivity = Java.use('com.example.loginregistration.MainActivity');
    console.log("MainActivity: " + MainActivity);

    // Replace the LoginActivity with the WeatherActivity
    var WeatherActivity = Java.use('com.example.loginregistration.WeatherActivity');
    console.log("WeatherActivity: " + WeatherActivity);
    MainActivity.onCreate.implementation = function (savedInstanceState) {
      // Call the original onCreate() method
      this.onCreate(savedInstanceState);

      // Delay the call to getIntent() until after onCreate() has finished executing
      setImmediate(function() {
        var intent = this.getIntent();
        var weatherActivityObj = WeatherActivity.$new();
        weatherActivityObj.startActivity(intent);
        this.finish();
      }.bind(this));
    };
  });

}
else{
  console.log("Java not available")
}

//frida -U -f com.example.loginregistration -l .\bypass_login.js
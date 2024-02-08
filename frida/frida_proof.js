Java.perform(function () {
  var MainActivity = Java.use("com.example.fridaproof.MainActivity");
  console.log("MainActivity: " + MainActivity)
  MainActivity.checkUser.implementation = function (usernameInput, passwordInput) {
    return true;
  };
});
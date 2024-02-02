// script.js

document.getElementById("submitButton").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    document.getElementById("message").innerHTML = "Please enter both username and password.";
  } else {
    // Replace this with your actual login logic
    if (username === "admin" && password === "pass") {
      document.getElementById("message").innerHTML = "Login successful!";
    } else {
      document.getElementById("message").innerHTML = "Invalid username or password.";
    }
  }
});

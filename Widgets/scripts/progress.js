// JavaScript for Progress Bar and Button
const progressBar = document.getElementById("progressBar");
const myButton = document.getElementById("myButton");

let progressValue = 0;
const interval = setInterval(function() {
  progressValue += 1;
  progressBar.value = progressValue;

  if (progressValue >= 100) {
    clearInterval(interval);
    myButton.disabled = false;
  }
}, 50);

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const clickButton = document.getElementById('clickButton');
    const messageDiv = document.getElementById('message');
  
    clickButton.addEventListener('click', function () {
      messageDiv.innerText = "You have done a dynamic click";
    });
  
    clickButton.addEventListener('contextmenu', function (event) {
      event.preventDefault();
      messageDiv.innerText = "You have done a right click";
    });
  
    clickButton.addEventListener('dblclick', function () {
      messageDiv.innerText = "You have done a double click";
    });
  });
  
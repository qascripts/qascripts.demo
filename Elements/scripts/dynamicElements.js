// script.js

document.addEventListener('DOMContentLoaded', function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
  
    setTimeout(function () {
      button1.disabled = false;
    }, 5000);
  
    setTimeout(function () {
      button2.style.backgroundColor = 'green';
    }, 5000);
  
    setTimeout(function () {
      button3.style.display = 'block';
    }, 5000);
  });
  
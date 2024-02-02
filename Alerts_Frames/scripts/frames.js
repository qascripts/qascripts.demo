// script.js

document.addEventListener('DOMContentLoaded', function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
  
    button1.addEventListener('click', function () {
      alert('Button from Frame 1 was clicked');
    });
  
    button2.addEventListener('click', function () {
      alert('Button from Frame 2 was clicked');
    });
  
    button3.addEventListener('click', function () {
      alert('Button from Frame 3 was clicked');
    });
  });
  
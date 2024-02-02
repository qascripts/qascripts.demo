// script.js

document.addEventListener('DOMContentLoaded', function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
  
    button1.addEventListener('click', function () {
      alert('Welcome to QA Scripts');
    });
  
    button2.addEventListener('click', function () {
      const result = confirm('Follow QAScripts');
      if (result) {
        alert('You clicked OK!');
      } else {
        alert('You clicked Cancel!');
      }
    });
  
    button3.addEventListener('click', function () {
      const name = prompt('Please enter your name:');
      if (name !== null) {
        alert(`Hello, ${name}!`);
      } else {
        alert('Operation canceled');
      }
    });
  });
  
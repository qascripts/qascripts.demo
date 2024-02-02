// script.js (for the parent frame)

document.addEventListener('DOMContentLoaded', function () {
    const parentButton = document.getElementById('parentButton');
  
    parentButton.addEventListener('click', function () {
      alert('Button from Parent Frame was clicked');
    });
  });
  
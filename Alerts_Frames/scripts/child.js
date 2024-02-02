// script.js (for the child frame)

document.addEventListener('DOMContentLoaded', function () {
    const childButton = document.getElementById('childButton');
  
    childButton.addEventListener('click', function () {
      alert('Button from Child Frame was clicked');
    });
  });
  
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const uploadInput = document.getElementById('uploadInput');
    const uploadButton = document.getElementById('uploadButton');
    const downloadLink = document.getElementById('downloadLink');
  
    uploadButton.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent form submission
  
      const file = uploadInput.files[0];
      if (file) {
        // Handle file upload logic here (e.g., send it to a server)
        console.log('Uploaded file:', file.name);
      } else {
        console.log('No file selected.');
      }
    });
  });
  
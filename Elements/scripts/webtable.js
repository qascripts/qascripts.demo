// script.js

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function generateTable() {
    const names = [
      "Rahul Sharma", "Divya Patel", "Amit Singh", "Priya Gupta",
      "Arjun Reddy", "Ananya Roy", "Rohan Kumar", "Neha Sharma"
    ];
    const cities = [
      "Mumbai", "Delhi", "Bangalore", "Kolkata",
      "Chennai", "Hyderabad", "Pune", "Jaipur"
    ];
  
    const tableBody = document.getElementById('table-body');
  
    let shuffledRows = [];
    for (let i = 0; i < names.length; i++) {
      const randomAge = Math.floor(Math.random() * 15) + 25; // Random age between 25 to 40
      const randomSalary = Math.floor(Math.random() * 20000) + 48000; // Random salary between 48000 to 68000
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${names[i]}</td>
        <td>${randomAge}</td>
        <td>${cities[i]}</td>
        <td>${randomSalary}</td>
      `;
      shuffledRows.push(row);
    }
  
    shuffledRows = shuffleArray(shuffledRows);
  
    shuffledRows.forEach(row => {
      tableBody.appendChild(row);
    });
  }
  
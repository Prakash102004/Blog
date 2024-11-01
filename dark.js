// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    // Save the current mode to localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Function to set the theme based on localStorage
  function setTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
  
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
  
  // Wait for the DOM to be fully loaded before initializing
  document.addEventListener('DOMContentLoaded', function () {
    // Set the theme based on localStorage
    setTheme();
  
    // Add event listener to the toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.textContent = 'Toggle Dark Mode';
    toggleBtn.addEventListener('click', toggleDarkMode);
  
    // Append the button to the navbar
    const navbar = document.querySelector('.navbar');
    navbar.appendChild(toggleBtn);
  });
  
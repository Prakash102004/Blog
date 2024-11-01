// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    
    // Add an event listener to the form submission
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      // Get the input values
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Validate the email and password
      if (validateEmail(email) && validatePassword(password)) {
        // Simulate a successful login
        simulateLogin(email, password);
      } else {
        // Show validation error message
        alert('Please enter a valid email and password.');
      }
    });
  
    // Function to validate the email format using a regular expression
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(email);
    }
  
    // Function to validate the password (simple example: at least 6 characters)
    function validatePassword(password) {
      return password.length >= 6;
    }
  
    // Simulate a login process
    function simulateLogin(email, password) {
      // You could replace this with actual API calls in a real-world scenario
      console.log(`Login successful for email: ${email}`);
  
      // Simulating redirection after login
      alert('Login successful! Redirecting...');
      window.location.href = '/home'; // Redirect to the homepage after login
    }
  });
  
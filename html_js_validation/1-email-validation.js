document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var errorElement = document.getElementById('error');
  
    if (!validateEmail(email)) {
      errorElement.textContent = 'Please enter a valid email address.';
    } else {
      errorElement.textContent = '';
      // You can submit the form here
      // this.submit();
    }
  });
  
  function validateEmail(email) {
    // Regular expression for email validation
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
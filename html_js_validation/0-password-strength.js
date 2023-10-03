document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('error');
  
    if (!validatePassword(password)) {
      errorElement.textContent = 'Password does not meet the criteria.';
    } else {
      errorElement.textContent = '';
      // You can submit the form here
      // this.submit();
    }
  });
  
  function validatePassword(password) {
    // At least 8 characters long
    if (password.length < 8) {
      return false;
    }
  
    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // At least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }
  
    // At least one numeric digit
    if (!/[0-9]/.test(password)) {
      return false;
    }
  
    // At least one special character
    if (!/[!@#$%^&*]/.test(password)) {
      return false;
    }
  
    return true;
  }
  
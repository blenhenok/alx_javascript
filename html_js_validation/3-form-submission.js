document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  if (name === '' || email === '') {
    alert('Please fill in all required fields');
  } else {
    alert('Form submitted successfully!');
    // You can submit the form here
    // this.submit();
  }
}

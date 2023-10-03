document.getElementById('numFields').addEventListener('change', function() {
  generateInputFields(this.value);
});

document.getElementById('dynamicForm').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!validateForm()) {
    document.getElementById('error').textContent = 'Please fill in all fields.';
  } else {
    document.getElementById('error').textContent = '';
    // You can submit the form here
    // this.submit();
  }
});

function generateInputFields(num) {
  var container = document.getElementById('inputContainer');
  container.innerHTML = '';

  for (var i = 0; i < num; i++) {
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'field' + (i + 1);
    input.required = true;
    container.appendChild(input);
  }
}

function validateForm() {
  var inputs = document.getElementById('inputContainer').getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      return false;
    }
  }

  return true;
}
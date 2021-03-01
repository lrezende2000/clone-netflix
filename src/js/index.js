let controller = new LoginController('form');

let emailField = document.getElementById('email');
let passwordField = document.getElementById('password');

controller.form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (controller.validateFields()) {
    window.location = '/src/pages/arealogada.html';
  }

});

[emailField, passwordField].forEach(field => {
  field.addEventListener('focus', () => {
    field.labels[0].classList.add('active');
  });
  
  field.addEventListener('blur', () => {
    if (!field.value) {
      field.labels[0].classList.remove('active');
    }
  });

  field.addEventListener('keyup', () => {
    let span = document.getElementById(`${field.name}-span`);
    if (!controller.validateValue(field.value)) {
      field.classList.add('error');
      span.innerText = controller.getErrorMessage(field.name);
    } else {
      field.classList.remove('error');
      span.innerText = '';
    }
  });
});

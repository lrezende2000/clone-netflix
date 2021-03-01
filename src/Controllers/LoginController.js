class LoginController {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    let values = {};

    [...this.form.elements].forEach(element => {
      if (element.name) {
        values[element.name] = element.value;
      }
    });

    return values;
  }

  validateFields() {
    let values = this.getValues();

    if (this.validateValue(values.email) && this.validateValue(values.password)) {
      return true;
    }

    return false;
  }

  getErrorMessage(field) {
    if (field == 'email') {
      return 'Informe um email ou número de telefone válido.';
    } else if (field == 'password') {
      return 'A senha deve ter entre 4 e 60 caracteres.';
    } else return '';
  }

  validateValue(value) {
    if (value.length >= 4 && value.length <= 60) {
      return true;
    }

    return false;
  }
}
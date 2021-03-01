class Login {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  set email(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set password(password) {
    this.password = password;
  }
}
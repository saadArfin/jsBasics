class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);
/*
Why Use Getters & Setters?
Encapsulation: You control how values are stored/retrieved.
Validation: You can enforce rules (e.g., only valid emails).
Custom Processing: Modify data before returning it.
*/

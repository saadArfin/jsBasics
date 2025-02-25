function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log(this);
  console.log("called");
}

function createUser(username, email, password) {
  this.email = email;
  this.password = password;
  SetUsername.call(this, username);
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
console.log(this);

//call - calls a function with a given this value and arguments provided individually

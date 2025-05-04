class User {
  constructor(userName, email, Password) {
    this.userName = userName;
    this.email = email;
    this.Password = Password;
  }

  encryptPassword() {
    // Simulate password encryption
    return `${this.Password}-encrypted`;
  }

  changeUserName(newUserName) {
    return `${this.userName} changed to "${newUserName}"`;
  }
  changeUserPassword(password) {
    return `${this.Password} changed to ${password}`;
  }
}

const registration = new User("jahid", "jahidjob4@gamil.com", "jahid123000");
const updateUsr = new User(
  registration.userName,
  registration.email,
  registration.Password
);
const changeUserPassword = new User(registration.Password);

console.log(updateUsr.changeUserName("Mohd. Jahidul Islam"));
console.log(changeUserPassword.changeUserName("#########"));

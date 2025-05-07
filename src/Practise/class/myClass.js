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

// console.log(updateUsr.changeUserName("Mohd. Jahidul Islam"));
// console.log(changeUserPassword.changeUserName("#########"));

function Students(name, age, roll) {
  this.name = name;
  this.age = age;
  this.roll = roll;
}

Students.prototype.encryptRoll = function () {
  return `${this.roll}-encrypted Roll`;
};
Students.prototype.changeStudentName = function (newName) {
  return `${this.name} changed to ${newName}`;
};

Students.prototype.updateStudentRoll = function (newRoll) {
  return `${this.roll} to change ${newRoll}`;
};

const student = new Students("Jahid", 23, 101);
const student2 = new Students("Jahid", 23, 9000);

console.log(student.encryptRoll());
console.log(student.changeStudentName("Mohd. Jahidul Islam"));
const updateRoll = student.updateStudentRoll(32);
console.log(updateRoll);
console.log(student2.updateStudentRoll(100));

class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`User Logged: ${this.userName}`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }

  addCourse(courseName) {
    console.log(`Course ${courseName} added by ${this.userName}`);
  }
}

const devCourse = new Teacher("javaScript", "javaScript@js.com", "123456");
devCourse.addCourse("Frontend Development");

const userStudent = new User("Jahidul");
userStudent.logMe();

console.log(devCourse === Teacher); // false
console.log(devCourse instanceof Teacher); // true

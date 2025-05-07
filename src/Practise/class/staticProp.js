class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`User Logged: ${this.userName}`);
  }

  static createId() {
    return `123456`;
  }
}

// const jahid = new User("Jahidul");
// console.log(jahid.createId()); // 123456

class Instructor extends User {
  constructor(userName, email) {
    super(userName);
    this.email = email;
  }
}

const teacher = new Instructor("jahid", "jahid@mail.com");
console.log(teacher.createId()); // User Logged: jahid

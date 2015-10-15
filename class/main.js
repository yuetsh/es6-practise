let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  check() {
    if (this.name === 'xuyue') {
      console.log('He is XuYue and ' + this.age + ' years old.');
    } else {
      console.log("He isn't XuYue");
    }
  }
};

let NewPerson = new Person('xuyue', 23);
NewPerson.check();

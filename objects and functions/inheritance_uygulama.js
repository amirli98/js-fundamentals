let Person = function (name) {
  this.name = name;
};

Person.prototype.introduce = function () {
  console.log("Hello, I'm " + this.name + ".");
};

let Teacher = function (name, branch) {
  Person.call(this, name);
  this.branch = branch;
};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function () {
  console.log("I teach " + this.branch);
};

function Student(name, number) {
  Person.call(this, name);
  this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let p1 = new Person("Fazil");
let t1 = new Teacher("Burcu", "math");

p1.introduce();
t1.introduce();
t1.teach();
let s1 = new Student("Aleyna", 12345634);
s1.introduce();

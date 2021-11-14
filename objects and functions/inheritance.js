let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculate = () => 2021 - this.yearOfBirth;

let Teacher = function (name, yearOfBirth, job, subject) {
  Person.call(this, name, yearOfBirth, job);
  this.subject = subject;
};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

let fazil = new Teacher("Fazil", 1998, "student", "mathematics");
console.log(fazil);

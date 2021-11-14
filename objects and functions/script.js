log = console.log;
let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  return 2021 - this.yearOfBirth;
};

Person.prototype.getName = function () {
  return this.name;
};

let fazil = new Person("Fazil", 1997, "student");
log(fazil.hasOwnProperty("calculateAge"));

log(fazil.getName());

log(fazil.calculateAge());

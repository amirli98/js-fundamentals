class Person {
  constructor(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
  }

  calculateAge() {
    return 2021 - this.yearOfBirth;
  }
}

let fazil = new Person("Fazil", "Student", 1998);

console.log(fazil.calculateAge());

console.log(fazil);

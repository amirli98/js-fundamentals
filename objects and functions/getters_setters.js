const Person = {
  firstName: "John",
  lastName: "Doe",

  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

Object.defineProperty(Person, "age", {
  value: 40,
  writable: false,
});

console.log(Person.firstName);

console.log(Person.lastName);

console.log(Person.age);

Person.age = 90;

console.log(Person.age);

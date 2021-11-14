const Employee = function (name, salary) {
  this.name = name;
  this.salary = salary;
};

Employee.prototype.totalEarnings = function () {
  if (this.salary <= 20_000) {
    return this.salary * 0.8;
  } else if (this.salary <= 30_000) {
    return this.salary * 0.75;
  } else return this.salary * 0.73;
};

employee = new Employee("Fazil", 15000);

console.log(employee.totalEarnings());

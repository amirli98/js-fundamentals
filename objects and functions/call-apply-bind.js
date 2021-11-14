var welcome = function () {
  console.log("hello " + this.name);
};

welcome();

var yigit = { name: "yigit" };

var ada = { name: "ada" };

welcome.call(yigit);
welcome.call(ada);

welcome.apply(yigit);
welcome.apply(ada);

welcomeYigit = welcome.bind(yigit);
welcomeYigit();

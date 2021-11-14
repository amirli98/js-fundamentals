// Demo : Numeric Range

var num = {
  min: 0,
  max: 100,
  checkNumericRange: function (value) {
    if (typeof value !== "number") {
      return false;
    }
    return value >= this.min && value <= this.max;
  },
};

console.log(num.checkNumericRange(55));

var num1 = { min: 50, max: 100 };

console.log(num.checkNumericRange.call(num1, 45));

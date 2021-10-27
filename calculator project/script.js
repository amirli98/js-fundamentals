const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");
let displayValue = "0";

const updateDisplayValue = () => {
  display.value = displayValue;
  console.log(display.value);
};

updateDisplayValue();

keys.addEventListener("click", function (e) {
  const element = e.target;
  console.log(element);
});

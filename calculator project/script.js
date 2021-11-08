const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");
let displayValue = "0";
let firstValue = null;
let operator = null;
let waiting = false;

const updateDisplayValue = () => {
  display.value = displayValue;
  console.log(display.value);
};

updateDisplayValue();

keys.addEventListener("click", function (e) {
  const element = e.target;
  if (!element.matches("button")) return;

  if (element.classList.contains("operator")) {
    //console.log("operator", element.value);

    handleOperator(element.value);
    return;
  }

  if (element.classList.contains("decimal")) {
    //console.log("decimal", element.value);
    inputDecimal(element.value);
    updateDisplayValue();
    return;
  }
  if (element.id === "clear-all") {
    displayValue = "0";
    updateDisplayValue();
    return;
  }

  inputNumber(element.value);
  updateDisplayValue();
});

function handleOperator(nextOperator) {
  const value = parseFloat(displayValue);
  if (firstValue === null) {
    firstValue = value;
  } else if (operator) {
    const result = calculate(firstValue, value, operator);
    displayValue = result;
    updateDisplayValue();
  }
  waiting = true;
  operator = nextOperator;
}

function calculate(firstValue, value, operator) {
  switch (operator) {
    case "+":
      return parseFloat(firstValue) + parseFloat(value);
    case "-":
      return parseFloat(firstValue) - parseFloat(value);
    case "/":
      return parseFloat(firstValue) / parseFloat(value);
    case "%":
      return parseInt(firstValue) % parseInt(value);
    case "//":
      return parseInt(parseInt(firstValue) / parseInt(value));
    case "*":
      return parseFloat(firstValue) * parseFloat(value);
    case "^":
      return parseFloat(firstValue) ** parseFloat(value);
    default:
      return 0;
  }
}

function inputNumber(num) {
  if (waiting) {
    displayValue = num;
    waiting = false;
  } else {
    displayValue = displayValue === "0" ? num : displayValue + num;
  }
  console.log(firstValue, operator, waiting);
}

function inputDecimal() {
  if (!displayValue.includes(".")) displayValue += ".";
}

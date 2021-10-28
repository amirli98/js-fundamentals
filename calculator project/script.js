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
  if (!element.matches("button")) return;

  if (element.classList.contains("operator")) {
    console.log("operator", element.value);
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

function inputNumber(num) {
  displayValue = displayValue === "0" ? num : displayValue + num;
}

function inputDecimal() {
  if (!displayValue.includes(".")) displayValue += ".";
}

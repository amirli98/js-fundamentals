const button = document.querySelector("button");
console.log(button);
const output = document.querySelector("p");

function trackUserHandler() {
  console.log("Clicked");
  alert("Clicked");
}

button.addEventListener("click", trackUserHandler);
let result = 0;
for (let i = 0; i < 1000_000_000; i++) {
  result += i;
}

console.log(result);

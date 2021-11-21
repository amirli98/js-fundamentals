//text
const button = document.querySelector("button");
function getText() {
  fetch("text.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      const newh1 = document.createElement("h1");
      const content = document.createTextNode(data);
      newh1.appendChild(content);
      const currenth1 = document.querySelector(".visible");
      document.body.insertBefore(newh1, currenth1);
      console.log(data);
      return;
    });
}

button.addEventListener("click", getText);

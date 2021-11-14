const word_element = document.getElementById("word");

const alphabet = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map((y) => String.fromCharCode(y));

const wrongLetters_element = document.getElementById("wrong-letters");

const items = document.querySelectorAll(".item");

let wrongLetters = [];
let selectedWord = getRandomWord();
let correctLetters = [];
const popup = document.getElementById("popup-container");
const playAgain = document.querySelector(".play-again");
const message_element = document.getElementById("success-message");
const failure_message = document.getElementById("failure-message");
const failure = document.getElementsByClassName("failure")[0];
function getRandomWord() {
  const words = [
    "javascript",
    "java",
    "python",
    "ruby",
    "coffee",
    "haskell",
    "csharp",
    "sql",
    "typescript",
    "elixir",
    "erlang",
    "css",
    "xml",
    "html",
    "php",
    "fsharp",
    "dotnet",
    "cplusplus",
    "swift",
    "perl",
    "rust",
    "go",
    "dart",
    "apl",
    "cobol",
    "algol",
    "matlab",
    "mathematica",
    "brainfuck",
  ];
  return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
  word_element.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ""}
            </div>
        `
      )
      .join("")}
  `;
  const w = word_element.innerText.replace(/\n/g, "");
  if (w === selectedWord) {
    message_element.innerText = "Congrats, you won!";
    popup.style.display = "flex";
  }
}

function updateWrongLetters() {
  wrongLetters_element.innerHTML = `
  ${wrongLetters.length > 0 ? "<h3>Wrong letters:</h3> <br>" : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
  items.forEach((item, index) => {
    const errorCount = wrongLetters.length;
    if (index < errorCount) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  if (wrongLetters.length === items.length) {
    message_element.innerText = "You lost! Try again!";
    popup.style.display = "flex";
  }
}

window.addEventListener("keydown", function (e) {
  if (alphabet.includes(e.key.toUpperCase())) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        //TODO: You added this letter already!
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLetters();
      } else {
        //TODO: You added this letter before!
      }
    }
  }
});

displayWord();
playAgain.addEventListener("click", (e) => {
  correctLetters = [];
  wrongLetters = [];
  popup.style.display = "none";
  selectedWord = getRandomWord();
  wrongLetters_element.innerHTML = "";
  popup.style.display = "none";
  items.forEach((item) => (item.style.display = "none"));
  displayWord();
});

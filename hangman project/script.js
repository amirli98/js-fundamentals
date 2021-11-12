const word_element = document.getElementById("word");

const correctLetters = ["j", "a"];
const wrong = [];

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
  const selectedWord = getRandomWord();
  word_element.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
            <div class="letter">
                ${letter}
            </div>
        `
      )
      .join("")}
  `;
}

displayWord();

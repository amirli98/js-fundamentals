function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isFinished = function () {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function (answer) {
  var question = this.getQuestion();
  if (question.checkAnswer(answer)) {
    this.score += 1;
  }
  this.questionIndex += 1;
};

var q1 = new Question(
  "What's the best programming language?",
  ["JavaScript", "Python", "Asp.net", "Java"],
  "Python"
);
var q2 = new Question(
  "What's the most popular programming language?",
  ["C#", "C++", "JavaScript", "Java"],
  "JavaScript"
);
var q3 = new Question(
  "What's the best modern programming language?",
  ["Go", "Dart", "Pascal", "Java"],
  "Go"
);

var questions = new Array(q1, q2, q3);

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
  if (quiz.isFinished()) {
    showScore();
  } else {
    var question = quiz.getQuestion();
    var choices = question.choices;
    document.querySelector("#question").textContent = question.text;

    for (let i = 0; i < choices.length; i++) {
      document.querySelector(`#choice${i}`).textContent = choices[i];
      guess(i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guessValue) {
  let btn = document.querySelector(`#btn${id}`);
  btn.onclick = (e) => {
    e.preventDefault();
    quiz.guess(guessValue);
    loadQuestion();
  };
}

function showScore() {
  var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
  document.querySelector(".card-body").innerHTML = html;
}

function showProgress() {
  var totalQuestions = quiz.questions.length;
  var questionNumber = quiz.questionIndex + 1;
  document.getElementById("progress").innerHTML =
    "Question " + questionNumber + " of " + totalQuestions;
}

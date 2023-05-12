"use strict";
const scoreEl = document.getElementById("score");
const question = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
//

//
const num1 = Math.ceil(Math.random() * 15);
const num2 = Math.ceil(Math.random() * 10);
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

//
const correctAnswer = num1 * num2;
question.textContent = `What is ${num1} multiply ${num2}`;
scoreEl.textContent = `score: ${score}`;

//////
formEl.addEventListener("submit", () => {
  const userAnswer = Number(inputEl.value);

  if (userAnswer === correctAnswer) {
    score++;
    upLocalStorage();
  } else {
    score--;
    upLocalStorage();
  }
});

function upLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

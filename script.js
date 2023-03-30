"use strict";

let targetNumber = Math.round(Math.random() * 101) + 1;
let score = 11;
let highScore = 0;

document.querySelector(".check").onclick = () => {
  let guessedNumber = Number(document.querySelector(".guess").value);
  let message;
  let bgColor;

  if (score > 0) {
    if (guessedNumber !== targetNumber) {
      message = guessedNumber > targetNumber ? "Too High" : "Too Low";
      bgColor = guessedNumber > targetNumber ? "blue" : "purple";
      score--;
    } else {
      message = "🎉 Correct Guess";
      document.querySelector(".number").textContent = targetNumber;
      if (score > highScore) {
        highScore = score;
      }
      bgColor = "green";
    }
  }
  if (score <= 0) {
    message = "Game Over!!!!";
    bgColor = "red";
  }

  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".message").textContent = message;
  document.querySelector("body").style.backgroundColor = bgColor;
};

document.querySelector(".again").onclick = () => {
  document.querySelector(".score").textContent = "11";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = 0;
  score = 11;
};

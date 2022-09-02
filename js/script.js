// //Домашнее задание № 17
"use strict";

let currentPlayer = "o";
let winner = false;
const cells = document.querySelectorAll(".cell");
const resultContainer = document.querySelector(".result_game_container");
resultContainer.setAttribute("hidden", "hidden");
const restart = document.querySelector(".restart");
const counter = document.querySelector(".counter_container");
let draw = 0;
function changeTurn() {
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
}

function whoWin() {
  if (
    (cells[0].textContent === "x" &&
      cells[1].textContent === "x" &&
      cells[2].textContent === "x") ||
    (cells[3].textContent === "x" &&
      cells[4].textContent === "x" &&
      cells[5].textContent === "x") ||
    (cells[6].textContent === "x" &&
      cells[7].textContent === "x" &&
      cells[8].textContent === "x") ||
    (cells[0].textContent === "x" &&
      cells[3].textContent === "x" &&
      cells[6].textContent === "x") ||
    (cells[1].textContent === "x" &&
      cells[4].textContent === "x" &&
      cells[7].textContent === "x") ||
    (cells[2].textContent === "x" &&
      cells[5].textContent === "x" &&
      cells[8].textContent === "x") ||
    (cells[0].textContent === "x" &&
      cells[4].textContent === "x" &&
      cells[8].textContent === "x") ||
    (cells[2].textContent === "x" &&
      cells[4].textContent === "x" &&
      cells[6].textContent === "x")
  ) {
    resultContainer.hidden = false;
    resultContainer.innerHTML = `${currentPlayer} wins!`;
    winner = true;
  }

  if (
    (cells[0].textContent === "o" &&
      cells[1].textContent === "o" &&
      cells[2].textContent === "o") ||
    (cells[3].textContent === "o" &&
      cells[4].textContent === "o" &&
      cells[5].textContent === "o") ||
    (cells[6].textContent === "o" &&
      cells[7].textContent === "o" &&
      cells[8].textContent === "o") ||
    (cells[0].textContent === "o" &&
      cells[3].textContent === "o" &&
      cells[6].textContent === "o") ||
    (cells[1].textContent === "o" &&
      cells[4].textContent === "o" &&
      cells[7].textContent === "o") ||
    (cells[2].textContent === "o" &&
      cells[5].textContent === "o" &&
      cells[8].textContent === "o") ||
    (cells[0].textContent === "o" &&
      cells[4].textContent === "o" &&
      cells[8].textContent === "o") ||
    (cells[2].textContent === "o" &&
      cells[4].textContent === "o" &&
      cells[6].textContent === "o")
  ) {
    resultContainer.hidden = false;
    resultContainer.innerHTML = `${currentPlayer} wins!`;
    winner = true;
  }
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!winner) {
      if (cell.innerHTML === "") {
        counter.innerHTML = `${currentPlayer} turn`;

        changeTurn();
        cell.innerHTML = currentPlayer;
        draw++;
      } else return;
      whoWin();
    } else return;

    if (draw === 9) {
      resultContainer.hidden = false;
      resultContainer.innerHTML = `Draw`;
    }
  });
});

restart.addEventListener("click", () => {
  winner = false;
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  resultContainer.hidden = true;
  draw = 0;
});

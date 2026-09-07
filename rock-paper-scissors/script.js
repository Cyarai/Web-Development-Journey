const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

const p1_choice = document.querySelector("#player1_choice");

const p2_choice = document.querySelector("#player2_choice");

const submit = document.querySelector("#submit");

const score = document.querySelector("#score");

const reset = document.querySelector("#reset");

let player1Score = 0;
let computerScore = 0;

buttonRock.addEventListener("click", function () {
  const rock = document.getElementById("player1_choice");
  rock.textContent = "🪨";
});

buttonPaper.addEventListener("click", function () {
  const paper = document.getElementById("player1_choice");
  paper.textContent = "📃";
});

buttonScissors.addEventListener("click", function () {
  const scissors = document.getElementById("player1_choice");
  scissors.textContent = "✂️";
});

const computerChoice = function () {
  let choices = Math.floor(Math.random() * 3) + 1;

  if (choices === 1) {
    return "🪨";
  } else if (choices === 2) {
    return "📃";
  } else {
    return "✂️";
  }
};

p2_choice.textContent = "❔";

const compare = function (p1_choice, p2_choice) {
  if (p1_choice === p2_choice) {
    return "draw";
  } else if (
    (p1_choice === "🪨" && p2_choice === "✂️") ||
    (p1_choice === "📃" && p2_choice === "🪨") ||
    (p1_choice === "✂️" && p2_choice === "📃")
  ) {
    player1Score++;
    return "Player 1 Win!";
  } else {
    computerScore++;
    return "Player 2 Win!";
  }
};
submit.addEventListener("click", function () {
  if (p1_choice.textContent === "❔" || p1_choice.textContent === "") {
    return;
  }

  const computer = computerChoice();
  p2_choice.textContent = computer;

  const player1 = p1_choice.textContent;

  compare(player1, computer);

  score.textContent = ` ${player1Score} - ${computerScore}`;

  if (player1Score === 3 || computerScore === 3) {
    if (player1Score === 3) {
      score.innerHTML = `Player 1 Win <br> ${player1Score} - ${computerScore}`;
    } else {
      score.innerHTML = `Player 2 Win <br> ${player1Score} - ${computerScore}`;
    }
    submit.disabled = true;
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;

    return;
  }

  setTimeout(function () {
    p1_choice.textContent = "❔";
    p2_choice.textContent = "❔";
  }, 1000);
});

reset.addEventListener("click", function () {
  player1Score = 0;
  computerScore = 0;
  p1_choice.textContent = "❔";
  p2_choice.textContent = "❔";
  score.textContent = "0 - 0";
  submit.disabled = false;
  buttonRock.disabled = false;
  buttonPaper.disabled = false;
  buttonScissors.disabled = false;
});

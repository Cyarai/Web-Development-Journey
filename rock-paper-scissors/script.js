let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let choices = Math.floor(Math.random() * 3) + 1;

  if (choices === 1) {
    return "rock";
  } else if (choices === 2) {
    return "paper";
  } else if (choices === 3) {
    return "scissors";
  } else {
    return "Invalid input";
  }
}

function getHumanChoice() {
  let user_choice = prompt("Enter your choice: ").toLowerCase();

  if (user_choice === "rock") {
    return "rock";
  } else if (user_choice === "paper") {
    return "paper";
  } else if (user_choice === "scissors") {
    return "scissors";
  } else {
    return "Invalid input";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You Win! Rock beat Scissors!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You Win! Rock beat Scissors!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You Win! Rock beat Scissors!";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    return "You Win! Rock beat Scissors!";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    return "You Win! Rock beat Scissors!";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    return "You Win! Rock beat Scissors!";
  } else {
    return "Invalid";
  }
}
for (i = 0; i < 5; i++) {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  console.log("You chose:", humanSelection);
  console.log("Computer chose:", computerSelection);

  playRound(humanSelection, computerSelection);

  console.log("Human Score: ", humanScore);
  console.log("Computer Score: ", computerScore);
}

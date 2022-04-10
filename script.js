function computerPlay() {
  switch(Math.floor(Math.random() * 3)) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

function userPlay() {
  const userInput = prompt("Enter your move!").toLowerCase();
  return userInput.charAt(0).toUpperCase() + userInput.slice(1);
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === "Rock" && computerSelection === "Scissors"
    || playerSelection === "Paper" && computerSelection === "Rock"
    || playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! " + playerSelection + " beats " + computerSelection; 
  }
  else if(playerSelection === "Rock" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! " + computerSelection + " beats " + playerSelection; 
  }
  return "Tie!";
}
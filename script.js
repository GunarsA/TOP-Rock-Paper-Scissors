function computerPlay() {
  switch(Math.floor(Math.random() * 3)) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

function userPlay() {
  let userInput = prompt("Enter your move!");
  if(userInput === null) {
    return userInput;
  }
  userInput = userInput.charAt(0).toUpperCase() +
      userInput.slice(1).toLowerCase();

  while(userInput !== "Rock" && userInput !== "Paper" &&
      userInput !== "Scissors") {
    userInput = prompt("Unrecognized move, enter again!");
    if(userInput === null) {
      return userInput;
    }
    userInput = userInput.charAt(0).toUpperCase() + 
        userInput.slice(1).toLowerCase();
  }

  return userInput;
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === null){
    return playerSelection;
  }
  if(playerSelection === "Rock" && computerSelection === "Scissors" ||
      playerSelection === "Paper" && computerSelection === "Rock" ||
      playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! " + playerSelection + " beats " + computerSelection; 
  }
  else if(playerSelection === "Rock" && computerSelection === "Paper" || 
      playerSelection === "Paper" && computerSelection === "Scissors" ||
      playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! " + computerSelection + " beats " + playerSelection; 
  }
  return "Tie!";
}

function game(winningScore = 3) {
  let playerScore = 0;
  let computerScore = 0;
  alert(`First to ${winningScore} wins!`);
  
  while(playerScore < winningScore && computerScore < winningScore) {
    const roundResult = playRound(userPlay(), computerPlay());
    if(roundResult === null){
      alert("GAME CANCELED!");
      return;
    }

    if(roundResult.length !== 4) {
        if(roundResult.charAt(4) === 'W') {
          playerScore++;
        }
        else {
          computerScore++;
        }
    }

    alert(`${roundResult}\nYou ${playerScore} : ${computerScore} Computer`);
  }

  alert((playerScore === winningScore) ? "YOU WIN THE GAME!" :
      "YOU LOSE THE GAME!");
  return;
}

game();
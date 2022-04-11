function computerPlay() {
  switch(Math.floor(Math.random() * 3)) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

function playRound() {
  const computerSelection = computerPlay();
  console.log(this.id);
  console.log(computerSelection);
  if(this.id === "rock" && computerSelection === "Scissors" ||
      this.id === "paper" && computerSelection === "Rock" ||
      this.id === "scissors" && computerSelection === "Paper") {
    gameScore.textContent = "You Win! " + (this.id.charAt(0).toUpperCase() + 
        this.id.slice(1)) + " beats " + computerSelection;
    return;
  }
  else if(this.id === "rock" && computerSelection === "Paper" || 
      this.id === "paper" && computerSelection === "Scissors" ||
      this.id === "scissors" && computerSelection === "Rock") {
    gameScore.textContent = "You Lose! " + computerSelection + " beats " +
        (this.id.charAt(0).toUpperCase() + this.id.slice(1)); 
    return;
  }
  gameScore.textContent = "Tie!";
}

function game(winningScore = 3) {
  let playerScore = 0;
  let computerScore = 0;
  const gameScore = document.querySelector('#gameScore');
  const gameControl = document.querySelectorAll('button');

  gameScore.textContent = `First to ${winningScore} wins!`;
  
  gameControl.forEach(button => button.addEventListener('click', playRound));

  return
}

game();
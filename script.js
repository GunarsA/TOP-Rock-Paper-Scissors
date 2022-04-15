function computerPlay() {
  switch(Math.floor(Math.random() * 3)) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";  
  }
}

function game(winningScore = 3) {

  function playRound() {
    if(playerScore >= winningScore || computerScore >= winningScore) {
      gameScore.textContent = (playerScore >= 3 ? "YOU WIN THE GAME!" : "YOU LOSE THE GAME!");
      gameControl.forEach(button => button.removeEventListener('click', playRound));
      return;
    }
    const computerSelection = computerPlay();

    if(this.id === "rock" && computerSelection === "Scissors" ||
        this.id === "paper" && computerSelection === "Rock" ||
        this.id === "scissors" && computerSelection === "Paper") {
      playerScore++;
      gameScore.textContent = "You Win! " + (this.id.charAt(0).toUpperCase() + 
          this.id.slice(1)) + " beats " + computerSelection + " - Player " + 
          playerScore + " : " + computerScore + " Computer";
      return;
    }
    if(this.id === "rock" && computerSelection === "Paper" || 
        this.id === "paper" && computerSelection === "Scissors" ||
        this.id === "scissors" && computerSelection === "Rock") {
      computerScore++;
      gameScore.textContent = "You Lose! " + computerSelection + " beats " +
          (this.id.charAt(0).toUpperCase() + this.id.slice(1)) + " - Player " + 
          playerScore + " : " + computerScore + " Computer"; 
      return;
    }
    gameScore.textContent = "Tie!" + " - Player " + 
    playerScore + " : " + computerScore + " Computer";

    return;
  }

  let playerScore = 0;
  let computerScore = 0;
  const gameScore = document.querySelector('#gameScore');
  const gameControl = document.querySelectorAll('button');

  gameScore.textContent = `First to ${winningScore} wins!`;
  
  gameControl.forEach(button => button.addEventListener('click', playRound));

  return
}

game();
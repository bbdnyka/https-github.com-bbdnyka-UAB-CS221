
//Deciding a winner : scissors beats paper, rock beats scissors, paper beats rock

let rock; 
let paper;
let scissors;

function computerPlay(){
  const computerOpt = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random()*computerOpt.length);
  return(random, computerOpt[random]);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } 
  else {
    return "You lose!";
  }
}

function game() {
  //variables increment based on decided winner of each round
  let playerScore = 0; 
  let computerScore = 0;

  for (let i = 0; i < 3; i++) {// for loop manages how many rounds each game has. Choices a taken in succession(one after the other) and scores are calculated at the end
    //const playerSelection = prompt("Enter Rock, Paper, or Scissors: ", 'Enter here');
    const computerSelection = computerPlay();//variable holds random element chosen from computerPlayer() from an array of ['rock','paper','scissors'] 
    console.log(playRound(playerSelection, computerSelection)); //function call for checking playerSelection against computerSelection

    //gets winner from function call and adds to either playerScore or computerScore
    if (playRound(playerSelection, computerSelection).includes("win")) {
      playerScore++;
    } else if (playRound(playerSelection, computerSelection).includes("lose")) {
      computerScore++;
    }

    //Outputs the player's and computer's plays and respective scores
    console.log(`Player entered: ${playerSelection}. Player  Score: ${playerScore}`);
    console.log(`Computer entered: ${computerSelection}. Computer Score: ${computerScore}`);
  }

  //decides winner based on integer increments to playerScore and computerScore
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

//function call for running game loop
game();

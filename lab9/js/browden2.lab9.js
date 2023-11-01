//Deciding a winner : scissors beats paper, rock beats scissors, paper beats rock
//Reload browser to play again

//Chooses a random play for computer
function computerPlay() {
  const computerOpt = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * computerOpt.length);
  return random, computerOpt[random];
}
//error handling
function playersPlay() {
  //player enters choice here
  let playerSelection = prompt('Enter Rock, Paper, or Scissors: ');

  if (userInput === null) {
    // User clicked "Cancel" or pressed "Esc"
    alert("You canceled the input.");
} else {
    // User entered some input
    playerSelection == playerSelection.toLowerCase();
}
    

  while(
    playerSelection != 'rock' &&
    playerSelection != 'paper' &&
    playerSelection != 'scissors'
    ){
      if(playerSelection == 'Cancel'){
        break;
      }
      playerSelection = prompt('Enter Rock, Paper, or Scissors: ');
    }
  return playerSelection;
}

//Decides the winner of each round. Function called in game()
function playRound(playerSelection, computerSelection) {
  

  //statement for deciding winner of each round
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function game() {
  //variables increment based on decided winner of each round
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 1; i++) {
    // for loop manages how many rounds each game has. Choices a taken in succession(one after the other) and scores are calculated at the end

    const playerSelection = playersPlay(); //calls function to get players answer
    const computerSelection = computerPlay(); //variable holds random element chosen from computerPlayer()

    //increases playerScore or computerScores based on decision from playRound()
    playRound(playerSelection, computerSelection);

    if (playRound(playerSelection, computerSelection).includes('win')) {
      playerScore++;
    } else if (playRound(playerSelection, computerSelection).includes('lose')) {
      computerScore++;
    }
    //Outputs the player's and computer's plays and respective scores
    console.log('Player entered: ' + playerSelection);
    console.log('Computer entered: ' + computerSelection);
  }

  //decides final winner based on playerScore and computerScore
  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else if (computerScore > playerScore) {
    console.log('Computer wins the game!');
  } else {
    console.log("It's a tie game!");
  }
}

//function call for running game loop
game();

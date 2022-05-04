console.log("Hello World!");

const choices = ['rock', 'paper', 'scissors'];
const youLose = "You lose! "
const youWin = "You Win! "
const tie = "It's a tie! "
const paperWin = "Paper beats Rock!"
const rockWin = "Rock beats Scissors!"
const scissorsWin = "Scissors beat Paper!"
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    const choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
};

function playRound(playerSelection,computerSelection) {
    switch(playerSelection) {
        case 'rock':
                switch(computerSelection) {
                    case 'rock':
                        console.log(tie + "\n" + playerScore + " vs " + computerScore);
                        break;
        
                    case 'paper':
                        computerScore++;
                        console.log(youLose.concat(paperWin) + "\n" + playerScore + " vs " + computerScore);
                        break;

                    case 'scissors':
                        playerScore++;
                        console.log(youWin.concat(rockWin) + "\n" + playerScore + " vs " + computerScore);
                        break;
                }
            break;
        
        case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        playerScore++;
                        console.log(youWin.concat(paperWin) + "\n" + playerScore + " vs " + computerScore);
                        break;
        
                    case 'paper':
                        console.log(tie + "\n" + playerScore + " vs " + computerScore);
                        break;

                    case 'scissors':
                        computerScore++;
                        console.log(youLose.concat(scissorsWin) + "\n" + playerScore + " vs " + computerScore);
                        break;
                }
            break;

        case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        computerScore++;
                        console.log(youLose.concat(rockWin) + "\n" + playerScore + " vs " + computerScore);
                        break;
        
                    case 'paper':
                        playerScore++;
                        console.log(youWin.concat(scissorsWin) + "\n" + playerScore + " vs " + computerScore);
                        break;

                    case 'scissors':
                        console.log(tie + "\n" + playerScore + " vs " + computerScore);
                        break;
                }
            break;

        default:
            return "Please enter a valid choice."
    }
}

function rps(rounds) {
    playerScore = 0;
    computerScore = 0;

    for (i=0;i<rounds;i++){
        console.log("Round " + (1+i))

        let playerSelection = prompt("Make a choice between Rock, Paper, and Scissors", "Rock");
        const computerSelection = computerPlay();

        if (playerSelection != null) {
            playerSelection = playerSelection.toLowerCase();
            console.log(playRound(playerSelection, computerSelection));
        } else {
            playerSelection = prompt("Please enter a valid choice.");
            if (playerSelection == null) {
                return "You have decided not to play."
            } else {
                playerSelection = playerSelection.toLowerCase();
                console.log(playRound(playerSelection, computerSelection));
            }
        }

    }
    
    if (playerScore > computerScore) {
        return "You won THE GAME!";
    } else if (computerScore > playerScore) {
        return "You lost THE GAME!";
    } else {
        return "THE GAME was inconclusive."
    }

    console.log("\nFinal Score");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);

}

// game(1);


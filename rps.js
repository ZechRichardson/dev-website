console.log("Hello World!");
console.log("If you want like to play Rock, Paper, Scissors, \nyou can begin a game by typing rps(#), \nwith # being the number of rounds you would like to play.");

const choices = ['rock', 'paper', 'scissors'];
const youLose = "You lost this round! "
const youWin = "You won this round! "
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
                        console.log(tie + "\n" + "Score: " + playerScore + " to " + computerScore);
                        break;
                    case 'paper':
                        computerScore++;
                        console.log(youLose.concat(paperWin) + "\n" + "Score: " + playerScore + " to " + computerScore);
                        break;
                    case 'scissors':
                        playerScore++;
                        console.log(youWin.concat(rockWin) + "\n" + "Score: " + playerScore + " to " + computerScore);
                        break;
                }
            break;
        case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        playerScore++;
                        console.log(youWin.concat(paperWin) + "\n" + "Score: " + playerScore + " to " + computerScore);
                        break;
                    case 'paper':
                        console.log(tie + "\n" + "Score: " + playerScore + " to " + computerScore);
                        break;
                    case 'scissors':
                        computerScore++;
                        console.log(youLose.concat(scissorsWin) + "\n" + "Score: " + playerScore + " to " + computerScore);
                        break;
                }
            break;
        case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        computerScore++;
                        console.log(youLose.concat(rockWin) + "\n" + "Score: " + playerScore + " to " + computerScore);
                        break;
                    case 'paper':
                        playerScore++;
                        console.log(youWin.concat(scissorsWin) + "\n" + "Score: " + playerScore + " to " + computerScore);
                        break;
                    case 'scissors':
                        console.log(tie + "\n" + "Score: " + playerScore + " to " + computerScore);
                        break;
                }
            break;
        default:
            return "You did not enter a valid choice."
    }
}

function rps(rounds) {
    playerScore = 0;
    computerScore = 0;

    for (i=0;i<rounds;i++){
        console.log("Round " + (1+i))

        let playerSelection = prompt("Make a choice between Rock, Paper, and Scissors", "Rock");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();

        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            console.log(playRound(playerSelection, computerSelection));
        } else {
            playerSelection = prompt("Please enter a valid choice.");
            if (playerSelection == "") {
                return "You have decided not to play."
            } else {
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

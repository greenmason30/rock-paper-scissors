
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3); // 0, 1, or 2
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
      }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice)
        return "It's a draw!";
    else if (((humanChoice == "rock") && (computerChoice == "scissors"))
            || (humanChoice == "paper") && (computerChoice == "rock")
            || (humanChoice == "scissors") && (computerChoice == "paper")) {
                humanScore++;
                return `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;

            }
    else {
        computerScore++;
        return `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
    }
}

function playGame() {
    let numGames = 5;
    for (let i = 0; i < numGames; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("Current Score:");
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }
}


let humanScore = 0;
let computerScore = 0;

playGame()
// console.log(playRound(getHumanChoice(), getComputerChoice()));
// console.log(getComputerChoice())
// console.log(getHumanChoice())
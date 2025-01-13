
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

// function playGame() {
//     // let numGames = 5;
//     // for (let i = 0; i < numGames; i++) {
//     console.log(playRound(getHumanChoice(), getComputerChoice()));
//     console.log("Current Score:");
//     console.log("Human: " + humanScore);
//     console.log("Computer: " + computerScore);
//     // }
// }


let humanScore = 0;
let computerScore = 0;

// playGame()

const choices = document.querySelector(".choices");
const resultsDiv = document.querySelector(".results");
const result = document.createElement("p");
result.innerHTML = `Current Score:<br>Human: ${humanScore}<br>Computer: ${computerScore}`;
resultsDiv.appendChild(result);
const gameOver = document.createElement("p");
resultsDiv.appendChild(gameOver);


function handleChoices(e) {
    let humanChoice = e.target.id;

    console.log(playRound(humanChoice, getComputerChoice()));
    console.log("Current Score:");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
    result.innerHTML = `Current Score:<br>Human: ${humanScore}<br>Computer: ${computerScore}`;
    gameOver.textContent = ``;

    if ((humanScore == 5) || (computerScore) == 5) {
        if (humanScore > computerScore) 
            gameOver.textContent = `Game over! You won!`;
        else
            gameOver.textContent = `Game over! Computer won!`;

        humanScore = 0;
        computerScore = 0;
        
    }

}

choices.addEventListener("click", handleChoices);
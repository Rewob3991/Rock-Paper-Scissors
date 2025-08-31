// Create variable to contain rock paper scissor buttons
const choices = ["rock", "paper", "scissors"]

const rockButton = document.querySelector("#rock");
rockButton.onclick = () => playRound("rock");

const paperButton = document.querySelector("#paper");
paperButton.onclick = () =>  playRound("paper");

const scissorsButton = document.querySelector("#scissors");
scissorsButton.onclick = () => playRound("scissors");

const userDisplay = document.getElementById("userChoice");

const computerDisply = document.getElementById("computerChoice");

const resultDisplay = document.getElementById("roundResult")

// Create variable to get computer choice
// Create function to compare choices then determine winner.
function playRound(userChoice) {
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "Its a draw!";
    } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")) { 
        result = "You win!"
    } else {
        result = "You lose!";
    }


userDisplay.textContent = `You chose - ${userChoice}!`;
computerDisply.textContent = `The computer chose - ${computerChoice}!`;
resultDisplay.textContent = `${result}`

};



// Create variable to contain rock paper scissor buttons
const choices = ["Rock", "Paper", "Scissors"];
let round = 0;
let computerScore = 0;
let userScore = 0;

const rockButton = document.querySelector("#rock");
rockButton.onclick = () => playGame("Rock");

const paperButton = document.querySelector("#paper");
paperButton.onclick = () =>  playGame("Paper");

const scissorsButton = document.querySelector("#scissors");
scissorsButton.onclick = () => playGame("Scissors");

const userDisplay = document.getElementById("userChoice");

const computerDisply = document.getElementById("computerChoice");

const resultDisplay = document.getElementById("roundResult")

const roundDisplay = document.getElementById("round")

const scoreDisplay = document.getElementById("score")

const gameResultDisplay = document.getElementById("gameResult")

const playAgain = document.getElementById("playAgain");
const playAgainButton = document.createElement("button");
playAgainButton.textContent = "Play again?";
playAgainButton.classList.add("playAgain")
playAgainButton.addEventListener("click", function () {

    round = 0;
    computerScore = 0;
    userScore = 0;
    userDisplay.textContent = "";
    computerDisply.textContent = "";
    resultDisplay.textContent = "";
    roundDisplay.textContent = "";
    scoreDisplay.textContent = "";
    gameResultDisplay.textContent = "";
    playAgain.removeChild(playAgainButton);
    gameResultDisplay.classList.remove("greenText", "redText", "blueText");

}) 


// Create variable to get computer choice
// Create function to compare choices then determine winner.

function checkScore() {
    
    

    if (userScore > computerScore && round == 5) {
        gameResultDisplay.textContent = "You won!";
        gameResultDisplay.classList.add("greenText");
        playAgain.appendChild(playAgainButton);
    } else if (userScore < computerScore && round == 5) {
        gameResultDisplay.textContent = "You lost!";
        gameResultDisplay.classList.add("redText");
        playAgain.appendChild(playAgainButton);
    } else if (userScore === computerScore && round == 5) {
        gameResultDisplay.textContent = "It's a draw!";
        gameResultDisplay.classList.add("blueText");
        playAgain.appendChild(playAgainButton);
    };
     
}

function playGame(userChoice) {


    if (round < 5) {
        playRound(userChoice)
    };


        function playRound(userChoice) {
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            let result = "";
            round++

            if (userChoice === computerChoice) {
                result = "The round is a draw!";
            } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")) { 
                userScore++; result = "You win this round!"
            } else {
            computerScore++; result = "You lose this round!";
            }
            checkScore();


userDisplay.textContent = `You chose - ${userChoice}!`;
computerDisply.textContent = `The computer chose - ${computerChoice}!`;
resultDisplay.textContent = `${result}`
roundDisplay.textContent = `ROUND - ${round} of 5`
scoreDisplay.textContent = `Your score - ${userScore} / Computers score - ${computerScore}`

}
};

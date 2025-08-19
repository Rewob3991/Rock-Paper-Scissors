console.log("Hello World")

// Write code to return number betweem 1 - 3
// Assign rock, paper, sciccors to individual number




function getComputerChoice() {
   const randomNum = Math.floor(Math.random() * 3) + 1; 

    if (randomNum === 1) {
        return "The computer chose ROCK";
    } else if (randomNum === 2) {
       return "The computer chose PAPER";
    } else  {
       return "The computer chose SCISSORS";
    }

}


function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toUpperCase()

    if (userChoice === "ROCK" && computerChoice === "The computer chose ROCK") {
        return "Its a draw!"
    } else if (userChoice === "ROCK" && computerChoice === "The computer chose PAPER") {
        return "You lose!"
    } else if (userChoice === "ROCK" && computerChoice === "The computer chose SCISSORS") {
        return "You win!"
    } else if (userChoice === "PAPER" && computerChoice === "The computer chose ROCK") {
        return "You Win!"
    } else if (userChoice === "PAPER" && computerChoice === "The computer chose PAPER") {
        return "Its a draw!"
    } else if (userChoice === "PAPER" && computerChoice === "The computer chose SCISSORS") {
        return "You lose!"
    } else if (userChoice === "SCISSORS" && computerChoice === "The computer chose ROCK") {
        return "You lose!"
    } else if (userChoice === "SCISSORS" && computerChoice === "The computer chose PAPER") {
        return "You win!"
    } else if (userChoice === "SCISSORS" && computerChoice === "The computer chose SCISSORS") {
        return "Its a draw!"
    } else {
        return "Thats not an option, pick again!"
    }

}




const userChoice = prompt("ROCK, PAPER OR SCISSORS!?")
const computerChoice = getComputerChoice()

// create variables for computer score & human score
// write code to increment winners score

const userScore = 0  

const computerScore = 0

function roundResult() {

    if (playRound === "You win!") {
        userScore++; 
    } else if (playRound === "You lose!") {
        computerScore++;
    } return "Your score - " + userScore + "Computer score - " + computerScore
}



console.log("You picked " + userChoice.toUpperCase())
console.log(computerChoice)
console.log(playRound(userChoice, computerChoice))
console.log(roundResult())
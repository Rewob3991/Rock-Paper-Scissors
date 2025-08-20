console.log("Hello World")

// Write code to return number betweem 1 - 3
// Assign rock, paper, sciccors to individual number



function getComputerChoice() {
   const randomNum = Math.floor(Math.random() * 3) + 1; 

    if (randomNum === 1) {
        return "ROCK";
    } else if (randomNum === 2) {
       return "PAPER";
    } else  {
       return "SCISSORS";
    }

}


function getUserChoice () {
    return prompt("ROCK, PAPER OR SCISSORS!?")

}

//create function to decide winnner

    let userScore = 0  
    let computerScore = 0
    let round = 1

    function checkWinner(userChoice, computerChoice) {
    

       


    if (userChoice == computerChoice) {
        return "Draw"
    } else if (
        (userChoice == "ROCK" && computerChoice == "SCISSORS") || 
        (userChoice == "SCISSORS" && computerChoice == "PAPER") ||
        (userChoice == "PAPER" && computerChoice == "ROCK")) {
        return "Player"
    } else {
        return "Computer"
    }



    }  
 
 //create function to start the game
 //increment score depedning on winnner
 //end game once round reaches 5   

    function playGame () {
        
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice().toUpperCase();
        console.log("Round " + round);
        console.log("You picked " + userChoice);
        console.log("The computer chose " + computerChoice);

        function playRound(userChoice, computerChoice) { 
        const result = checkWinner(userChoice, computerChoice);
        if (result == "Draw") {
           round++; return `Its a Draw! User score - ${userScore}` + ` Computer score - ${computerScore}`;
        } else if (result == "Player") {
            round++; userScore++; return `You win! ${userChoice} beats ${computerChoice}. User score - ${userScore}` + ` Computer score - ${computerScore}`;
        } else {
            round++; computerScore++; return `You lose! ${computerChoice} beats ${userChoice}. User score - ${userScore}` + ` Computer score - ${computerScore}`;
        }
    }


    console.log(playRound(userChoice, computerChoice));
    console.log(scoreCheck());
    } 
    
    function scoreCheck() {
    if (round < 6) {
       playGame();
    } else if (round == 6 && userScore > computerScore) {
        return "You win the game!"; 
    } else if (round == 6 && userScore < computerScore) {
        return "You lost the game!";
    } else if (round == 6 && userScore == computerScore) {
        return "The game is a draw!";
    }

    }
    




console.log(playGame())

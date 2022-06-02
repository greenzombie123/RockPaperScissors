let playerScore = 0;
    let computerScore = 0;
    let round;

function computerPlay(){
    const random = Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    }
}

function decideWinner(computerSelection, playerSelection){
    if(
        computerSelection === "paper" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "rock" ||
        computerSelection === "rock" && playerSelection === "paper"    
    ){
        playerScore++;
        alert("You won this round!" + `You: ${playerScore} Computer: ${computerScore}`);
    }
    else if(
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"   
    ){
        computerScore++;
        alert("The computer won this round!" + ` You: ${playerScore} Computer: ${computerScore}`);
    }
    else
        alert("There was a tie" + ` You: ${playerScore} Computer: ${computerScore}`);
}

function makeChoice(){
    const choice = prompt(`Round ${round}: Choose 'rock', 'paper', or 'scissors'`).toLowerCase();
    if (choice === "scissors" || choice === "rock" || choice === "paper") {
        return choice;   
    }
    else
        alert("Wrong choice! Try again");
        makeChoice();
}

function playRound(){
    decideWinner(computerPlay(), makeChoice());
}


function game(){

    

    for (round = 1; round < 6; round++) {
        playRound();
    }
    alert((playerScore > computerScore ? "You won the set! Congratulations!" 
    : playerScore < computerScore ? "You lost the set! Loser!" 
    : "No winner this set! Wow!"));

    computerScore = 0;
    playerScore = 0;
    round = 0;

    const answer = prompt("Play again?").toLowerCase();
    if(answer === "yes"){
        game();
    }
}
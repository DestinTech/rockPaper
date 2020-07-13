document.write("hello world! press F12 on your keyboard to access the console, to play rock paper scissors!");


let computerPlay = () =>{ //return rock, paper, or scissors
    let randNo = Math.random();
    let randomMove;
    console.log(randNo);
    if(randNo <= .333){
        randomMove = "rock";
    }
    else if (randNo <= .666){
        randomMove = "paper";
    }
    else {
        randomMove = "scissors";
    }
    return randomMove;
}

let playGame = (playerSelection, computerSelection) => {
    //rock beats scissors
    let loser = "lose";
    let winner ="win";
    let winStatus = null;
    let winningMove = null;
    let losingMove = null;
    const tie = "It's a tie!";
    console.log(playerSelection + " "+ computerSelection);

    if (playerSelection.toLowerCase() === "rock"){ 
        if (computerSelection === "paper"){ 
            winStatus = loser;
        }  
        else if( computerSelection === "scissors"){
            winStatus = winner;
        }
        else if (computerSelection === "rock"){
            return tie;
        }
        
    }
    //scissors beat paper
    else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection ==="rock"){
            winStatus = loser;
        }
        else if (computerSelection === "paper"){
            winStatus = winner;
        }
        else if(computerSelection ==="scissors"){
            return tie;
        }
    }
    //paper beats rock
    else if  (playerSelection.toLowerCase() === "paper"){
        if (computerSelection ==="scissors"){
            winStatus = loser;
        }
        else if (computerSelection === "rock"){
            winStatus = winner;
        }
        else if(computerSelection === "paper"){
            return tie;
        }

    }
    else return ("Exception" + playerSelection + computerSelection);

    //set winningMove to the winners move
    if (winStatus === loser){
        winningMove = computerSelection;  
        losingMove = playerSelection;

    }
    else if (winStatus === winner){
        winningMove = playerSelection;
        losingMove = computerSelection; 
    }
    else winningMove = "error";
    let winnerMessage = `You ${winStatus}! ${winningMove} beats ${losingMove}!`;

   return winnerMessage;
}

let game = () => {
    let winCounter = 0;
    let lossCounter = 0;
    let roundScore = 0; 
    for (let i = 0; i <= 5; i++){

        roundScore = playGame(prompt(),computerPlay());
        console.log(roundScore);

        if (roundScore.includes("win")){
            winCounter++;
        }

        console.log("Wins: "+ winCounter); 
    }
   
}
document.write("hello world! press F12 on your keyboard to access the console, to play rock paper sissors!");


let computerPlay = () =>{ //return rock, paper, or sissors
    let randNo = Math.random();
    let randomMove;
    if(randNo <= .333){
        randomMove = "rock";
    }
    else if (randNo <= .666){
        randomMove = "paper";
    }
    else {
        randomMove = "sissors";
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

    if (playerSelection.toLowerCase() === "rock"){ 
        if (computerSelection === "paper"){ 
            winStatus = loser;
        }  
        else if( computerSelection === "sissors"){
            winStatus = winner;
        }
        else if (computerSelection === "rock"){
            return "It's a tie!"
        }
        
    }
    //scissors beat paper
    else if (playerSelection.toLowerCase() === "scissors"){


    }
    //paper beats rock
    else if  (playerSelection.toLowerCase() === "paper"){


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


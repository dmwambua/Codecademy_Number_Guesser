let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget =() =>{
return Math.floor(Math.random()*10);
}
const compareGuesses = (humanGuess, computerGuess, secretNum) =>{
let humanGuessDifference = Math.abs(secretNum-humanGuess);
let compGuessDifference = Math.abs(secretNum-computerGuess);
if (humanGuessDifference < compGuessDifference) {
    return true;
}else if (humanGuessDifference === compGuessDifference) {
return true;
} else {
    return false;
}
}
const updateScore = (winner) =>{
    //let humanScore = 0;
    //let computerScore = 0;

    if (winner === 'human'){
        humanScore +=1;
    } else if (winner === 'computer'){
        computerScore +=1;
    }
}
const advanceRound = () =>{
    currentRoundNumber+=1;
}
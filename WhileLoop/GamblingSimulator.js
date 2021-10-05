const INITIAL_AMOUNT = 100;
const MAX_AMOUNT = 200;
const MIN_AMOUNT = 0;
const BET_PRICE = 1;
const GAME_WON = 1;
const GAME_LOST = 0;

function getResultOfGambling(){
    return Math.floor(Math.random() * 10) %2;
}

let currentAmount = INITIAL_AMOUNT;
let count = 0;
let numberOfWins = 0;
let result;
while(currentAmount < MAX_AMOUNT && currentAmount > MIN_AMOUNT){
    result  = getResultOfGambling();
    count++;
    if(result == GAME_WON){
        numberOfWins++;
        currentAmount += BET_PRICE;
    }
    else{
        currentAmount -= BET_PRICE;
    }
}

console.log("Current Price: "+currentAmount+"  number of wins: "+ numberOfWins+"  number of times game played: "+ count);
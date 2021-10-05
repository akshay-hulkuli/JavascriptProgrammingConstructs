const HEAD = 1;
const TAIL = 2;

function tossCoin(){
    return Math.floor(Math.random() * 10) % 2;
}

let tailWins = 0;
let headWins = 0;

while(tailWins<11 || headWins < 11){
    coinFace = tossCoin();
    if(coinFace == HEAD){
        console.log("Heads");
        headWins++;
    }
    else{
        console.log("Tails");
        tailWins++;
    }
}

if(tailWins == 11) console.log("tail has appeared 11 times");
else console.log("head has appeared 11 times");
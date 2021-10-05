const HEAD = 1;
const TAIL = 2;

function tossCoin(){
    return Math.floor(Math.random() * 10) % 2;
}

coinFace = tossCoin();

if(coinFace == HEAD){
    console.log("Heads");
}
else{
    console.log("Tails");
}

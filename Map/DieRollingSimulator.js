let dieValueMap = new Map();

function getDieValue(){
    return ((Math.floor(Math.random()*10))%6)+1;
}

while(!Array.from(dieValueMap.values()).includes(10)){
    let dieValue = getDieValue();
    if(dieValueMap.has(dieValue)){
        dieValueMap.set(dieValue, dieValueMap.get(dieValue)+1);
    }
    else{
        dieValueMap.set(dieValue, 1);
    }
}

console.log(dieValueMap);

let max = 0;
let min = Number.MAX_SAFE_INTEGER;
let maximumTimesAppearedNumber = -1;
let minimumTimesAppearedNumber = -1;
for(const [key, value] of dieValueMap.entries()){
    if(max < value){
        max = value;
        maximumTimesAppearedNumber = key;
    }
    if(min > value){
        min = value;
        minimumTimesAppearedNumber = key;
    }
}

console.log("most appeared number :"+ maximumTimesAppearedNumber+ " count: "+ max);
console.log("least appeared number: "+ minimumTimesAppearedNumber+ " count: " + min);
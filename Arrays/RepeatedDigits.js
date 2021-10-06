const MAX_LIMIT  = 100;

let array = [];

function isRepeated(number){
    let unitsPlace = number % 10;
    let tenthPlace = Math.floor(number/10);
    if(unitsPlace == tenthPlace) return true;
    return false;
}

for(let i=9; i< MAX_LIMIT; i++){
    if(isRepeated(i)) array.push(i);
}

console.log("the array is : "+ array);
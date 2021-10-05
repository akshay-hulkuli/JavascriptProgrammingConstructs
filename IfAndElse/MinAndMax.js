let numbers = [];

for(let i=0; i<5;i++){
    numbers[i] = Math.floor(Math.random()*1000);
}

console.log("generated numbers are: "+ numbers);

let min = Number.MAX_SAFE_INTEGER;
let max = 0;

function findMin(a, b){
    if(a>b) return b;
    else return a;
}

function findMax(a, b){
    if(a>b) return a;
    else return b;
}

for(let number of numbers){
    min  = findMin(min, number);
    max =  findMax(max, number);
}

console.log("Minimum is: "+ min+ "  Maximum is: "+ max);
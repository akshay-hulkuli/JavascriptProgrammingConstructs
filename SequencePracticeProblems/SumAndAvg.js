let numbers = [];

for(let i=0; i<5;i++){
    numbers[i] = Math.floor(Math.random()*100);
}

let sum =0;
let avg = 0;

for(let number of numbers){
    sum += number;
}

avg = sum/5;

console.log("sum: "+ sum+ " average: "+ avg);


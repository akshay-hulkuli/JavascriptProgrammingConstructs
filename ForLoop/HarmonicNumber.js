let n;

process.argv.forEach(function (val, index, array) {
    if(index == 2) n = val; 
});
console.log("the value of n:"+ n);
let harmonicSum = 0;
for(let i =1; i<= n; i++){
    harmonicSum += (1/i);
}

console.log("harmonic sum is : "+ harmonicSum );
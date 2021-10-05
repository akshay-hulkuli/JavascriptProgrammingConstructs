let power;

process.argv.forEach(function (val, index, array) {
    if(index == 2) power = val; 
});
console.log("the value of n:"+ power);
for(let i =0; i<= power; i++){
    console.log(Math.pow(2,i));
}
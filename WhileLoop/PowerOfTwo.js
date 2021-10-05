let power;

process.argv.forEach(function (val, index, array) {
    if(index == 2) power = val; 
});
console.log("the value of n:"+ power);
let i=0;
while(i<= power){
    console.log(Math.pow(2,i));
    i++;
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let flag = true;
readline.question("enter a number", number => {
    number = parseInt(number);
    for(let i = 2; i < number/ 2; i++){
        if(number % i == 0){
            console.log("It is not a prime number");
            flag = false;
            break;
        } 
    }
    if(flag)
        console.log("It is a prime Number");
    readline.close();
});
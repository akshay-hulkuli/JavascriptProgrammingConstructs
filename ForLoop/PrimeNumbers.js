const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let flag = true;
readline.question("enter a max number in the range", number => {
    number = parseInt(number);
    for(let i = 1; i < number; i++){
        flag = true;
        for(let j=2; j< i/2; j++){
            if(i % j == 0){
                flag = false;
                break;
            } 
        }
        if(flag)
        console.log("prime Number: "+ i);
    }
    
    readline.close();
});
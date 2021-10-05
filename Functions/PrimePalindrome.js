const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(number){
    for(let i=2;i<number/2;i++){
        if(number % i == 0) return false;
    }
    return true;
}

function getPalindrome(number){
    let reverse  =0, remainder;
    while(number > 0){
        remainder = number % 10;
        reverse *= 10;
        reverse += remainder;
        number = Math.floor(number/10);
    }
    return reverse;
}

readline.question("enter a prime number", number =>{
    number = parseInt(number);
    if(!isPrime(number)){
        console.log("the entered number is not prime");
        return;
    }
    let palindrome = getPalindrome(number);
    console.log("the palindrome of entered number is: "+ palindrome);
    if(isPrime(palindrome)){
        console.log("the palindrome is also a prime number");
    }
    else{
        console.log("the palindrome is not a prime number");
    }
    readline.close();
});

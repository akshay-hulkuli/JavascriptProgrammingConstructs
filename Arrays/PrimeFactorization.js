const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let primeFactors = new Array();

readline.question("enter a number",n =>{

    for(;n%2 == 0; n = Math.floor(n / 2))
    {
        primeFactors.push(2);
    }

    for(let i = 3; i*i <= n; i = i + 2)
    { 
        while (n % i == 0)
        {
            primeFactors.push(i);
            n = Math.floor(n / i);
        }
    }
    if (n > 2)
        primeFactors.push(n);

    console.log("the prime factores are :"+ primeFactors);
    readline.close();
})


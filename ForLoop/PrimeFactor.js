const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("enter a number",n =>{

    for(;n%2 == 0; n = Math.floor(n / 2))
    {
        console.log(2 + " ");
    }

    for(let i = 3; i*i <= n; i = i + 2)
    { 
        while (n % i == 0)
        {
            console.log(i + " ");
            n = Math.floor(n / i);
        }
    }
    if (n > 2)
        console.log(n + " ");
    readline.close();
})


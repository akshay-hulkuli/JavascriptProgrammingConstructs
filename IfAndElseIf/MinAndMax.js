const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter first number', a => {
    readline.question('Enter second number', b => {
        readline.question('Enter third number', c  =>{
            let value1 = a + (b * c);
            let value2 = c + (a / b);
            let value3  = a % b + c;
            let value4  = a*b + c;
            let max = min = value1;
            if(max < value2){
                max  = value2;
            }
            else if (value2 < min){
                min = value2;
            }
            if(max < value3){
                max  = value3;
            }
            else if (value3 < min){
                min = value3;
            }
            if(max < value4){
                max  = value4;
            }
            else if (value4 < min){
                min = value4;
            }

            console.log("min: "+ min+ " max: "+ max);
            readline.close();
        });
    });
});

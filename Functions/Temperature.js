function fahrenheitToCelsius(degF){
    return (degF- 32) * (5/9);
}

function celsiusToFahrenheit(degC){
    return (degC * 9 / 5) + 32;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1: convert fahrenheit to celsius  2: celsius to fahrenheit ");

readline.question("enter option", option =>{
    switch(parseInt(option)){
        case 1:
            readline.question("enter temp in fahrenheit", degF =>{
                if(degF>=32 && degF<=212){
                    let degC = fahrenheitToCelsius(degF);
                    console.log("temp in celsius: "+ degC);
                }
                else{
                    console.log("tempetrature must be between freezing and boiling point");
                }
            });
            break;
        case 2:
            readline.question("enter temp in celsius", degC =>{
                if(degC>=0 && degC<=100){
                    let degF = celsiusToFahrenheit(degC);
                    console.log("temp in fahrenheit: "+ degF);
                }
                else{
                    console.log("tempetrature must be between freezing and boiling point");
                }
            });
            break;
        default:
            console.log("Wrong choice");
    }
});
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the number like 1,10,100,1000 ....", number =>{
    number = parseInt(number)
    switch(number){
        case 1:
            console.log("UNIT");
            break;
        case 10:
            console.log("TEN");
            break;
        case 100:
            console.log("HUNDRED");
            break;
        case 1000:
            console.log("THOUSAND");
            break;
        case 10000:
            console.log("TEN THOUSAND");
            break;
        case 100000:
            console.log("HUNDRED THOUSAND");
            break;
        case 1000000:
            console.log("MILLION");
            break;
        case 10000000:
            console.log("TEN MILLION");
            break;
        case 100000000:
            console.log("HUNDRED MILLION");
            break;
        case 1000000000:
            console.log("BILLION");
            break;
        default:
            console.log("Wrong case");
    }
    readline.close();
});


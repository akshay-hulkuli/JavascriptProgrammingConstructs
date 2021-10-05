const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('1:feet to inch,  2:inch to feet,  3:feet to meter 4:meter to feet');

readline.question('Enter your option', option => {
    option = parseInt(option);
    switch(option){
        case 1:
            readline.question('Enter length in feet', feet =>{
                let inch  = feet * 12;
                console.log('length in inch'+ inch);
            });
            break;
        case 2:
            readline.question('Enter length in inch', inch =>{
                let feet  = inch / 12;
                console.log('length in feet'+ feet);
            });
            break;
        case 3:
            readline.question('Enter length in feet', feet =>{
                let meter  = feet / 3.281;
                console.log('length in meter'+ meter);
            });
            break;
        case 4:
            readline.question('Enter length in meter', meter =>{
                let feet  = meter * 3.281;
                console.log('length in feet'+ feet);
            });
            break;
        default:
            console.log("wrong option");
    }
});
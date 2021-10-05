
let date = 0;
let month = 0;

process.argv.forEach(function (val, index, array) {
    if(index == 2) date = val;
    if(index == 3) month = val;  
});

let numberOfDays = [31, 30, 31, 30];

if( month > 3 && month < 6){
    console.log("true");
    return;
}
if( month == 3 || month == 6){
    if(date>=20 && date <= numberOfDays[month-3]){
        console.log("true");
    }
    else{
        console.log("false");
    }
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Enter the year ', year => {
    if(year % 100 != 0){
        if(year % 4 == 0){
            console.log("this is a leap year");
        }
        else{
            console.log("this is not a leap year");
        }
    }
    else{
        if(year % 400 == 0){
            console.log("this is a leap year");
        }
        else{
            console.log("this is not a leap year");
        }
    }
    readline.close();
  });
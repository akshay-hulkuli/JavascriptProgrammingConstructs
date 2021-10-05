const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Enter a number like 1, 10, 100, 1000 ...... ', number => {
    if(number == 1) 
        console.log("UNIT");
    else if(number == 10) 
        console.log("TEN");
    else if(number == 100)
        console.log("HUNDRED");
    else if(number == 1000)
        console.log("THOUSAND");
    else if(number == 10000)
        console.log("TEN THOUSAND");
    else if(number == 100000)
        console.log("HUNDRED THOUSAND");
    else if(number == 1000000)
        console.log("MILLION");
    else if(number == 10000000)
        console.log("TEN MILLION");
    else if(number == 100000000)
        console.log("HUNDRED MILLION");
    else if(number == 1000000000)
        console.log("BILLION");
    else
        console.log("VERY HUGE NUMBER"); 

        
    readline.close();
  });
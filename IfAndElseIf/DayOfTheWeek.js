let digit = (Math.floor(Math.random() * 10) % 7 ) + 1;

console.log("Number generated: "+ digit);

if(digit == 1)
    console.log("SUNDAY");
else if(digit == 2)
    console.log("MONDAY");
else if(digit == 3)
    console.log("TUESDAY");
else if(digit == 4)
    console.log("WEDNESDAY");
else if(digit == 5)
    console.log("THURSDAY");
else if(digit == 6)
    console.log("FRIDAY");
else
    console.log("SATURDAY");
    
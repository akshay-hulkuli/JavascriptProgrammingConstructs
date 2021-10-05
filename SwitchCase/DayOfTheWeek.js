let digit = (Math.floor(Math.random() * 10) % 7 ) + 1;

console.log("Number generated: "+ digit);

switch(digit){
    case 1:
        console.log("SUNDAY");
        break;
    case 2:
        console.log("MONDAY");
        break;
    case 3:
        console.log("TUESDAY");
        break;
    case 4:
        console.log("WEDNESDAY");
        break;
    case 5:
        console.log("THURSDAY");
        break;
    case 6:
        console.log("FRIDAY");
        break;
    case 7:
        console.log("SATURDAY");
        break;
    default:
        console.log("Wrong case");
}
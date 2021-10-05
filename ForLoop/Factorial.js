let number = Math.floor(Math.random() * 10);
console.log("generated number is : "+ number);

let product = 1;

for(let i =1; i<=number; i++){
    product *= i;
}

console.log("the factorial of the number is: "+product);
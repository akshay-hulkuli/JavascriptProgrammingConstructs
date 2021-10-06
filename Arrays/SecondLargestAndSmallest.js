let numbers = new Array();

function getRandomNumbers(){
    return Math.floor(Math.random() * 1000);
}

function findSecondLargest(array){
    let max1 = 0;
    let max2 = 0;
    for(let number of array){
        if(max1<number) {
            max2 = max1;
            max1 = number;
        }
        else if(max2<number){
            max2  = number;
        }
    }
    return max2;
}

function findSecondSmallest(array){
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;
    for(let number of array){
        if(min1>number) {
            min2 = min1;
            min1 = number;
        }
        else if(min2>number){
            min2  = number;
        }
    }
    return min2;
}

for(let i=0; i<10;i++) numbers[i] = getRandomNumbers();

console.log("the array is: "+ numbers);
console.log("second largest number is :"+ findSecondLargest(numbers));
console.log("second smallest number is :"+ findSecondSmallest(numbers));
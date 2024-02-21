const testArray = [2, 4, 6 ,3 ,1, 5, 9 ,6, 8];
console.log(testArray.fill(0)); //all value replaced with 0


//console.log(testArray.fill("h",2));  first argument is the value we want to fill and the second argument is the index from where we want to fill the value
//if the second argument is 2 then that means that in the array the value till 2nd index position remain as it is and it will change the value after it.

console.log(testArray.fill("h",2,5));//the value between the second and third argument will get changed.

const myNumber = [23, 24, 56, 26, 64, 88, 55, 96, 98];

const result = myNumber.filter((num) => num<=55 ); //Filter with the condition given
console.log(result);
var returnedValue = Math.max(1,2,5,3,6,3,7,4,6,7,10);//Returns the biggest value.
console.log(returnedValue);

var myObj = {};
Object.assign(myObj, {a:1, b:4, c:2}, {x:9, y:7, z:5});//This is done to assign the key and value inside the object.
console.log(myObj);


function sumOne(a, b){
    return a+b;
}

myA = [4, 5, 6];
console.log(sumOne(...myA));//'... is spread Operator' is used to send the arguments.

//But if the array contains more than 2 value suppose the array is [4, 5, 1], then the function only add the first two values as it only accepts
//two parameters.

function sumTwo(a,b,...args){ //This is the 'rest operator' and will take as many parameters and arguments as the user provides.
    //The first two elements of the array will be taken as A and B and the other will come under args.
    
    console.log(args);//The 'rest operator' will take the arguments and bunch or bind them into an array.
    
    let multi = a*b;
    let sum = 0;
    for (const arg of args) {
        sum+=arg;
    }
    return [sum, multi];
}

console.log(sumTwo(2, 5, 9, 1, 4));
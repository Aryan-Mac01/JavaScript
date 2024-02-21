//TODO: Flasy
// undefined , null , 0 , '' , NaN
//Anything other than these are known as truthy values 

console.log("2" + 2); // => 22

var user = "2";

if(2 == user){ //Coercion kehte hai isko
    console.log("Condition is true");
}

if(2 === user){
    console.log("Datatype is true");
}


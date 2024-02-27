function sayHello(){
    console.log("HI");
    console.log("Say heello");
}

sayHello();

//<----------SELF-EXECUTING ANONYMOUS FUNCTIONS--------->
//1. It shouldnt have any name and.
//2. The function should be placed inside the parenthesis.

(function (){
    console.log("AALO");
    console.log("EVERYNYAN");
})(); //This function is self executing.
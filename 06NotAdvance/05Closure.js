function init(){
    var firstName = "Aryan"
    console.log("This is INIT");
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init();//Now value holds the sayFirstName.

value();//This is known as closure.


function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5));//Calls the other just after the first one, possible only because of closure.
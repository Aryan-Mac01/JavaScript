//Other coding languages consider {} this as a scope but not javascript.
console.log(name);

var name = "hitesh";//var will give 'undefined' in this but the LET keyword will give error in this code.

if(true){
    lastName = "Aryan";
    console.log(lastName);
}
console.log(lastName); //This will also print "Aryan" as output but only with var, with let it will give error.
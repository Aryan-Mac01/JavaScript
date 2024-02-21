var user = {
    firstName : "Aryan",
    lastName : "Mishra",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true
}

console.log(user.firstName);
console.log(user["lastName"]);
user.loginCount = 44;
console.log(user.loginCount);
console.group(user);
console.table(user)
//Objects are the key value pairs in JavaScript.
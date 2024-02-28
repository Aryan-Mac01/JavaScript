const aryan = {
    firstName : "Aryan",
    lastName : "Mishra",
    role: "Admin",
    courseCount : 4,
    getInfo: function(){
        console.log(`
        First name is: ${this.firstName}
        Last name is: ${this.lastName}
        Role is: ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
}

const dj = {
    firstName:"Rock",
    lastName: "DJ",
    role:"sub-admin",
    courseCount: 5,
}; //getInfo function is not defined in dj.


const cena = {
    firstName: "John",
    lastName: " Cena",
    role: "Manager",
    courseCount: 8,
}


var djInfo  = aryan.getInfo.bind(dj);//The getInfo is not defined in 'dj' so the aryan object will pass the getInfo function to 'dj' with the help of bind.
djInfo();

aryan.getInfo.call(cena);//Call is also similar to bind but rather then giving refence to the function it directly calls the object.

//The function will only be borrowed if the properties are similar in both.
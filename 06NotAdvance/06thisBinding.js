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


var djInfo  = aryan.getInfo.bind(dj);
djInfo();

aryan.getInfo.call(cena);
var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`);
    },
};


var Aryan = Object.create(User);
console.log(Aryan);
Aryan.name = "Aryan Mishra"
Aryan.getUserName();

var sam = Object.create(User,{
    name: {value: "sam"},
    courseCount: {value: 3},

});

sam.getUserName();
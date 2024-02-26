var User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }

}

User.prototype.getFirstName = function(){
    console.log(`Your first name is: ${this.firstName}`);
};

var Aryan = new User("Aryan", 2); //This create a new user for the properties.
Aryan.getCourseCount(); //2.    
Aryan.getFirstName();
///console.log(Aryan);

//Without NEW the 'this' keyword was pointing towards the empty window.
var User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }

}

var Aryan = new User("Aryan", 2); //This create a new user for the properties.
console.log(Aryan);

//Without NEW the 'this' keyword was pointing towards the empty window.
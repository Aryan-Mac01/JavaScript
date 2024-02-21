var user = {
    firstName : "Aryan",
    lastName : "Mishra",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    }
};

var courseList = true

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
console.log(user.getCourseCount());
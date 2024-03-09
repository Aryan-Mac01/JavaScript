//Classes are like the blueprint that states how are things should look like.
//Classes alone doesn't work, they need objects to work.

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    courseList = [];

    getInfo() {//This is a method.
        return {name: this.name, email: this.email};
    }

    enrollCourse(name){
        this.courseList.push(name);
    }

    getCourseList(){
        return this.courseList;
    }
}

module.exports = User;//After exporting you can access this class in any file.
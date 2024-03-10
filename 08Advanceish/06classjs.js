//Classes are like the blueprint that states how are things should look like.
//Classes alone doesn't work, they need objects to work.

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    #courseList = []; //This is a private variable/

    getInfo() {//This is a method.
        return {name: this.name, email: this.email};
    }

    enrollCourse(name){//This is a setter, and in setter we have parameters as they are to set some values.
        this.#courseList.push(name);
    }

    getCourseList(){//This is a getter, and the main purpose of getter is to return the value.
        return this.#courseList;
    }
}

module.exports = User;//After exporting you can access this class in any file.

const rock = new User("rock", "rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular bootcamp");
console.log(rock.getCourseList());//Idea of getter is so that not everybody can't access your variable.
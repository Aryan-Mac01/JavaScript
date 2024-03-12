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

    login(){
        return "You are logged in";
    }
}

class SubAdmin extends User{//This is inheritance, a child class extends and uses the properties of base class.
    constructor(name, email){
        super(name, email);
        //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    }
    getAdminInfo(){//Static keyword means "Hey, this is a private property, and even sons and grandsons can't inherit this info, stay away"
        return "I am subadmin";
    }
}

module.exports = User;//After exporting you can access this class in any file.

const rock = new User("rock", "rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular bootcamp");
//console.log(rock.getCourseList());//Idea of getter is so that not everybody can't access your variable.

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());//If getAdminInfo class is statis then we can't access it and this line will throw error.
console.log(tom.login());

const User = require("./06classjs.js");
const aryan =  new User("aryan", "aryan@gmail.com");
console.log(aryan.getInfo());

aryan.enrollCourse("react");
aryan.enrollCourse("Angular");

console.log(aryan.getCourseList());

let courses = aryan.getCourseList();

courses.forEach((c) => console.log(c));
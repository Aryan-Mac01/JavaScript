//For all the regular function calls, this points to window object.

//console.log(this); --> this will give {} as output

var user = {
    firstName: "Hitesh",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 7", this);
    },
};

user.getCourseCount();
//Create an application with the following rules:
//admin - gets full access
//subadmin - get access to create/delete courses
//testprep - get access to create/delete tests
//user - gets access to consume content

var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;

    case "subadmin":
        console.log("get access to create/delete courses");
        break;

    case "testprep":
        console.log("get access to create/delete tests");
        break;

    case "user":
        console.log("gets access to consume content");
        break;

    default:
        console.log("Trial user");
        break;
}
/*\Define a function that can answer the role of a user.
A user can be on follwing roles:
admins -  with all access
subadmin - with access create/delete courses
test prep - with access to create/delete tests
user - consume all content
other - trial user
Input: getUserRole(name, role)
*/
var getUserRole = function (name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is a test-prep with access to create and delete tests`;
            break;
        case "admin":
            return `${name} is user with to consume content`;
            break;
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Aryan","testprep"));


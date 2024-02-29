//Generating elements and texts node in DOM.

const courses = [
    {
        name: "Complete ReactJS Course",
        price: "2.3"
    },
    {
        name: "Complete Angular Course",
        price: "2.7"
    },
    {
        name: "Complete VueJS Course",
        price: "2.8"
    },
    {
        name: "Complete C++ Course",
        price: "2.2"
    },
]

function generateLIST(){ //Function to generate List.
    const ul = document.querySelector(".list-group");//Select the class of UL from the HTML Page.
    courses.forEach((course) => {
        const li = document.createElement("li");//This will make li element.
        li.classList.add("list-group-item");//This will create the class for the li element.
    })
}
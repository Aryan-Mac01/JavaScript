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
    ul.innerHTML = ""; //This will reset the ul elements everytime we call the function so that the elements dont get repeated.
    courses.forEach((course) => {
        const li = document.createElement("li");//This will make li element.
        li.classList.add("list-group-item");//This will create the class for the li element.

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}

window.addEventListener("load", generateLIST);//Calls the function when the website loads.

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price);
    generateLIST();
})
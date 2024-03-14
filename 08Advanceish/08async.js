const uno = () => {
    console.log("I am one");
}

const dos = () => {
    setTimeout(() => {
        console.log("Wooohoooo");
    }, 3000)//This will execute after calling all the functions.
    console.log("I am two");
}

const tres = () => {
    console.log("I am three");
}

uno();
dos();
tres();
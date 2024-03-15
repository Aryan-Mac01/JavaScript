const uno = () => {
    return "I am one";
}

// const dos = () => {
//     setTimeout(() => {
//         return "I am two";
//     }, 3000)
    
// }

const dos = () => {
    return new Promise((resolve, reject) => { //Resolve-> everything is good and we got what we wanted from the web, Reject-> there's an error.
        setTimeout(() => {
            resolve("I am two");
        }, 3000);
    });
};


const tres = () => {
    return "I am three";
}

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos(); //await says wait let me execute first then leave the program.
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();


//A promise has two states, either it's gonna be fulfilled or it's not gonna be fulfilled.
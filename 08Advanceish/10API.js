//fetch is a already provided by JS that provides you promises everytime.
fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json();//Then means good response.
    })

    .then((data) => {
        var joke = data.value;
        console.log("Joke", joke);
    })

    .catch(); //Catch means error.
    //This code will run on console in web browser.
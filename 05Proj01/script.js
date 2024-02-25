//setTimeout(function, miliseconds) --> Kitne time tk rukna hai
//setInterval(function, miliseconds)--> Kitne time tk task karna hai\

//document.querySelector("<tag>") or document.querySelector(".class") or document.querySeelector("#id");

var counter = document.querySelector(".counter");   
var followers = document.querySelector(".followers");

let count = 1;
setInterval(() => {
    if(count<=1000){
    count++;
    counter.innerText = count;
    }
}, 1)

setTimeout(() => {
    followers.innerText = "Followers on Instagram"
}, 5000)
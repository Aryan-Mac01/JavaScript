var  myMap = new Map();
//Maps are like objects but they are not objects, they are comletely different.
myMap.set(0, "Uno");
myMap.set(1, "Yes");
myMap.set(2, "Dos");
myMap.set(3, "Lol");
myMap.set(4, "Des");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}


for(let [key, value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
}
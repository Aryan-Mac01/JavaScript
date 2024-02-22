const names = [
    "Youtube",
    "FB",
    "Netflix",
    "Insta"
]
//<--------FOR OF LOOP-------->  The For of loop is used for the Array majorily.
for(const n of names){
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    fb: "Facebook",
    ig: "Instagram"
}

//<-------For In Loop-------> The For in loop is used for the objects majorily.

for(const n in symbols){
    console.log(`Key is: ${n} and the value is: ${symbols[n]}`);
}
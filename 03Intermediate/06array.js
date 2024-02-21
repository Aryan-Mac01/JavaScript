var countries = ["India", "USA", "Japan", "England"];
var states = new Array("UP","MP","Assam");
console.log(states);

console.log(states.length);
states[0]="Punjab";
console.log(states);

states.unshift("New Value");
console.log(states);
states.shift();
console.log(states);

console.log(states.indexOf("new"));
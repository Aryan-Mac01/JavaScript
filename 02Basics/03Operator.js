// var num1 = 7;
// var num2 = 6;

// console.log(num1+num2);

// var answer = num1 > num2;
// console.log(answer);

var sellingPrice = 199;
var listPrice = 799;

var discountPercent = ((listPrice - sellingPrice) / listPrice) * 100;

console.log("Discount Percentage is:" + discountPercent);

var displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off");

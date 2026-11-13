"use strict";

// Prediction: number
console.log(typeof 25);
//Actual: number

// Prediction: string
console.log(typeof "25");
//Actual: string

// Prediction: null
console.log(typeof null);
//Actual: object

// Prediction: 30
console.log(Number("25") + 5);
//Actual: 30

// Prediction: NaN
console.log(Number("abc"));
//Actual: NaN

// Prediction: NaN
console.log("abc" - 1);
//Actual: NaN

// Prediction: false
console.log(Boolean("0"));
//Actual: true - String with 0 becomes true

// Prediction: false
console.log(Boolean(""));
//Actual: false

// Prediction: true
console.log(5 == "5");
//Actual: true

// Prediction: false
console.log(5 === "5");
//Actual: false

// Prediction: false
console.log("10" > "9");
//Actual: false

// Prediction: false
console.log(null == undefined);
//Actual: true - 


//Rule I learned: == is a loose equality, it checks that the value is the same whereas === also checks at the type
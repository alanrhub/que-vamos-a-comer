"use strict";

// Prediction: number
console.log(typeof 25);
//Actual: number

// Prediction: string
console.log(typeof "25");
//Actual: string

// Prediction: null
console.log(typeof null);
//Actual: object - js bug that wasn't fixed

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
//Actual: true - equality for this returns true immediately


/*Rule I learned: == is a loose equality, it converts both values to the same type before comparing
 === compares without doing the type conversion
== should be used when we only care about the value, and === when we also care about the type
*/

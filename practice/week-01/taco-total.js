"use strict";
const tacoPrice = 25;
const drinkPrice = 30;
let tacoCount = 4;
let total;

total = (tacoPrice * tacoCount + drinkPrice);
//original order total
console.log(`Total: $${total}`);

tacoCount++;
total = (tacoPrice * tacoCount + drinkPrice);
//order total after adding a taco
console.log(`Total: $${total}`);

//remainder when divided between 3 people
console.log(`Sobran: $${total%3}`);

//We didn't specify a type here, so this would result in "30"
console.log("25"+5);

//We didn't specify a type here, so this would result in "25"
console.log("25"-5);
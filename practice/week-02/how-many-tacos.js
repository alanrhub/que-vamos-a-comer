"use strict";
const tacoPrice = 30; 
const budget = 145;
let tacoCount = 0;
let total = 0;
let change = budget;


while(change >= tacoPrice){
    tacoCount++;
    total += tacoPrice;
    change = budget-total;
}
if(tacoCount === 0){
    console.log("Tu presupuesto esta por debajo del precio de los tacos");
}else{
    console.log(`Te alcanzan ${tacoCount} tacos ($${total}). Te sobran $${change}`);
}

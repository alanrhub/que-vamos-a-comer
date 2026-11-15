"use strict";

const budget = 150;
const orderTotal = Number("150");

console.log("Order total: $"+orderTotal)

if(budget === orderTotal){
    console.log("Justo");
}
else if(orderTotal > budget){
    console.log("No te alcanza, te faltan: $"+(orderTotal-budget));
}else{
        console.log("Si te alcanza, te sobran: $"+(budget-orderTotal));
}

const canPay = (orderTotal >= budget ? "Si" : "No");
console.log("Puedes pagarlo? "+canPay);
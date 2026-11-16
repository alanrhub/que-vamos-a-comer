"use strict";

const isOpen = false;
const distanceKm = 2.5;
const maxDistanceKm = 2;
const isVegetarian = true;
const hasVeggieOptions = false;
let reason;

const isWithinDistance = distanceKm <= maxDistanceKm;
const isVegetarianFriendly = !isVegetarian || hasVeggieOptions;

const canGo = isOpen && isWithinDistance && isVegetarianFriendly;


if(!isOpen){
    reason = "El lugar esta cerrado";
}
else if (!isWithinDistance){
    reason = "El lugar queda muy retirado";
}
else if(!isVegetarianFriendly){
    reason = "Eres vegetariano y el restaurante no ofrece opciones vegetarianas";
}

if(canGo){
    console.log("Vamos");
}
else{
    console.log("Descartado, " + reason);
}

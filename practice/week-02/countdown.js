"use strict";
let y = 5;

while(y>0){
    console.log("La ruleta gira en " + y + "...");
    y--;
}
console.log("¡Ruleta!");

for(let secondsLeft=5; secondsLeft>0; secondsLeft--){
    console.log(`La ruleta gira en ${secondsLeft}...`);
}
console.log("¡Ruleta!");

/*
this loop runs 3 times, the value of j at the end is 3 but the last printed value is 2
*/
for (let j = 0; j < 3; j++){
console.log(j);
}
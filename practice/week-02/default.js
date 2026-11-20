"use strict";
let tip;
let deliveryNote;

console.log(tip || 10);
console.log(tip ?? 10);

/*
I used ?? since it looks for a defined value (which means the customer entered a tip, even 0)
if it doesn't find one (which means the customer didn't enter one) it returns 10
*/
const finalTip = tip ?? 10;


/*
I used || since it looks for the first truthy value (which means the customer entered a note)
otherwise it returns "Sin comentarios"
*/
const note = deliveryNote || "Sin comentarios";
console.log(note);

/*
tip = 0;
10 -> 10
0 -> 0

tip = null;
10 -> 10
10 -> 10

tip = undefined
10 -> 10
10 -> 10

tip = 15
15 -> 15
15 -> 15

tip = ""
10 -> 10
"" -> ""

*/

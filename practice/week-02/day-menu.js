"use strict";
const day = "domingo";

switch (day){
    case "lunes": 
        console.log("Chilaquiles"); 
        break;
    case "martes": 
        console.log("Tacos de canasta"); 
        break;
    case "miercoles": 
        console.log("Pozole"); 
        break;
    case "jueves": 
        console.log("Enchiladas"); 
        break;
    case "viernes": 
        console.log("Mariscos"); 
        break;
    case "sabado":
    case "domingo":
        console.log("Cerrado: fin de semana");
        break;
    default:
        console.log("Día no válido");
}
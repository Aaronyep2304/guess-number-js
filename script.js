/*
console.log("42");
console.log(42)


console.log(5>10);
console.log(10<=10);
console.log(10<=12);
console.log(8!==9);


console.log(20=="20");
console.log(20===20);

console.log("COMPARACION EN TEXTO====");
console.log("Hola"==="Hola");
console.log("Hola"==="HOla");
console.log("Hola"!=="Hola");


console.log("OPERADORES LOGICOS====");


let edad=15;
let tieneLicencia = false;

console.log(edad>=18 && tieneLicencia==true);
*/
/*let edad=20
let genero="femenino"
let esVip=true;
let tienePlata=true

console.log(((genero==="femenino" &&  edad>=18) || esVip=== "true") && tienePlata)
*/

 /*const PUNTAJE=Number(prompt("Ingresa tu nota de examen del 0 al 20"))
if(PUNTAJE >18){
    alert("Excelente nota")
    }else if(PUNTAJE>=11){
        alert("Nota regular")
    }else{
        alert("Nota desaprobatoria")
    }
     */   
    
    console.log(Math.floor(Math.random()*100)+1);
    console.log(Math.floor(Math.random()*100)+1);
    console.log(Math.floor(Math.random()*100)+1);
    console.log(Math.floor(Math.random()*100)+1);

    let nombreUsuario = prompt ("¿Como te llamas?");
if(nombreUsuario!==null){
    console.log("Mi nombre es"+nombreUsuario);
}else{
    console.log("Presionaste cancelar");
}


let total = parseFloat(prompt("Ingresa el precio total de la compra:"));
let precioFinal;

if (total > 100) {
    precioFinal = total * 0.80; // 20% de descuento
} 
else if (total >= 50 && total <= 100) {
    precioFinal = total * 0.90; // 10% de descuento
} 
else {
    precioFinal = total; // sin descuento
}

alert("Tu precio final es: $" + precioFinal);
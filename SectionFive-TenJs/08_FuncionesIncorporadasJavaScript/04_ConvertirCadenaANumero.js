// Convertir de cadena a número en JS
let cadenaA = "10", cadenaB = "20";

//Si son Cadena se Concatenan
console.log(cadenaA + cadenaB); // "1020"

//Convertir a numeros para que se Sumen

//Forma 1: Usando parseInt
let numeroA = parseInt(cadenaA);
let numeroB = parseInt(cadenaB);
//Ahora se Suman
console.log(numeroA + numeroB); // 30

//Forma 2: Usando Number
let numeroC = Number(cadenaA);
let numeroD = Number(cadenaB);
//Ahora se Suman
console.log(numeroA + numeroB); // 30

//Convertir de Numero a Cadena en JS
let numeroE = 10, numeroF = 20;
//Si son Números se Suman
console.log(numeroE + numeroF); // 30

//Convertir a cadena para que se concatenen
let cadenaC = String(numeroE);
let cadenaD = String(numeroF);
//Ahora se Concatenan
console.log(cadenaC + cadenaD); // "1020"

//Otra forma de convertir a cadena
let cadenaE = numeroE.toString();
let cadenaF = numeroF.toString();
//Ahora se Concatenan
console.log(cadenaE + cadenaF); // "1020"
// Funciones Incorporadas Js

// Obtener el largo de una cadena
let cadena1 = 'Hola'; // Las Variables de tipo cadena aunque sus valores sean valores primitivos estos tambien pueden ser valores de un objeto, y estos pueden ser visto como arrays, de la siguiente manera se veria como un array: 'H', 'o', 'l', 'a'. Asi todos estos desde la " H " son valores almacenados dentro de un array y su posicion empieza desde cero hasta 3.
console.log(cadena1.length); // Aca Podremos Observar el numero de caracteres o de cadenas que tiene nuestra variable Cadena1 que almacena un " Hola ".

// No Podemos Modificar una cadena en Js
// Las Cadenas son inmutables y estas no se pueden modificar, como se observa a continuacion:
cadena1[0] = 'x'; // Con esto intentamos modificar el valor de la posicion " 0 " donde estaria la " H ", pero como es un valor en cadena no se podra modificar de " H " a " X ".
console.log(cadena1);

// Lo que podemos SI hacer es asignar un nuevo valor a nuestra cadena
cadena1 = 'Adios';
console.log(cadena1);

// Recorres cada caracter de nuestra variable
// Se puede hacer de dos maneras:

// De esta manera la realizamos con Of que es una estructura de control en JavaScript que te permite recorrer directamente los valores de una colección iterable, como un array, sin tener que usar un índice (i).
for(let i of cadena1){
    console.log(i)
}
console.log("\n--------------------\n")
// console.log("\n") Esto es para separar el codigo para realizar espacios dentro de la terminal.
// Esta es la manera Clasica de realizar un For
for (let i = 0; i < cadena1.length; i++) {
    console.log(`Indice: ${i} - ${cadena1[i]}`)
}

// ¿En qué se diferencia de un for clásico?
/* Ambos imprimen lo mismo, pero:

✅ for...of es más limpio y legible para trabajar con los valores directamente.

✅ Te evita errores típicos como confundir índices (i) o límites (nombres.length).

❌ Pero no te da acceso al índice de cada elemento (para eso usarías for...in o .entries()). */


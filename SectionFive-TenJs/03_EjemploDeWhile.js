//Ciclo While
//Ejemplo de un ciclo while que imprime números del 1 al 10
let numero = 1; // Inicializamos la variable numero en 1
while (numero <= 10) { // Mientras numero sea menor o igual a 10
    console.log(numero); // Imprimimos el valor de numero
    numero++; // Incrementamos numero en 1
}
// Este ciclo continuará hasta que numero sea mayor que 10, imprimiendo los números del 1 al 10 en la consola.
// Puedes cambiar el valor inicial de numero o el límite superior (10) para ver diferentes resultados

//Ciclo Do While
//Ejemplo de un ciclo do while que imprime números del 1 al 10
let numeroDoWhile = 1; // Inicializamos la variable numeroDoWhile en 1
do {
    console.log(numeroDoWhile); // Imprimimos el valor de numeroDoWhile
    numeroDoWhile++; // Incrementamos numeroDoWhile en 1
} while (numeroDoWhile <= 10); // Mientras numeroDoWhile sea menor o igual a 10
// Este ciclo se ejecutará al menos una vez, incluso si la condición es falsa desde el principio.
// Puedes cambiar el valor inicial de numeroDoWhile o el límite superior (10) para ver diferentes resultados.

//Realizar la Suma de los Primeros 5 Numeros utilizando Ciclo While y Do While
let numeros = 1, maximo = 10, sumador = 0;
while (numeros <= maximo){
    console.log(numeros);
    sumador += numeros;
    numeros++;
    console.log(`La Suma de los Numeros: ${sumador}`);
}
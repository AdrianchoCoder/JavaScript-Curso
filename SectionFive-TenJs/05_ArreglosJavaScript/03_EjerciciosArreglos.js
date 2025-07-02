//EJERCICIOS DE ARREGLOS


//EJERCICIO 1:
/*
1. Filtra solo las temperaturas mayores o iguales a 30.
2. Guarda el resultado en una nueva variable.
3. Imprime el nuevo arreglo.
*/
let temperaturas = [32, 25, 20, 15, 40, 10];
let filtroTemperatura = temperaturas.filter(
    function(temperatura){
        return temperatura >= 30
    }
)
console.log(filtroTemperatura);

//EJERCICIO 2:
/*Encuentra el segundo número más alto
Enunciado: Dado un arreglo de números enteros positivos, encuentra el segundo número más alto (sin usar .sort()). */

//Terminar en Chatgpt te enseña a hacerlo.
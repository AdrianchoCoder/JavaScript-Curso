//Usos Comunes de los Arreglos:

/*Almacenar Multiples datos del mismo tipo:
Ideal cuando tienes una lista de elementos del mismo tipo: nombres, edades, notas, temperaturas, etc. */
let notas = [3.2, 4.2, 3.0, 4.5];
console.log(notas)

/*Contar o Buscar Elementos:
Muy útil cuando quieres contar cuántas veces aparece un valor o buscar si un elemento está presente. */
let frutas = ["manzana", "uva", "pera", "pera"];
let contador = 0;

for (let fruta of frutas) {

    /*A diferencia de for...in:
for...of itera sobre los valores de un objeto iterable, mientras que for...in itera sobre las propiedades (claves) de un objeto. for...in es más adecuado para iterar sobre las propiedades de un objeto, mientras que for...of es más adecuado para iterar sobre los valores de una colección ordenada como un array o un string. En resumen: for...of facilita la iteración sobre objetos iterables, permitiendo acceder directamente a sus valores sin necesidad de manejar índices o claves manualmente. */

    if (fruta === "pera") {
        console.log(`Has conseguido una: ${fruta}`);
        contador++;
    }
}

console.log(`Cantidad de veces que apareció 'pera': ${contador}`);

/*¿Qué hace este código?
- Recorre cada elemento del arreglo frutas.
- Si encuentra "pera", lo imprime y suma al contador.
- Al final muestra cuántas veces se encontró. */

//OPCION CON INDICE:
//Si quieres hacerlo con índice también, aquí te dejo una opción alternativa:
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "pera") {
        console.log(`Has conseguido una: ${frutas[i]} en la posición ${i}`);
        contador++;
    }
}

//ORDENAR O FILTRAR DATOS:
//Se usa para organizar elementos o extraer solo los que cumplen cierta condición.

let edades = [18, 22, 16, 10, 35, 17];

//Este es un Ejemplo de Filter utilizando una Funcion Flecha
// let mayoresEdad = edades.filter(edad => edad >= 18);

//Sin Funcion Flecha seria asi:
let mayoresEdad = edades.filter(
    /*Filter nos permite " Filtrar o Evaluar " una por una de las edades, entonces solo guardara los que son mayores o iguales a 18. */
    function(edad){
        return edad >= 18;
    }
)
console.log(mayoresEdad);



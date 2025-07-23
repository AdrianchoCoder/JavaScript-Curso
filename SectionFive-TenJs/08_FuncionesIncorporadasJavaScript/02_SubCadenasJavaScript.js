// Subcadenas Js
let cadena3 = 'Hola Mundo'; /* Si tenemos esta Cadena y deseamos separar sus valores a " Hola " y " Mundo ", Debemos utilizar
la siguiente funcion que nos permite un objeto de tipo caracter. Recordemos que la variale cadena2 es como si fuera un array.*/

// Con la Funcion " Subtring ", indicaremos desde que indice inicia hasta el indice que termina + 1.
let cadena1 = cadena3.substring(0, 4); /* Como se puede Ver el indice empieza en 0 y termina en 4 porque si colocamos el 3 no imprimiria completo
el " Hola " y dejariamos por fuera la " a " */
console.log(cadena1);

console.log("------------");

// Ahora haremos lo mismo con " Mundo ".
let cadena2 = cadena3.substring(5, 10); // Aca si queremos no hay necesidad de especificar el indice final, ya que automaticamente el tomara el ultimo valor.
console.log(cadena2)
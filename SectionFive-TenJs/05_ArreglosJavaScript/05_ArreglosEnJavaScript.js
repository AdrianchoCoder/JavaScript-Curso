//Arreglos JavaScript
let arreglosJavascript = [];

//Modificar Valores en los Arreglos se Realiza de la Sguiente Manera:
arreglosJavascript[0] = 10;
arreglosJavascript[1] = 11;

//Se Puede Agregar Cualquier tipo de dato en un Arreglo, No afecta en lo Absoluto.
arreglosJavascript[4] = "Hola";

//Para Imprimir y llamar un dato o objeto dentro de un Arreglo se hace de la siguiente manera:
console.log(`Elemento 1 - [0]: ${arreglosJavascript[0]}`);

//Leer los Valores A Traves de un Ciclo.
/*Con el Ciclo For lo que hacemos es que con " Indice ", este va a ir incrementando y ira pasando por los datos o indices del arreglo.
Por eso cuando lo imprimimos en Consola dentro de los parentesis de la variable llamamos a la variable " indice ", que es la que pasa
por cada indice del arreglo.
Ademas en la Condicion del For colocamos el " < ", para que imprima unicamente los 4 valores que hay en el arreglo sin agregar el 5 
valor que no esta.
TENER EN CUENTA: El " .length ", es un metodo que permite realizar pues la variable es un objeto y estos tienen metodos o atributos con los
que podemos hacer diferentes cosas, length funciona para saber o conocer los datos o indices dentro de un arreglo, cuantos valores tiene.
*/
for (let indice = 0; indice < arreglosJavascript.length; indice++) {
    console.log(`Indices: ${indice}: ${arreglosJavascript[indice]}`)
    
}

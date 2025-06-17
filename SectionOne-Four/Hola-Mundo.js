console.log("Hola Mundo"); //Sirve para mandar Informacion a la Consola

var miVariable = 15; //Antes se utilizaba "var", para crear variables, sin embargo este ya esta descontinuado.
console.log(miVariable);
let miVariable2 = 10; // Para crear variables lo mas recomendado es utilizar "let", ya que este es el que se utiliza hoy en dia.
console.log(miVariable2);

/*Tipos de Datos que Utiliza JavaScript:
Number: Almacena Valores nuemricos
String: Almacena Cadena de caracteres
Boolean: Almacena un valor Logico
Null: Es la Ausencia de una referencia de un objeto 
Undefined: Ausencia de un valor*/

//Para Saber el tipo de dato que estamos utilizando podemos colocar typeof. Como por ejemplo:
let miEntero = 10;
console.log(typeof miEntero); //En este ejemplo se puede observar como imprime el tipo de dato que recibe la consola.
let miCadena = "hola";
console.log(typeof miCadena);
let miBoolean = true;
console.log(typeof miBoolean);

/* Constantes en javaScript:
Es una variable que una vez definido su valor, ya no se puede modificar. Como pr ejemplo:*/
const MI_CONSTANTE = 10; // Ya que esta definido su valor ya no se puede modificar.

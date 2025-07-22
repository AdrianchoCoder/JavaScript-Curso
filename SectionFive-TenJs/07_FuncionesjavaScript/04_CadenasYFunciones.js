// Cadenas y Funciones en Js
// Cadenas inmutables en js(No se pueden modificar de la misma manera que un Array).
// debido a que no tienen una referencia como lo es un " array ", para modificar su valor.
// Una cadena guarda por medio de una variable un valor primitivo y esta no se pueden modificar por medio de una funcion
// A continuacion se muestra lo anterior:
function cambiarValor(parametro){
    parametro = "Adios";
}
let cadena = "Hola";
console.log(`Antes de la Funcion: ${cadena}`);
cambiarValor(cadena);
console.log(`Despues de la Funcion: ${cadena}`); // Se puede observar que aunque se pasa el valor de la variable " cadena " a la funcion no se modifica...
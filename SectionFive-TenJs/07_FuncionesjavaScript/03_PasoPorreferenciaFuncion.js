// Paso por Referencia JS
// Objetos Array se pasan por " Referencia ".
function cambiarValor(cambio){
    cambio[0] = 20;
}

// LLamada de la Funcion
let arreglo = [10];
console.log(`Antes de la Funcion: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despues de la funcion: ${arreglo[0]}`);

// Lo que vimos anteriormente permite, modificar el valor de una variable por medio de una " referencia " donde coincidan tanto la funcion como la variable.
// Lo que hace la funcion es que cuando le pasams el " argumento o la variable arreglo ", modificara por medio del parametro o la variable " cambio " su valor, este valor modificado se guardara en la variable arreglo pero no en la funcion o en la variable local.



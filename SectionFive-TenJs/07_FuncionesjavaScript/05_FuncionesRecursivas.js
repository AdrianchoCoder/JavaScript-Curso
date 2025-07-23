// Funciones Recursivas
// Imprimir 3, 2, 1
function funcionRecursiva(numero){
    // Caso Base
    if (numero == 1) {
        console.log(numero); // Aca debe Imprimir el 1
    } else{
        console.log(numero); // Aca debe Imprimir el 3 y el 2
        funcionRecursiva(numero - 1); // Esto hace parte para generar el bucle de una funcion recursiva, ya que no se cumple la condicion vuelve desde el principio y elimina el valor que estaba - 1, asi cuando vuelva desde el principio se va acercando al valor al que se quiere llenar.
    }
}

//Llamamos la Funcion Recursiva
funcionRecursiva(3);
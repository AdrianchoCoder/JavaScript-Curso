// Ejemplo de uso de switch-case en JavaScript
// Este ejemplo muestra como usar switch-case para seleccionar una opcion basada en un numero ingresado por
// el usuario. El usuario debe ingresar un numero del 1 al 3, y el programa mostrara un mensaje
// indicando la opcion seleccionada. Si el numero ingresado no es del 1 al
// 3, se mostrara un mensaje de error.
// Importante: Este ejemplo asume que se esta ejecutando en un entorno que permite el
// uso de la funcion `input` para obtener datos del usuario, como en un navegador o un entorno de Node.js.
let key = 2; // Simulando la entrada del usuario, puedes cambiar este valor para probar diferentes casos
switch (key) {
    case 1:
        console.log("Opcion 1 seleccionada");
        break;
    case 2:
        console.log("Opcion 2 seleccionada");
        break;
    case 3:
        console.log("Opcion 3 seleccionada");
        break;
    default:
        console.log("Opcion no valida, por favor ingrese un numero del 1 al 3.");
        break;
}
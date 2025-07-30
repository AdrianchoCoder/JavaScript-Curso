// Crear un Objeto en JavaScript
// Recordar que un Arreglo no es lo mismo que un Objeto, aunque ambos son tipos de datos complejos.

let ejemploArreglo = [1, 2, 3, 4, 5]; // Esto es un arreglo

// Un Objeto es una colección de propiedades, donde cada propiedad tiene un nombre (clave) y un valor asociado.
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Ingeniero"
};

// Para Acceder a las propiedades de un Objeto, se puede usar la notación de punto o la notación de corchetes.

console.log(persona.nombre); // Acceso con notación de punto

console.log(persona["edad"]); // Acceso con notación de corchetes

// De las Dos formas Podemos acceder a la informacion de un objeto, pero la notación de punto es más común y legible.

//Ahora si queremos acceder a todo el objeto, simplemente lo mostramos en consola.
console.log(persona); // Muestra todo el objeto persona

// Hay Otra Forma de Crear Objetos en JavaScript y es a Traves de " New Object ", de la Siguiente Manera:

let persona2 = new Object(); // Con esta linea estamos creando el objeto por medio de la variable " persona 2 ".

// Agregaremos la informacion que estara dentro del objeto de la siguiente manera:

persona2.nombre = "Adrian";
persona2.direccion = "Diagonal 59";
// De esta manera se pueden agregar todos los datos que vayamos a utilizar de las dos formas se pueden crear objetos
// Lo mas Recomendado es hacerlo de la primera forma.

console.log(persona2);
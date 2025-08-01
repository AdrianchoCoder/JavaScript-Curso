// Acceder a las Propiedades de un Objeto en Js

let persona = {
    nombre: "Adrian",
    edad: 18,
    genero: "Masculino"
}

// La primera forma para acceder a las propiedades que tiene el objeto es:
console.log(persona); // Esto para acceder a todas las propiedades del objeto
console.log(persona.nombre); // Este es para acceder a una propiedad que indiquemos

// La Segunda Forma es a traves de indicarlo como si fuera un indice por medio de un String:
console.log(persona["genero"]); /* Esto Señala por medio del nombre de la propiedad el dato 
que queremos hacer referencia. */

// Esto nos sirve para imprimir todos los datos por medio de un " for in ":
// El for in nos permite recorrer todos los datos que esten en este caso dentro de un objeto
for(propiedades in persona){
    console.log(propiedades); /*Con este console log podemos 
    acceder a todos los nombres de las propiedades*/
    console.log(persona[propiedades]);
};
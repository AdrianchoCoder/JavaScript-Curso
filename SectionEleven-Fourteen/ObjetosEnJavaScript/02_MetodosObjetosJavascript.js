// Agregar Metodos a un Objeto en Javascript
// Los objetos en JavaScript pueden tener métodos, que son funciones asociadas a ese objeto.
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    // Método para concatenar el nombre completo:
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`;
        /* Recordemos que This  se refiere al objeto actual, en este caso 'persona'.
        Asi puede acceder a la informacion que tiene el objeto " Persona ". */
    },
    saludar: function(){
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
        /* Este método devuelve un saludo personalizado utilizando las propiedades del objeto. */
    }
};
// Acceder al método y mostrar el nombre completo
console.log(persona.nombreCompleto()); // Muestra "Juan Perez"
console.log(persona.saludar()); // Muestra un Saludo con el Nombre y la edad de la persona.
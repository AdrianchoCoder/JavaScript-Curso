//CLASE DIRECCION
class Direccion {
    constructor(calle, ciudad) {
        this.calle = calle;
        this.ciudad = ciudad;
    }
    
    // Método para obtener la dirección completa
    obtenerDireccionCompleta() {
        return `${this.calle}, ${this.ciudad}`;
    }
    
    // Método para mostrar la dirección de forma bonita
    mostrarDireccion() {
        console.log(`Dirección: ${this.calle}, ${this.ciudad}`);
    }
}

//CLASE PERSONA
class Persona {
    //Parametros que le Pase al Constructor
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        //Se Coloco como un Valor Privado con "_", Ejemplo:
        this._edad = edad;
        // Agregamos la dirección como propiedad
        this.direccion = direccion;
    }
    
    Saludar(){
        console.log(`¡Hola!, ${this.nombre} con Edad de ${this._edad}`);
    }

    ObtenerSaludo(){
        return `¡Hola!, ${this.nombre} con Edad de ${this._edad}`;
    }

    //Metodo Estatico. Recordar que este no puede acceder a los valores de Instancia sino a los Valores de la Clase como Tal.
    static esMayorDeEdad(edad){
        if (edad >= 18) {
            return true
        }
        else{
            return false
        }
    }

    //Get de Edad Para Llamar al Dato
    getEdad(){
        return this._edad
    }

    //Set de Edad para Modificar su Valor Privado
    setEdad(nuevaEdad){
        this._edad = nuevaEdad
    }
    
    mostrarInfo(){
        console.log("=== Mi Información ===");
        
        for (let prop in this) {
            // Manejo especial para la dirección
            if (prop === 'direccion') {
                console.log(`${prop}: ${this[prop].obtenerDireccionCompleta()}`);
            } else {
                console.log(`${prop}: ${this[prop]}`);
            }
        }   
    }
    
    // MÉTODO: Para mostrar solo la dirección
    mostrarDireccionCompleta() {
        console.log(`${this.nombre} vive en: ${this.direccion.obtenerDireccionCompleta()}`);
    }
    
    // MÉTODO: Para cambiar la dirección
    cambiarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
        console.log(`${this.nombre} se mudó a: ${this.direccion.obtenerDireccionCompleta()}`);
    }
}

//CLASE ESTUDIANTES
class Estudiante extends Persona{
    constructor(nombre, edad, curso, direccion){
        super(nombre, edad, direccion);
        this.curso = curso;
    }
    
    Presentarse(){
        return `¡Hola Me Presento!, ${super.ObtenerSaludo()} y soy del Curso: ${this.curso}`;
    }
    
    // Presentación completa con dirección
    PresentarseCompleto(){
        return `${this.Presentarse()} y vivo en ${this.direccion.obtenerDireccionCompleta()}`;
    }
}

//CLASE CURSO
class Curso{
    constructor(nombreCurso){
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }
    agregarEstudiante(estudiante){
        this.estudiantes.push(estudiante);
    }
    listarEstudiantes(){
        console.log(`\nEstudiantes del Curso: ${this.nombreCurso}`);
        if (this.estudiantes.length === 0) {
            console.log("No hay Estudiantes Registrados");
        }
        else{
            this.estudiantes.forEach((estudiante, index) => {
                console.log(`${index + 1}. ${estudiante.nombre} - ${estudiante._edad} años - Curso: ${estudiante.curso}`);
            });
        }
    }
    
    // Listar estudiantes con sus direcciones
    listarEstudiantesConDireccion(){
        console.log(`\nEstudiantes del Curso ${this.nombreCurso} y sus direcciones:`);
        if (this.estudiantes.length === 0) {
            console.log("No hay Estudiantes Registrados");
        }
        else{
            this.estudiantes.forEach((estudiante, index) => {
                console.log(`${index + 1}. ${estudiante.nombre} (${estudiante._edad} años) - Vive en: ${estudiante.direccion.obtenerDireccionCompleta()}`);
            });
        }
    }
}

//INSTANCIAS

// Crear direcciones primero
let direccion1 = new Direccion("Calle 10 #15-20", "Medellín");
let direccion2 = new Direccion("Carrera 25 #30-45", "Bogotá");
let direccion3 = new Direccion("Avenida 80 #12-34", "Cali");

// MODIFICADO: Crear personas CON direcciones
let persona1 = new Persona("Adrian", 18, direccion1);
let persona2 = new Persona("Eduardo", 20, direccion2);
let persona3 = new Persona("Maria", 15, direccion3);

//Metodo Mostrar Info
console.log("--- PERSONAS CON DIRECCIONES ---");
persona1.mostrarInfo();
persona2.mostrarInfo();

// Mostrar direcciones específicamente
console.log("\n--- DIRECCIONES COMPLETAS ---");
persona1.mostrarDireccionCompleta();
persona2.mostrarDireccionCompleta();
persona3.mostrarDireccionCompleta();

// Crear direcciones para estudiantes
let direccionEst1 = new Direccion("Calle 50 #20-10", "Medellín");
let direccionEst2 = new Direccion("Carrera 15 #25-30", "Medellín");
let direccionEst3 = new Direccion("Avenida 30 #40-50", "Medellín");

//Objetos de Estudiante(Clase Hija) CON direcciones
let estudiante1 = new Estudiante("Quiros", 18, "Sistemas", direccionEst1);
let estudiante2 = new Estudiante("Laura", 16, "Sistemas", direccionEst2);
let estudiante3 = new Estudiante("Sergio", 15, "Sistemas", direccionEst3);

//Instancias Persona Con distintos Valores
persona1.Saludar();
persona2.Saludar();
persona3.Saludar();

//Instancias de Estudiantes
console.log(estudiante1.Presentarse());

// Presentación completa con dirección
console.log("\n--- PRESENTACIONES COMPLETAS ---");
console.log(estudiante1.PresentarseCompleto());
console.log(estudiante2.PresentarseCompleto());
console.log(estudiante3.PresentarseCompleto());

//Valores Estaticos
console.log(`\nAdrian es Mayor de Edad: ${Persona.esMayorDeEdad(18)}`);
console.log(`Eduardo es Mayor de Edad: ${Persona.esMayorDeEdad(20)}`);
console.log(`Maria es Mayor de Edad: ${Persona.esMayorDeEdad(15)}`);

//Instancias de Curso
let cursoSistemas = new Curso("Sistemas");

cursoSistemas.agregarEstudiante(estudiante1); // Quiros estudia "Sistemas"
cursoSistemas.agregarEstudiante(estudiante2); // Laura estudia "Sistemas"  
cursoSistemas.agregarEstudiante(estudiante3); // Sergio estudia "Sistemas"

cursoSistemas.listarEstudiantes();

// Listar estudiantes con sus direcciones
cursoSistemas.listarEstudiantesConDireccion();

// Cambiar dirección
console.log("\n--- EJEMPLO DE CAMBIO DE DIRECCIÓN ---");
let nuevaDireccion = new Direccion("Calle Nueva #100-200", "Barranquilla");
persona1.cambiarDireccion(nuevaDireccion);
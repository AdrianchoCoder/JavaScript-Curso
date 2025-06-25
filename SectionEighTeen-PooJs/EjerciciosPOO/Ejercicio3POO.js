//Clase Persona
class Persona{
    //Constructor con parametros o argumentos
    constructor(nombre,edad){

        //atributos
        this.nombre = nombre;
        this.edad = edad;
    }

    //Metodos
    esMayorDeEdad(){
        if (this.edad >= 18) {
            return `Eres Mayor de Edad ${this.nombre}: ${true}`;
        }
        else {
            return `Eres Mayor de Edad ${this.nombre}: ${false}`;
        }
    }

    Saludar() {
        return `¡Hola ${this.nombre} de edad ${this.edad}!`;
    }
};

//Clase Hija Estudiante de Padre Persona
class Estudiante extends Persona{
    constructor(nombre,edad,curso){
        super(nombre,edad);
        this.curso = curso;
    }
    Presentarse(){
        return `${super.Saludar()} del Curso: ${this.curso}`;
    }
}

//Objetos

//Persona Objetos
let persona1 = new Persona("Adrian", 18);
let persona2 = new Persona("Alejandra", 15);

//Estudiantes Persona
let estudiante1 = new Estudiante("Jaimes", 20, "Matematicas");
let estudiante2 = new Estudiante("Paola", 22, "Programacion");

//Imprimir

//Persona
console.log(persona1.Saludar());
console.log(persona1.esMayorDeEdad())
console.log(persona2.Saludar());
console.log(persona2.esMayorDeEdad())

//Estudiante
console.log(estudiante1.Presentarse())
console.log(estudiante2.Presentarse())
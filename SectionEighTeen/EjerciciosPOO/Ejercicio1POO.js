class Persona {
    //Parametros que le Pase al Constructor
    constructor(nombre,edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Saludar(){
        console.log(`¡Hola!, ${this.nombre} con Edad de ${this.edad}`);
    }

    ObtenerSaludo(){
        return `¡Hola!, ${this.nombre} con Edad de ${this.edad}`;
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
}

class Estudiante extends Persona{
    constructor(nombre,edad, curso){
        super(nombre,edad);
        this.curso = curso;
    }
    Presentarse(){
        return `¡Hola Me Presento!, ${super.ObtenerSaludo()} y soy del Curso: ${this.curso}`;
    }
}

//Objetos de Persona(Clase Padre)
let persona1 = new Persona("Adrian", 18);
let persona2 = new Persona("Eduardo", 20);
let persona3 = new Persona("Maria", 15);

//Objetos de Estudiante(Clase Hija)
let estudiante1 = new Estudiante("Quiros", 18, "Sistemas");

//Instancias Persona Con distintos Valores
persona1.Saludar();
persona2.Saludar();
persona3.Saludar();

//Instancias de Estudiantes
console.log(estudiante1.Presentarse())


//Valores Estaticos
console.log(`Adrian es Mayor de Edad: ${Persona.esMayorDeEdad(18)}`)
console.log(`Eduardo es Mayor de Edad: ${Persona.esMayorDeEdad(20)}`)
console.log(`Maria es Mayor de Edad: ${Persona.esMayorDeEdad(15)}`)

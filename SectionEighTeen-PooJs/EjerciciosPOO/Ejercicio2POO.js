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

//Objetos

let persona1 = new Persona("Adrian", 18);
let persona2 = new Persona("Alejandra", 15);

//Imprimir
console.log(persona1.Saludar());
console.log(persona1.esMayorDeEdad())
console.log(persona2.Saludar());
console.log(persona2.esMayorDeEdad())
//EJEMPLO DE HERENCIA
//POO en JavaScript
class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerInformacion(){
        return `Empleado: Nombre: ${this.nombre} Sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerInformacion(){
        return `Gerente: ${super.obtenerInformacion()} departamento: ${this.departamento}`;
    }
}

let empleado1 = new Empleado("Juan", 1000);
console.log(empleado1.obtenerInformacion())

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1.obtenerInformacion());
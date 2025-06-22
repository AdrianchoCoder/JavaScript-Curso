//EJEMPLO DE HERENCIA CON POLIMORFISMO
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

//Funcion Que permite el Polimorfismo entre La Clase Empleado(Padre) y La Clase Gerente(Hija).
function imprimir(tipo){
    console.log(tipo.obtenerInformacion());
}

let empleado1 = new Empleado("Juan", 1000);

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");

//Aqui se Muestra como se Imprimela Funcion A traves del Polimorfismo
imprimir(empleado1);
imprimir(gerente1);

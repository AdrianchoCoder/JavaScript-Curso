//Operadores Aritmeticos
// Operadores Aritmeticos
let a, b, c, d, e, f;

// Suma
a = 3 + 4;
console.log(a);

// Resta 
b = 6 - 2;
console.log(b);

//  Multiplicacion
c = a * 2;
console.log(c);

// Division 
d = b / 2.5;
console.log(d);
console.log(typeof d);

// Modulo (residuo de la division)
f = 9 % 2;
console.log(f);

// Potencia (ES2016 - ECMAScript 2016)
e = 2 ** 3; // 2 * 2 * 2 = 8
console.log(e);

e = Math.pow(2,3); // Esto de aqui es para realizar una potencia si es que estamos utilizando una version antigua de JavaScript como dice arriba.
console.log(e);

//Operadores de Asignacion

// Asignacion
let x = 5;
console.log(x);
// Asignacion con Suma
x += 3; // x = x + 3
console.log(x);
// Asignacion con Resta
x -= 2; // x = x - 2
console.log(x);
// Asignacion con Multiplicacion
x *= 2; // x = x * 2
console.log(x);
// Asignacion con Division
x /= 4; // x = x / 4
console.log(x);
// Asignacion con Modulo
x %= 3; // x = x % 3
console.log(x);
// Asignacion con Potencia
x **= 2; // x = x ** 2
console.log(x);
// Asignacion con Concatenacion
let str = "Hola";
str += " Mundo"; // str = str + " Mundo"
console.log(str);
// Asignacion con Concatenacion de cadenas
let str2 = "JavaScript";
str2 += " es genial"; // str2 = str2 + " es genial"
console.log(str2);
// Asignacion con Concatenacion de cadenas y numeros
let str3 = "El resultado es: ";
str3 += 42; // str3 = str3 + 42
console.log(str3);
// Asignacion con Concatenacion de cadenas y booleanos
let str4 = "El valor es: ";
str4 += true; // str4 = str4 + true
console.log(str4);

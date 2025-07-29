//Conseguir el Valor Absoluto de un Numero
let numero = -10;
//Forma 1: Usando Math.abs
let valorAbsoluto = Math.abs(numero);
console.log(valorAbsoluto); // 10 Esto sirve para cualquier numero negativo o positivo.

/* ¿Para qué sirve el valor absoluto?
El valor absoluto es útil cuando lo importante es la distancia numérica sin importar la dirección. Algunos casos comunes:

🧮 Comparar diferencias sin importar si son positivas o negativas (por ejemplo, para saber cuánto se ha desviado un valor).

📐 Calcular distancias entre puntos en coordenadas.

🧊 Evitar valores negativos en cálculos como temperaturas, tiempo, o puntuaciones.

🚦 Normalizar valores antes de mostrarlos en pantalla o en gráficos. */
/* 
Algunos detalles técnicos:
Entrada	        Salida
Math.abs(-10)	10
Math.abs(0)	0
Math.abs(7.5)	7.5
Math.abs("5")	5 (convierte string a número)
Math.abs(null)	0
Math.abs("abc")	NaN
 */

//Rendondeo y Truncado en JavaScript
let numeroDecimal = 5.7, redondeado, truncado; // Tener en cuenta que a partir de .5 se redondea al valor positivo más cercano.
//Redondeo
//Usando Math.round
redondeado = Math.round(numeroDecimal);
console.log(redondeado); // 6

//Truncado
//Usando Math.trunc Elimina la parte decimal y devuelve solo la parte entera.
//Nota: Math.trunc no redondea, simplemente corta la parte decimal.
truncado = Math.trunc(numeroDecimal);
console.log(truncado); // 5

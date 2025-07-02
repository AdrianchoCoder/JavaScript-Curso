//Ciclo For
//Imprimir valores del 0 al 10
for (let contador = 0; contador <= 10; contador++) {
    console.log(contador);
}

//imprimir los Numeros del 1 al 10 de 3 en 3
let maximo = 10, minimo = -10;
for (let numero = 1; numero <= maximo; numero += 3) {
    console.log(numero);
}


//imprimir los Numeros del 1 al -10 de 3 en 3
for (numero = 1; numero >= minimo; numero -= 3){
    console.log(numero);
}

//Realizar la Suma de los Primeros 5 Numeros utilizando un Ciclo For
let sumador = 0
for (let numero = 1; numero <= 5; numero++){
    sumador += numero;
    console.log(`Numero: ${numero}`)
    console.log(`Sumatoria de los Numeros: ${sumador}`);
}
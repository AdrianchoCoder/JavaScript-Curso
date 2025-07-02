//Matrices JavaScript

//Declarar una Variable
let matriz = [[],[]];

//Modificar los Valores de una Matriz
/*El primer " [] ", hace referencia a los indices de una matriz y la otra " [] ",
hace referencia a las columnas de esos indices de las matrices.
En la Imagen Ejemplo Matriz se Explica esto que escribo aca.*/
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[1][0] = 300;
matriz[1][1] = 400;

//Leer Valores
console.log(`Matriz Indice [0], Columna [0]: ${matriz[0][0]}`)
console.log(`Matriz Indice [0], Columna [1]: ${matriz[0][1]}`)
console.log(`Matriz Indice [1], Columna [0]: ${matriz[1][0]}`)
console.log(`Matriz Indice [1], Columna [1]: ${matriz[1][1]}`)

//Iterar Valores de una Matriz
/*Primero debemos tener en cuenta cuantos valores tiene el arreglo
" Indice o Reglon ", de la siguiente manera: */
console.log(matriz.length); /* Como se Puede Observar tenemos dos " Indices"
en la matriz*/

/*Ahora debemos hacer lo mismo con sus " columnas "" de cada Indice, de la
siguiente manera: */
console.log(matriz[0].length)
console.log(matriz[1].length)
/*Con esto ya Sabremos cuantos datos o valores tiene una matriz con sus
elementos.*/

//Ciclo For
//Primero debemos Iterar Los " Indices ", De la Siguiente manera:
for (let indice = 0; indice < matriz.length;indice++) {
    /*Como se puede observar lo que hacemos, es que con la variable " Indice ",
    le damos el valor 0 de inicio, pues los arreglos y las matrices comienzan con ese valor, y este ira incrementando hasta llegar al maximo de indices o
    reglones que hayan en la matriz, luego dentro de este Ciclo For, realizaremos otro Ciclo donde de la misma manera iteraremos las Columnas de los indices:*/
    for (let columna = 0; columna < matriz[indice].length; columna++){
        /*Como se puede observar la variable columna empieza desde cero para luego ir incrementando su valor para asi pasar por cada columna de los indices en este caso empezara con el indice 0, para luego pasar al siguiente indice y a los siguientes valores de ese indice: */
        console.log(`Elemento [${[indice]}][${columna}]: ${matriz[indice][columna]}`)
    }
    
}

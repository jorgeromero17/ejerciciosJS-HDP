// Jorge Eduardo Romero García RG19041
/* 7- Escribir el algoritmo que permita escribir el contenido de una tabla de dos dimensiones (3 × 4) */

//creamos la matriz de 3x4
let matriz = new Array(3);
 for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(4);
}
//pedimos al usuario que ingrese valores a esta matriz
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        matriz[i][j] = window.prompt(`Ingrese el contenido de su tabla 3x4 [${i}][${j}] :`);
    }    
}

console.table(matriz);


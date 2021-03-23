// Jorge Eduardo Romero García RG19041
/* 2- Calcular la suma de los elementos de la diagonal principal de una matriz cuatro por cuatro (4×4) */

//declaramos la matriz de 4x4
let matriz = new Array(4);
for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(4);
}
//pedimos al usuario que ingrese valores a esta matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        matriz[i][j] = parseInt(window.prompt(`Ingrese el valor en la posicion [${i}][${j}] :`));
    }    
}
//metodo para sumar la diagonal
let sumardiagonal = (matriz) => {
    let sumadiagonal = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(i==j){
                sumadiagonal += matriz[i][j];
                //console.log(`( ${i}, ${j})`);
            }
        } 
    }
    return sumadiagonal;
}
//llamamos al metodo
let resultado = sumardiagonal(matriz);
//mostramos resultado con un alert
alert(`La sema de la diagonal de la matriz 4x4 es: ${resultado}`);

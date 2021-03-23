// Jorge Eduardo Romero García RG19041
/* 1- Leer una matriz de 3 por 3 elementos y calcular la suma de cada una de sus filas y columnas,
dejando dichos resultados en dos vectores, uno de la suma de las filas y otro de las columnas. */

//creamos la matriz de 3x3
let matriz = new Array(3);
for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3);
}
//pedimos al usuario que ingrese valores a esta matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        matriz[i][j] = parseInt(window.prompt(`Ingrese el valor en la posicion [${i}][${j}] :`));
    }    
}
//realizamos un metodo que haga los calculos y muestre los resultados
let sumarfc = (matriz) => {
    let sumafilas = [];
    let sumacolumnas = [];
    let sumaf = 0;
    let sumac = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            sumaf = sumaf + matriz[i][j];
            sumac = sumac + matriz[j][i];
        } 
        sumafilas.push(sumaf);
        sumacolumnas.push(sumac); 
        sumaf = 0;
        sumac = 0;
    }
    alert(`Array de la suma de las filas: ${sumafilas} \nArray de la suma de las columnas:  ${sumacolumnas}`);   
}
//llamamos al metodo
sumarfc(matriz);













// Jorge Eduardo Romero García RG19041
/* 6- Dada una lista L de N elementos, diseñar un algoritmo que calcule de forma independiente la
suma de los números pares y la suma de los números impares.
*/

let n = parseInt(prompt(`Ingresa cuantos elementos tendrá su lista:`));

function obtenerLista(){
    let valor;
    let lista = [];

    for (let i = 0; i < n; i++) {
        valor = parseInt(prompt(`Ingresa elemento: [${i+1}]:`));
        lista.push(valor);
    }

    return lista;
}

function calcular() {
    let sumapar = 0;
    let sumaimpar = 0;
    let lista = obtenerLista();

    for (let i = 0; i < n; i++) {
        console.log((lista[i]%2));
        if((lista[i]%2) === 0){
            sumapar += lista[i];
        }
        else{
            sumaimpar += lista[i];
        }
    }

    console.log(sumapar);
    return {sumapar,sumaimpar};
}

function imprimirResultado(){
    let {sumapar,sumaimpar} = calcular();

    alert(`La suma de los numeros pares de su lista es: ${sumapar}
La suma de los impares par de su lista es: ${sumaimpar}`)

}

imprimirResultado();
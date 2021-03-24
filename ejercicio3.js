// Jorge Eduardo Romero García RG19041
/* 3- Se dispone de una lista (vector) de N elementos. Se desea diseñar un algoritmo que permita
insertar el valor x en el lugar k-ésimo de la mencionada lista. */

let lista = [2,3,4,5,71,53,12,16,24];
let posicion = parseInt(prompt(`lista actual: ${lista}    Ingrese la posicion en la que desee ingresar un nuevo valor: `));

let addKesimo = (posicion,lista) => {
    if(posicion<=lista.length && posicion!==0){//el arreglo para el usuario comienza desde la posicion 1, ya que el no esta acostumbrado a contar desde 0
        let valorx = parseInt(prompt("Ingrese el valor: "));

        let parte1 = [];
        let parte2 = [];

        for(let i = 0; i < posicion-1; i++){ //se toma la primer parte de nuestra lista hasta un posicion antes de donde se agregara el valor x
            parte1.push(lista[i]);
        }

        for(let i = posicion-1; i < lista.length; i++){// de lo anterior dicho pa delante se hace parte 2
            parte2.push(lista[i]);
        }

        parte1.push(valorx); //se le pushea el nuevo valor a la parte 1 de la lista

        for(let i = 0; i < parte2.length; i++){ //se una la parte uno ya con el nuevo valor y se pega con pega loca con la parte 2
            parte1.push(parte2[i]);
        }

        alert(`La nueva lista: ${parte1}`);
    }
    else{
        alert("La posicion indicada no existe en el arreglo");
    }
}

addKesimo(posicion,lista);

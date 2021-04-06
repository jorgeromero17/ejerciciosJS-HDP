// Jorge Eduardo Romero García RG19041
/* 5- Se dispone de N temperaturas almacenadas en un array. Se desea calcular su media y
obtener el número de temperaturas mayores o iguales que la media.*/

//array de temperaturas en celcius 
let temperaturas = [30,24,28,31,33,26,38,19,17];

console.log("Temperaturas en celcius")
console.log(temperaturas);

//funcion para calcular la media
let calcularmedia = (temperaturas) => {
    let suma = 0;
    for (let i = 0; i < temperaturas.length; i++) {
        suma += temperaturas[i];
    }
    let media = suma/temperaturas.length;
    return media;
}

//funcion para calcular los mayores que la media, devuelve el resultado
let mayoresquemedia = () => {
    let contador = 0;
    let media = calcularmedia(temperaturas);

    for(let temperatura of temperaturas){
        if(temperatura>=media){
            contador += 1;
        }
    }
    return `la media de las temperaturas es: ${media} /n hay ${contador} temperaturas mayores a la media `;
}

let resultado = mayoresquemedia();
console.log(resultado);
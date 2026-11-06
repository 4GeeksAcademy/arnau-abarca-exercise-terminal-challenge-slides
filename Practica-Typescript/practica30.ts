//Ejercicio 31 - filter, find e includes
const tiempos: number[] = [25.67, 26.19, 25.81, 27.10, 24.95];
//Tiempos inferiores a 26s

const tiemposRapidos = tiempos.filter((tiempo) => {
    return tiempo < 26;
});
console.log(tiemposRapidos);

//utilizaría filter en lugar de map porque me intersa obtener valores concretos del array y no modificar los valores del array.

const primertiempoRapido = tiempos.find((tiempo) => {
    return tiempo < 26;
});
console.log(primertiempoRapido);

console.log(tiempos.includes(25.81));
console.log(tiempos.includes(24.50));

//La diferencia entre find y includes es que find busca el primer valor que cumple con la condición establecida mientras que includes mira si alguno de los valores del array coincide con el valor especificado.

//Ejercicio 32 sort

tiempos.sort();
console.log(tiempos);

tiempos.sort((a,b) => a - b);
console.log(tiempos);

tiempos.sort((a,b) => b - a);
console.log(tiempos);

// cuando a es menor que b puede devolver un número negativo porque la resta del primer elemento del array vs el segundo es negativa. Por otra lado, b - a es al revés. Por eso, si queereos ordenar de menor a mayor haremos a -b y si queremos ordenar de mayor a menor haremos b - a. 

//Ejercicio 33 - reduce()
const sumarTiempos = tiempos.reduce((acumulador, tiempos) => {
    return acumulador + tiempos;
}, 0);

console.log(sumarTiempos);

const tiempoPromedio = ((sumarTiempos / tiempos.length));

console.log(tiempoPromedio);

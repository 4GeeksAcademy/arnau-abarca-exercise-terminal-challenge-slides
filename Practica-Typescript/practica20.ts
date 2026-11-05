//Ejercicio 20 - null, undefined y validación de datos
const nadador: string = "Arnau";
let tiempo: number | null = 25.67;
let posicion: number | undefined = 2;

if (tiempo === null) {
    console.log("Arnau todavía no ha competido")
}
if (tiempo !== null) {
    console.log(`Arnau ha registrado un tiempo de ${tiempo} segundos`)
}
if (posicion === undefined) {
    console.log(`lA POSICIÓN TODAVIA NO ESTÁ DISPONIBLE`)
}
if(posicion !== undefined) {
    console.log(`Arnau ha terminado en la posición ${posicion}`) 
}

//Ejercicio 21 - Operadores matemáticos

const nadadores: number = 17;
const nadadoresPorSerie: number = 4;

console.log(`Series completas: ${Math.floor(nadadores/nadadoresPorSerie)}`);
console.log(`Nadadores sobrantes: ${nadadores % nadadoresPorSerie}`);

const seriesCompletas: number = Math.floor(nadadores/nadadoresPorSerie);

console.log(`El cuadrado de ${seriesCompletas} es ${seriesCompletas ** 2}`);

//Ejercicio 22 - Presentación de nadadores

function presentarNadador(nombre: string, club: string = "independiente"): void {
    console.log(`${nombre} compite con el club ${club}`)
}

presentarNadador("Arnau");
presentarNadador("Uri Tapias", "CN Terrassa");

// Club?:string hace que el parámetro club sea opciona. Club:string = "Independiente" hace que el valor por defecto del parámetro club sea "Independiente".

//Ejercicio 23 - Las tres formas de declarar funciones

function duplicarTradicional(a: number): number {
    return a * 2;
}
const duplicarExpresion = function (a: number): number {
    return a * 2;
}
const duplicarArrow = (a: number): number => { return a * 2;}

console.log(duplicarTradicional(5));
console.log(duplicarExpresion(5));
console.log(duplicarArrow(5));

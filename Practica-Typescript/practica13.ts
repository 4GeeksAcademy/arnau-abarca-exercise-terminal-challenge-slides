//Ejercicio 13 - Scope de variables
const nombre: string = "Arnau";
const ciudad: string = "Barcelona";
let temperatura: number = 25;
let humedad: number = 60

if (true) {
    console.log(ciudad);
    console.log(temperatura);
    console.log(humedad);
}

console.log(ciudad);
console.log(temperatura);
console.log(humedad);

//Ejercicio 14 - null, undefined y operadores en TypeScript
const nadador: string = "Arnau";
let tiempo: number = 24.5;
let posicion: number = 1;

if (tiempo === null) {
    console.log(`Arnau todavía no tiene un tiempo registrado`);
}
else if (tiempo !== null) {
    console.log(`El tiempo de Arnau es de ${tiempo}`);
}

if (posicion === undefined) {
    console.log(`La posición de Arnau todavía no está disponible`);
}
else if (posicion !== undefined) {
    console.log(`La posición de Arnau es ${posicion}`);
}
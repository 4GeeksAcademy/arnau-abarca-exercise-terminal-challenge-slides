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

//Ejercicio 15 - Mi primera función
function saludo(): void {
    console.log("Hola Arnau");
}
saludo();

function presentarme (): void {
    console.log("Hola, estoy aprendiendo typescript");
}
presentarme();

//Ejercicio 16 - presentarNadador
function presentarNadador(nadador: string): void {
    console.log(`El nadador se llama ${nadador}`);
}
presentarNadador("Uri Tapias");

//Ejercicio 17 - funciones con 2 parámetros
function presentarResultado(nadador: string, tiempo: number): void {
    console.log(`El nadador ${nadador} tiene una marca de ${tiempo}`);
}
presentarResultado("Uri Tapias", 24.68);


//Ejercicio 1 - Tu primera ficha personal
const nombre: string = "Arnau";
let edad: number = 29
const estudiaAI: boolean = true;

console.log(edad);

edad = 30

console.log(nombre);
console.log(edad);
console.log(estudiaAI);

//Ejercicio 2 — Detective de errores TypeScript
const precio: number = 25;
let disponible: boolean = true;
let producto: string = "Monitor";

console.log(producto);

producto = "Teclado";

console.log(precio);
console.log(disponible);
console.log(producto);

//Ejercicio 3 - La lista de la compra
const compra: string[] = ["Leche", "Pollo", "Pan"];
compra.push("Huevos");
console.log(compra[1]);
console.log(compra);

//Ejercicio 4 - Ficha de un nadador
const nadador: {nombre: string, edad: number, especialidad: string, tiempo50Libre: number} = {
    nombre: "Arnau Abarca Salvado",
    edad: 29,
    especialidad: "Mariposa",
    tiempo50Libre: 24.96
}
console.log(nadador.especialidad);

nadador.tiempo50Libre = 24.50;
console.log(nadador);

//Ejercicio 5 - Calculadora de Ahorro

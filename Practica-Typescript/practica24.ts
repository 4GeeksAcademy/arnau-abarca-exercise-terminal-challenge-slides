//Ejercicio 24 - Normalizar una funciºn
const nombre: string = "    aRnAu aBaRcA "
function normalizarNombre(nombre: string): string {
    const nombreLimpio: string = nombre.trim();
    const nombreMinusculas: string = nombreLimpio.toLowerCase();
    const nombreMayusculas: string = nombreMinusculas.toUpperCase();
    return nombreMayusculas;
}
console.log(normalizarNombre(nombre));

console.log(normalizarNombre(nombre).includes("ABARCA"));

//Ejercicio 25 - Funciones con datos opcionales
function mostrarResultado(nombre: string, tiempo?: number, prueba: string = "50 libre") {
    if (tiempo === undefined) {
        return (`${nombre} no tiene tiempo registrado en ${prueba}`)
    } else {
        return (`${nombre} ha completado ${prueba} en ${tiempo} segundos`)
    }
}
console.log(mostrarResultado("Arnau", 25.67));
console.log(mostrarResultado("Uri", undefined, "100 mariposa"));
console.log(mostrarResultado("Marta", 28.50, "50 mariposa"));

//Ejercicio 26 - Funciones que devuelven arrays y objetos
function obtenerTiempos(): number[] {
    return [25.67, 26.19, 25.81]
}
const tiempos = obtenerTiempos();

console.log(tiempos);

function obtenerNadador(): {nombre: string, prueba: string, tiempo: number} {
    return {
        nombre: "Arnau",
        prueba: "50 libre",
        tiempo: 25.67
    };
}
const nadador = obtenerNadador();
console.log(`${nadador.nombre}: ${nadador.tiempo} segundos`);


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
const saldoInicial: number = 1000;
let aportacion: number = 200;
let gasto: number = 75;
let saldoFinal: number = saldoInicial + aportacion - gasto;
console.log(saldoFinal);
console.log(`Tu saldo final es de ${saldoFinal} euros`);
saldoFinal += 50;
console.log(saldoFinal);

//Ejercicio 6 - Control de Acceso
const edadUsuario: number = 25; 
const tieneEntrada: boolean = false;
if (edadUsuario >=18 && tieneEntrada===true) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}
//Si utilizamos || en lugar de &&, el acceso se permitiría si el usuario tiene entrada o si es mayor de 18 años, no necesariamente ambas condiciones.

//Ejercicio 7 - Clasificador de Temperaturas
const temperatura: number = 30;
if (temperatura < 10) {
    console.log("Frío");
} else if (temperatura >= 10 && temperatura < 20) {
    console.log("Fresco");
} else if (temperatura >= 20 && temperatura < 30) {
    console.log("Temperatura Agradable")
} else if (temperatura >= 30) {
    console.log("Mucho calor")
}

//Ejercicio 8 - Máquina de Café
const bebida: string = "te"
switch (bebida) {
    case "cafe":
        console.log("2$");
        break;
    case "te":
        console.log("3$");
        break;
    case "zumo":
        console.log("4$");
        break;
    default:
        console.log("Bebida no disponible");
        break;
}
//Si no escribimos break en cada case, la ejecución continuará con el siguiente case hasta encontrar un break o el final del switch. Esto se llama "fall-through".

//Ejercicio 9 - Recorrer una lista de entrenamientos
const actividades: string[] = ["Natación", "Gimnasio", "Descanso"];
for (let i=0; i<actividades.length; i++) {
    console.log(actividades[i]);
}
//la diferencia entre i<actividades.length y i<=actividades.length es que el primero recorre correctamente todos los elementos del array, mientras que el segundo intentaría acceder a un índice fuera del rango del array, causando un error.

//Ejercicio 10 - Bucles while y do...while
//Parte A
let contador: number = 1;
while (contador <=5) {
    console.log (contador);
    contador++;
}
//Parte B
let contador2: number = 1;
do {
    console.log(contador2);
    contador2++;
} while (contador2 <=5);

//Ejercicio 11 - Analizador de tiempos de natación
const tiemposNatacion: number [] = [26.2, 25.9, 27.1, 25.5];

for (let i=0; i<tiemposNatacion.length; i++)
    if (tiemposNatacion[i] < 26) {
        console.log(`${tiemposNatacion[i]} - Excelente`)
    }
    else {
        console.log(`${tiemposNatacion[i]} - A mejorar`);
    }
let TiemposTotal: number = 0
 for (let i=0; i<tiemposNatacion.length; i++) {
    TiemposTotal += tiemposNatacion[i];
    console.log(TiemposTotal)
}
console.log(`La suma del Tiempo Total es de ${TiemposTotal}`);
{
    const TiempoPromedio: number = TiemposTotal / tiemposNatacion.length;
console.log(`El tiempo promedio es de ${TiempoPromedio}`);
}

//Ejercicio 12 - Mini-dashboard financiero
const productos: {
    nombre: string;
    ingresos: number;
    costes: number;
} [] = [
    {nombre: "Oxford Analytica", ingresos: 500, costes: 300},
    {nombre: "Global Risk Monitor", ingresos: 200, costes: 200},
    {nombre: "Dragonfly", ingresos: 150, costes: 250}
]

for (let i=0; i<productos.length; i++) {
    let beneficios : number = productos[i].ingresos - productos[i].costes;
if (beneficios<0) {console.log(`El beneficio de ${productos[i].nombre} es de ${beneficios}. PÉRDIDAS`)
}
else if (beneficios===0) {console.log(`El beneficio de ${productos[i].nombre} es de ${beneficios}. EQUILIBRADO`)
}
else if (beneficios>0) {console.log(`El beneficio de ${productos[i].nombre} es de ${beneficios}. RENTABLE`)
}
}

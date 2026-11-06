//Ejercicio 34 - Matrices y bucles anidados
//Arrays dentro de otros arrays (matricoes o arrays bidimensionales)

const tiemposCompeticion: number[][] = [
    [25.67, 26.19, 25.81],
    [27.10, 26.85, 27.30],
    [24.95, 25.12, 25.40]
];

console.log(tiemposCompeticion[2][1]);

for (let i = 0; i < tiemposCompeticion.length; i++) {
    for (let j = 0; j < tiemposCompeticion[i].length; j++) {
        console.log(`Nadador ${i + 1} - Prueba ${j + 1}: ${tiemposCompeticion[i][j]}`);
    }
}

//Ejercicio 35 - Mini-dashboard financiero
const productos = [
    { nombre: "Oxford Analytica", ingresos: 500, costes: 300 },
    { nombre: "Global Risk Monitor", ingresos: 200, costes: 250 },
    { nombre: "Dragonfly", ingresos: 400, costes: 150 }
];

const beneficioProductos = productos.map((producto) => producto.ingresos - producto.costes);




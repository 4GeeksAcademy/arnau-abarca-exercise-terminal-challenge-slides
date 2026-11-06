//Ejercicio 27 - Repaso integrador de fundamentos
const tiempos: number[] = [25.67, 26.19, 25.81, 27.10, 24.95];
let contadorRapidos: number = 0;
for (let i = 0; i < tiempos.length; i++) {
    if (tiempos[i] < 26) {
        console.log(`Marca rápida: ${tiempos[i]} segundos`)
        contadorRapidos++;
    } else {
        console.log(`Marca mejorable: ${tiempos[i]} segundos`)
    }
}
console.log(`Total de marcas rápidas: ${contadorRapidos}`);

const prueba: string = "";

switch (prueba) {
    case "50 libre":
        console.log("Prueba de velocidad");
        break;
    case "100 libre":
        console.log("Prueba de velocidad y resistencia");
        break;
    case "":
        console.log("Prueba no especificada");
        break;
}

//La diferencia entre while y do..while es que el bucle se ejecuta después de evaluar la condición en while y en do...while se ejecuta al menos una vez antes de evaluar la condición.


//Ejercicio 29 - Recorrer arrays de cuatro maneras
const nadadores: string[] = ["Arnau", "Uri", "Marta", "Pau"];
for (const nadador of nadadores) {
    console.log(nadador)
}

for (const indice in nadadores) {
    console.log(`${indice}-${nadadores[indice]}`)
}

nadadores.forEach((nadador) => {
    console.log(`Participante: ${nadador}`)
})

//La diferencia entre for (const nadador of nadadores) y nadadores.forEach((nadador) => { ... }); es que for define la variable nadador y ejecuta el bucle mientras que forEach necesita tener la variiable definida previamente


//Ejercicio 30 - Transformar arrays con .map()
const tiempos: number[] = [25.67, 26.19, 25.81];
const tiemposcentesimas = tiempos.map((tiempo) => {
    return tiempo * 100;
});

console.log(tiemposcentesimas);


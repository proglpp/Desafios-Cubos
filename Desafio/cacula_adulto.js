const lista = [1, 2, 1, 6, 9, 8, 12]

const maiores = inputLista.filter((numeros) => {
    return numeros >= 18
})
const resultado = maiores.sort((a, b) => {
    return a - b
})

resultado[0] === undefined ? console.log("CRESCA E APARECA") : console.log(resultado[0]);

// 2 forma

const maiores2 = inputLista.filter((numeros) => {
    return numeros >= 18
})

const novaArray = []
for (let i = 0; i < maiores2.length; i++) {
    let ordem = maiores2[i]
    for (let j = i + 1; j < maiores2.length; j++) {
        if (maiores2[j] < ordem) {
            ordem = maiores2
        }
    }
    novaArray.push(ordem);
}
novaArray[0] === undefined ? console.log("CRESCA E APARECA") : console.log(novaArray[0]);
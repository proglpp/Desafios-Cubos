const inputValores = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const inputMin = 2
const inputMax = 6

const resultado = inputValores.filter((numeros) => {
    return numeros >= inputMin && numeros <= inputMax

})

console.log(resultado)
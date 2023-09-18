const inputPrecos = [200, 150, 50, 100]

const resultado = inputPrecos.reduce((acc, cur) => {
    return acc + cur
})
let menorValor = Math.min(...inputPrecos) / 2

inputPrecos.length >= 3 ? console.log(resultado - menorValor) : console.log(resultado)
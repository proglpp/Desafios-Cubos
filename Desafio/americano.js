const inputNumeros = [1, 3, 2, 1]

const soma = inputNumeros.reduce((acc, cur) => {
    return acc + cur
})

soma % inputNumeros.length === 0 ? console.log(inputNumeros.length) : console.log(soma % inputNumeros.length)
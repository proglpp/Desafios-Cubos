const input = [2, 3, 4]

const resultado = input.reduce((acc, cur) => {
    return acc + cur
})
console.log(resultado / input.length)
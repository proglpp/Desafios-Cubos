const input = "cApS"



let resposta;
if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
    resposta = input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase()
} else if (input === input.toUpperCase()) {
    resposta = input.toLowerCase()
} else {
    resposta = input
}
console.log(resposta)


const a = input.trim().split('')
const quantidadeDeLetras = a.length - 1

const minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const maiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let contadorDeTrue = 0
let contadorDeFalse = 0

const contar = a.map((letra) => { maiusculas.includes(letra) ? contadorDeTrue++ : contadorDeFalse++ })

if (contadorDeFalse === 0 || (minusculas.includes(input[0]) && quantidadeDeLetras === contadorDeTrue)) {
    const resultado = a.map((letra) => {
        if (maiusculas.includes(letra)) {

            return letra.toLowerCase()

        } else if (minusculas.includes(letra)) {

            return letra.toUpperCase()

        } else {
            return letra
        }
    })
    console.log(resultado.join(''))
} else {
    console.log(input)
}

let resultado;

if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
    resultado = input.replace(/([a-z]{1})([A-Z]{1,100000})/, function (regex, argumento1, argumento2) {
        return argumento1.toUpperCase() + argumento2.toLowerCase()
    })
} else if (input === input.toUpperCase()) {
    resultado = input.toLowerCase()
} else {
    resultado = input
}
console.log(resultado)
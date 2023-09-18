const inputCarta = 3

const opcoes = ["Q", "J", "K", "A", "2", "3"]

const resultado = opcoes.indexOf(inputCarta.toString().trim())
if (resultado !== 5) {
    console.log(opcoes[resultado + 1])
} else {
    console.log(opcoes[0])
}
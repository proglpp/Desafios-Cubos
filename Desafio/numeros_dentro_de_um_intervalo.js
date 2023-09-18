const inputNumero = 10
const inputLimiteInferior = 5
const inputLimiteSuperior = 15

function provaReal(numero, limiteInferior, limiteSuperior) {
    return numero >= limiteInferior && numero <= limiteSuperior
}
provaReal(inputNumero, inputLimiteInferior, inputLimiteSuperior) ? console.log("PERTENCE") : console.log("NAO PERTENCE")
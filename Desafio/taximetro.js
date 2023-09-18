const inputMIN = 18
const inputKM = 7.5

let valor = 0

if (inputKM <= 10) {
    valor += (inputKM * 70)
} else {
    valor += (10 * 70) + ((inputKM - 10) * 50)
}
if (inputMIN <= 20) {
    valor += (inputMIN * 50)
} else {
    valor += (20 * 50) + ((inputMIN - 20) * 30)
}
console.log(valor)
const inputTexto = "Cuidado, pois        usuarios as vezes       deixam espacos vazios no fim do texto sem querer "
console.time('TempoLoop')
const novo = inputTexto.split(' ');

while (novo.indexOf('') !== -1) {
    novo.splice(novo.indexOf(''), 1)
}

novo[novo.length - 1] === '' ? console.log(novo.length - 1) : console.log(novo.length)

// 2 forma

console.log(inputTexto.split(' ').filter(Boolean).length);

console.timeEnd('TempoLoop')
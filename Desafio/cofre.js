const input = "cubos\ncuggbyos"

const novoInput = input.split('\n')


const arrTentativa = novoInput[1].split('')
const arrCofreSenha = novoInput[0].split('')

const resposta = arrCofreSenha.filter((letraSenha) => {

    let inclui = arrTentativa.includes(letraSenha)


    const index = arrTentativa.findIndex((letraInput) => {
        return letraInput === letraSenha
    })


    arrTentativa.splice(0, index + 1);


    return inclui
});


resposta.join('') === novoInput[0] ? console.log('SIM') : console.log('NAO');

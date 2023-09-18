const inputJogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

let contador0 = 0
let contador1 = 0

const players = inputJogadores.map((elemento) => {

    if (elemento.jogada === 0) {
        contador0++
    } else {
        contador1++
    }

});

if (contador0 === 1) {
    inputJogadores.find((objeto) => {
        if (objeto.jogada === 0) {
            console.log(objeto.nome)
        }
    })
} else if (contador1 === 1) {
    for (let objeto of inputJogadores) {
        if (objeto.jogada === 1) {
            console.log(objeto.nome)
        }
    }
} else {
    console.log("NINGUEM")
}



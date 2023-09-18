const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7"

const novoInput = input.trim().split('\n');

const coordenadas = []
for (let i = 1; i < novoInput.length; i++) {
    const coord = novoInput[i].split(' ');
    coordenadas.push({
        x: Number(coord[0]),
        y: Number(coord[1])
    })
}

let valores = []
let resultado = 0

for (let i = 0; i < coordenadas.length; i++) {
    for (let j = i + 1; j < coordenadas.length; j++)
        if ((Math.sqrt(((coordenadas[j].x - coordenadas[i].x) ** 2) + ((coordenadas[j].y - coordenadas[i].y) ** 2))) > resultado) {
            resultado = Math.sqrt(((coordenadas[j].x - coordenadas[i].x) ** 2) + ((coordenadas[j].y - coordenadas[i].y) ** 2))
        }
}
console.log(resultado);

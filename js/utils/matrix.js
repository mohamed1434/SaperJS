import { getRandom } from "./getRandom"

export let matrix = []

function addBombs(bombCount) {
    let currentBombCount = bombCount

    const matrixHeight = matrix.length
    const matrixWidth = matrix[0].length

    while(currentBombCount) {
        const x = getRandom(0, matrixWidth - 1);
        const y = getRandom(0, matrixHeight - 1);

        const matrixElem = matrix[y][x]
         
        if(!matrixElem) {
            matrix[y][x] = 1
            currentBombCount--
        }

    }
}

export function createMatrix(width = 8, height = 8) {
    matrix = Array.from({length: height}, () => 
    Array.from({length: width}, ()=>0)
    );
}

console.log(matrix)
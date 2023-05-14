// RECURSIVIDADE

// Trata-se de uma técnica de programação pela qual uma função chama a si mesma, em uma condição diferente da inicial.
// O principal objetivo do uso da recursividade é diminuir a complexidade de algoritmos.

/**
 * Cálculo do fatorial, versão iterativa (não recursiva)
 */
function fatorial_iter(num) {
    // Não é possível calcular o fatorial de números negativos
    if (num < 0) {
        throw "Erro: número negativo, cálculo impossível";
    }

    let res = 1;

    // Loop descendente de num até 1
    for (let x = num; x > 0; x--) {
        res *= x;
    }

    return res;
}

////////////////////////////////////////////////////////////

// console.log('7! = ', fatorial_iter(7));
// console.log('0! = ', fatorial_iter(0));
// console.log('-6! = ', fatorial_iter(-6));

////////////////////////////////////////////////////////////

/**
 * Cálculo do fatorial, de forma recursiva
 */
function fatorial_rec(num) {
    // Não é possível calcular o fatorial de números negativos
    if (num < 0) {
        throw "Erro: número negativo, cálculo impossível";
    }

    if (num <= 1) {
        return 1;   // O fatorial de 0 e 1 é 1
    } else {
        return num * fatorial_rec(num - 1);    // Chamada recursiva à função
    }
}

////////////////////////////////////////////////////////////

console.log('7! = ', fatorial_rec(7));
console.log('0! = ', fatorial_rec(0));
console.log('-6! = ', fatorial_rec(-6));

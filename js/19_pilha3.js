const Stack = require('./lib/stack.js');

// const expr = "2 + (( 5 * ( 3 / 2 + 1) / 4 ))";
// const expr = "(2 + (( 5 * ( 3 / (2 + 1) / 4 ))";
const expr = "2 + (( 5 * ( 3 / 2 ) + 1)) / 4 ))";

console.log(`EXPRESSÃO REGULAR: ${expr}`);

let pilha = new Stack();

// Percorre a expressão em busca de parâmetros
for (let pos = 0; pos < expr.length; pos++) {
    // Empilha a posição quando é encontrado um abre parênteses
    if (expr[pos] === "(") {
        pilha.push(pos);
        console.log(pilha.toString());
    }

    // Desempilha a posição do último abre parêntese empilhado quando um fecha parêntese é encontrado
    else if (expr[pos] === ")") {
        if (pilha.is_empty()) {
            console.log(`Parêntese fechado na posição ${pos}, sem ter sido aberto`);
        } else {
            const pos_abre = pilha.pop();
            console.log(`Parêntese aberto na posição ${pos_abre} foi fechado na posição ${pos}`);
            console.log(pilha.toString());
        }
    }
}

// Verificar sobras na pilha
while (!pilha.is_empty()) {
    const pos_abre = pilha.pop();
    console.log(`ERRO: parêntese aberto na posição ${pos_abre} não possui o fecha correspondente`);
}
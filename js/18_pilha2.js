/* 
    Programa simples que inverte uma palavra e verifica se ela é um PALÍNDROMO, uma palavra que pode ser lida de trás para a frente, assim como de frente para trás.
    Para isso, usaremos uma estrutura de pilha baseada em um array do JavaScript.

    IMPLEMENTAÇÃO USANDO A CLASSE Stack
*/

const Stack = require('./lib/stack.js');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// ovo, arara, omississimo
rl.question("Informe a palavra a ser verificada: ", (palavra) => {
    // let pilha = []; // Lista vazia que será usada como pilha
    let pilha = new Stack();

    // 1) Pega cada letra da palavra e insere no final (topo) da pilha
    for (let letra of palavra) {
        pilha.push(letra);
        console.log(pilha.toString());
    }

    console.log("*".repeat(50));

    let inverso = "";

    // 2) Vamos retirar as letras da pilha, uma a uma, DO FIM PARA O INÍCIO.
    // A operação se repete enquanto a pilha não estiver vazia
    // Cada letra retirada é acrescentada à variável inverso
    while (!pilha.isEmpty()) {
        let letra = pilha.pop();    // Retira o último elemento da pilha
        inverso += letra;           // Acrescenta a letra ao inverso
        console.log(`Pilha: ${pilha.toString()}; inverso: ${inverso}`);
    }

    console.log("*".repeat(50));

    console.log("Palavra original: ", palavra);
    console.log("Palavra invertida: ", inverso);

    if (palavra === inverso) {
        console.log("*** É UM PALÍNDROMO ***");
    } else {
        console.log("--- não é um palíndromo ---");
    }

    rl.close();
});

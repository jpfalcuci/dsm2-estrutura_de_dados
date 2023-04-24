/* 
    ESTRUTURA DE DADOS PILHA
    É uma estrutura de dados linear de acesso restrito na qual tanto a operação de inserção (tradicionalmente chamada "push"),
    quanto a operação de remoção ("pop") acontecem no final (ou topo).
    Em consequência, o funcionamento da pilha obedece ao princípio LIFO (Last In, First Out): o último elemento a entrar deve ser o primeiro a sair.
*/

class Stack {
    constructor() {
        // Cria uma lista privada e vazia para armazenar os dados da pilha
        this._data = [];
    }

    // Método para inserção
    // Em pilhas, tem nome padronizado: push
    push(val) {
        this._data.push(val);
    }

    // Método que verifica se pilha está ou não vazia
    is_empty() {
        return this._data.length == 0;
    }

    // Método para remoção
    // Em pilha, tem nome padronizado: pop
    pop() {
        if (this.is_empty()) {
            throw "ERRO: impossível remover de uma pilha vazia";
        }

        // Se chegou até aqui, a pilha NÃO está vazia e a remoção pode ser feita
        return this._data.pop();
    }

    // Método que permite consultar o valor que está no topo da pilha, sem removê-lo
    // Em pilhas, tem nome padronizado: peek
    // ("Peek" significa "dar uma espiadinha" em inglês)
    peek() {
        if (this.is_empty()) {
            throw "ERRO: impossível consultar uma pilha vazia";
        }

        return this._data[this._data.length - 1]; // Último elemento da lista
    }

    // Método que permite imprimir a lista como string
    toString() {
        return this._data.toString();
    }
}

module.exports = Stack;

// let pilha = new Stack(); // Cria uma pilha

// pilha.push("Primeiro");
// pilha.push("Segundo");
// pilha.push("Terceiro");

// console.log(pilha.toString());

// let removido = pilha.pop();
// console.log(`Removido: ${removido}`);

// console.log(pilha.toString());

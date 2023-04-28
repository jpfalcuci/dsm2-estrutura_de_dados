/* 
    ESTRUTURA DE DADOS DEQUE
    Deque (Double-Ended QUEue) é uma estrutura de dados derivada da fila que permite inserções e remoções em qualquer uma de suas extremidades.
    Com isso, o deque pode se comportar tanto como uma fila comum quanto como uma fila comum quanto uma fila em que são admitidas inserções prioritários e a possibilidade de desistência (remoção) do último item.
*/

class Deque {

    // Método construtor
    constructor() {
        this.data = []; // Array vazio
    }

    insertFront(val) {
        this.data.unshift(val);
    }

    is_empty() {
        return this.data.length === 0;
    }

    removeFront() {
        if (this.is_empty()) {
            throw new Error("ERRO: Impossível remover de um deque vazio.");
        }
        return this.data.shift();
    }

    removeBack() {
        if (this.is_empty()) {
            throw new Error("ERRO: Impossível remover de um deque vazio.");
        }
        return this.data.pop();
    }

    peekFront() {
        if (this.is_empty()) {
            throw new Error("ERRO: Impossível consultar um deque vazio.");
        }
        return this.data[0];
    }

    peekBack() {
        if (this.is_empty()) {
            throw new Error("ERRO: Impossível consultar um deque vazio.");
        }
        return this.data[this.data.length - 1];
    }

    toString() {
        return this.data.toString();
    }
}

module.exports = Deque;

/* 
    ESTRUTURA DE DADOS DEQUE
    Deque (Double-Ended QUEue) é uma estrutura de dados derivada da fila que permite inserções e remoções em qualquer uma de suas extremidades.
    Com isso, o deque pode se comportar tanto como uma fila comum quanto como uma fila comum quanto uma fila em que são admitidas inserções prioritários e a possibilidade de desistência (remoção) do último item.
*/

class Deque {

    // Método construtor
    constructor() {
        this._data = []; // Array vazio
    }

    // Método para inserção no início
    insertFront(val) {
        this._data.unshift(val);
    }

    // Método para inserção no final
    insertBack(val) {
        this._data.push(val);
    }

    // Método que retorna se o deque está vazio (True) ou não (False)
    isEmpty() {
        return this._data.length === 0;
    }

    // Método para remoção do início
    removeFront() {
        if (this.is_empty()) {
            throw new Error("ERRO: Impossível remover de um deque vazio.");
        }
        return this._data.shift();
    }

    // Método para remoção do final
    removeBack() {
        if (this.is_empty()) {
            throw new Error("ERRO: Impossível remover de um deque vazio.");
        }
        return this._data.pop();
    }

    // Método para consultar do início
    peekFront() {
        if (this.is_empty()) {
            throw new Error("ERRO: Impossível consultar um deque vazio.");
        }
        return this._data[0];
    }

    // Método para consultar do final
    peekBack() {
        if (this.is_empty()) {
            throw new Error("ERRO: Impossível consultar um deque vazio.");
        }
        return this._data[this._data.length - 1];
    }

    // Método que retorna uma representação do deque como string
    toString() {
        return this._data.toString();
    }
}

module.exports = Deque;

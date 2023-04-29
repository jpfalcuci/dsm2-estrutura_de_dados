/* 
    ESTRUTURA DE DADOS FILA
    É uma estrutura de dados linear em que a operação de inserção (enqueue) acontece no final (ou cauda) da estrutura,
    enquanto a operação de remoção (dequeue) ocorre no início (ou cabeça).
    Em consequência, o funcionamento da fila pode ser descrito como FIFO (First In, First Out): o primeiro a entrar é o primeiro a sair
*/

class Queue {

    // Método construtor
    constructor() {
        this._data = []; // Lista vazia
    }

    // Método de inserção. Em filas, tem nome padronizado: enqueue
    enqueue(val) {
        this._data.push(val);
    }

    // Método que retorna se a fila está vazia (true) ou não (false)
    is_empty() {
        return this._data.length == 0;
    }

    // Método de remoção. Em filas, tem nome padronizado: dequeue
    dequeue() {
        if (this.is_empty()) {
            throw "ERRO: Impossível remover de uma fila vazia.";
        }
        return this._data.shift(); // Remove o primeiro item
    }

    // Método para consultar o primeiro item da fila, sem removê-lo
    peek() {
        if (this.is_empty()) {
            throw "Erro: Impossível consultar uma fila vazia.";
        }
        return this._data[0];
    }

    // Método que retorna uma representação da fila como string
    toString() {
        return this._data.toString();
    }
}

module.exports = Queue;

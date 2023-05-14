/**
 * ESTRUTURA DE DADOS LISTA DUPLAMENTE ENCADEADA
 * Trata-se de uma lista linear, em que seus elementos (chamados nodos ou nós) não estão fisicamente adjacentes uns dos outros,
 * mas ligados logicamente por ponteiros que indicam o nodo anterior e o próximo nodo da sequência.
 * Não possui restrição de acesso - inserções, exclusões e consultas podem ser realizadas em qualquer posição da lista.
 */


/** 
 * Classe que representa a unidade de informação armazenada pela lista duplamente encadeada
 */
class Node {
    constructor(data) {
        this.prev = null;   // Ponteiro para o nodo anterior
        this.data = data;   // Dado útil para o usuário
        this.next = null;   // Ponteiro para o nodo posterior
    }
}

class DoublyLinkedList {

    /** 
     * Construtor da classe DoublyLinkedList
     */
    constructor() {
        this._head = null;  // Ponteiro para o primeiro nodo da lista
        this._tail = null;  // Ponteiro para o último nodo da lista
        this._count = 0;    // Quantidade de nodos da lista
    }

    /** 
     * Método que retorna a quantidade de itens da lista
     */
    getCount() {
        return this._count;
    }

    /** 
     * Método PRIVADO que encontra um nodo na posição especificada
     */
    _findNode(pos) {
        // 1º caso: posição 0, retorna self.__head
        if (pos == 0) {
            return this._head;
        }

        // 2º caso: posição final (self.get_count() - 1)
        if (pos == this.getCount() - 1) {
            return this._tail;
        }

        // 3º caso: posição intermediária

        // Se a posição estiver na primeira metade da lista, faz o percurso a partir de self.__head, seguindo next
        if (pos < Math.floor(this.getCount() / 2)) {
            // Percorre a lista quantas vezes for necessário para encontrar o nodo
            let node = this._head;
            for (let i = 1; i <= pos; i++) node = node.next;
            return node;
        
        // Senão, a posição estando na segunda metade da lista, faz o percurso reverso a partir de self.__tail, seguindo prev
        } else {
            let node = this._tail;      // Começa pelo último
            for (let i = this.getCount() - 2; i >= pos; i--) {
                node = node.prev;
            }
            return node;
        }
    }

    /** 
     * Método que insere um novo valor à lista
     */
    insert(pos, val) {
        // Criamos um novo para armazenar a informação do usuário e também os ponteiros prev e next, ambos apontando para None
        let inserted = new Node(val);

        // 1º caso: a lista está vazia, e este é o primeiro nodo a ser inserido
        if (this.getCount() == 0) {
            this._head = inserted;
            this._tail = inserted;

        // 2º caso: inserção no início da lista (posição 0)
        } else if (pos == 0) {
            inserted.next = this._head;
            this._head.prev = inserted;
            this._head = inserted;

        // 3º caso: inserção no final da lista
        // Obs.: consideramos como posição final qualquer posição que seja >= self.get_count()
        } else if (pos >= this.getCount()) {
            inserted.prev = this._tail;
            this._tail.next = inserted;
            this._tail = inserted;

        // 4º caso: inserção em posição intermediária
        } else if (pos > 0) {   // Descarta posições negativas
            // Encontra o nodo que atualmente ocupa a posição de inserção
            let current = this._findNode(pos);

            // Determina o nodo anterior à posição de inserção
            let before = current.prev;

            before.next = inserted;
            inserted.prev = before;
            inserted.next = current;
            current.prev = inserted;
        }

        // Incrementa a quantidade de nodos da lista
        this._count++
    }

    /** 
     * Método de atalho para inserção no início da lista
     */
    insertFront(val) {
        this.insert(0, val);
    }

    /**
     * Método de atalho para inserção no final da lista
     */
    insertBack(val) {
        this.insert(this.getCount(), val)
    }

    /**
     * Método que remove o nodo da posição especificada
     */
    remove(pos) {
        let removed, before, after

        // 1º caso: lista vazia ou posição fora dos limites
        if (this.getCount() == 0 || pos < 0 || pos > this.getCount() - 1) {
            throw "ERRO: posição inválida para remoção.";
        }
      
        // 2º caso: remoção do início da lista
        if (pos == 0) {
            // Será removido o primeiro nodo da lista
            removed = this._head;
            // O novo __head passa a ser o sucessor do nodo removido
            this._head = removed.next;
            // Se o novo __head for um nodo válido, ele não pode ter um antecessor
            if (this._head !== null) {
                this._head.prev = null;
            }
            // Em caso de remoção do único nodo restante da lista, __tail precisa passar a valer null também
            if (this.getCount() == 1) {
                this._tail = null;
            }
        }
      
        // 3º caso: remoção do final da lista
        else if (pos == this.getCount() - 1) {
            // Será removido o último nodo da lista
            removed = this._tail;
            // O novo __tail passa a ser o antecessor do nodo removido
            this._tail = removed.prev;
            // Se o novo __tail for um nodo válido, ele não pode ter um sucessor
            if (this._tail !== null) {
                this._tail.next = null;
            }
            // Em caso de remoção do único nodo restante da lista, __head precisa passar a valer null também
            if (this.getCount() == 1) {
                this._head = null;
            }
        }
      
        // 4º caso: remoção em posição intermediária
        else {
            removed = this._findNode(pos);
            before = removed.prev; // Nodo anterior ao que está sendo removido
            after = removed.next; // Novo posterior ao que está sendo removido
            // O nodo anterior passa a apontar, à frente, para o nodo posterior
            before.next = after;
            // O nodo anterior passa a apontar, para trás, para o nodo anterior
            after.prev = before;
        }
      
        // Decrementa a quantidade de itens da lista
        this._count -= 1;

        // Retorna a informação do usuário armazenada no nodo removido
        return removed.data;
    }

    /**
     * Método de atalho para remoção do primeiro nodo
     */
    removeFront() {
        return this.remove(0)
    }

    /**
     * Método de atalho para remoção do último nodo
     */
    removeBack() {
        return this.remove(this.getCount() - 1)
    }

    /** 
     * Método que retorna o valor armazenado na posição especificada, sem removê-lo
     */
    peek(pos) {
        // 1º caso: lista vazia ou posição fora dos limites
        if (this.getCount() == 0 || pos < 0 || pos >= this.getCount()) {
            throw new Error("ERRO: posição inválida para consulta");
        }
    
        let node = this._findNode(pos);
        return node.data;
    }
    
    /** 
     * Método de atalho para consultar o primeiro nodo
     */
    peekFront() {
        return this.peek(0);
    }
    
    /** 
     * Método de atalho para consultar o último nodo
     */
    peekBack() {
        return this.peek(this.getCount() - 1);
    }
    
    /**
     * Método que procura um nodo por seu valor
     * Retorna a posição do nodo, se o encontrar, ou -1, caso contrário
     */
    find(val) {
        let node = this._head;
        for (let pos = 0; pos < this.getCount(); pos++) {
            if (node.data === val) return pos;   // Encontrou o valor
            node = node.next;
        }
        return -1;      // Valor não encontrado
    }

    /** 
     * Método que exibe uma representação da lista como string
     */
    toString() {
        if (this.getCount() == 0) return "*** [ LISTA VAZIA ] ***\n\n";
        else {
            let repr = `LISTING ${this.getCount()} ITEMS\n`;
            repr += '='.repeat(50) + "\n";
            let node = this._head;
            for (let pos = 0; pos < this.getCount(); pos++) {
                repr += `NODE #${pos}, address: ${node}\n`;
                repr += `prev: ${node.prev}\n`;
                repr += `DATA: ${node.data}\n`;
                repr += `next: ${node.next}\n`;
                repr += '-'.repeat(50) + '\n';
                node = node.next;
            }
            repr += "\n";
            return repr;
        }
    }
}

module.exports = DoublyLinkedList;

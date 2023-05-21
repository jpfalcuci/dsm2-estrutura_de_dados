/**
 * ESTRUTURA DE DADOS GRAFO
 * 
 * É uma estrutura de dados não-linear, formada por vértices (ou nodos) e arestas (ou arcos).
 * Sua principal finalidade é representar as relações entre diferentes objetos.
 * Tais relações podem ser bidirecionais, resultando em grafos não direcionados, ou unidirecionais, constituindo grafos direcionados (digrafos).
 * Tem várias aplicações, como a representação de redes de computadores, mapas e caminhos e redes sociais.
 */
class Graph {

    /** Método construtor */
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.data = {}; // Objeto vazio para armazenar o grafo no formato de lista de adjacência
    }

    /** Método que adiciona um vértice ao grafo */
    addVertex(val) {
        if (!(val in this.data)) {
            this.data[val] = new Set(); // Conjunto vazio
        }
    }

    /** 
     * Método que adiciona uma aresta entre dois vértices
     * 
     * origin: vértice de origem
     * dest: vértice de destino
     * rel: nome do relacionamento (opcional)
     */
    addEdge(origin, dest, rel = null) {
        if (!(origin in this.data)) {
            this.addVertex(origin);
        }
        if (!(dest in this.data)) {
            this.addVertex(dest);
        }

        const edge1 = [dest, rel];

        this.data[origin].add(edge1);

        if (!this.isDirected) {
            const edge2 = [origin, rel];
            this.data[dest].add(edge2);
        }
    }

    /** Método que retorna o grau (número de vértices adjacentes) de um vértice */
    degree(vertex) {
        let result = 0;

        // Grau de saída (out-degree)
        if (vertex in this.data) {
            result = this.data[vertex].size;
        }

        // Grau de entrada (in-degree)
        for (const v in this.data) {
            for (const e of this.data[v]) {
                if (vertex === e[0]) {
                    result++;
                }
            }
        }

        return result;
    }

    /** 
     * Método que exclui um vértice do grafo
     * (Para que um vértice possa ser excluído, ele não pode ter arestas incidentes, ou seja, seu grau deve ser 0, nem ser referenciado por outros vértices)
     */
    removeVertex(vertex) {
        if (this.degree(vertex) !== 0) {
            throw new Error(
                "ERRO: impossível remover um vértice com arestas incidentes a ele."
            );
        } else if (vertex in this.data) {
            delete this.data[vertex];
        }
    }

    /** Método que remove uma aresta do grafo */
    removeEdge(origin, dest, rel = null) {
        const edge1 = [dest, rel];

        if (this.data[origin]) {
            this.data[origin].forEach((edge, index) => {
                if (edge[0] === dest && edge[1] === rel) {
                    this.data[origin].delete(edge);
                }
            });
        }

        if (!this.isDirected && this.data[dest]) {
            this.data[dest].forEach((edge, index) => {
                if (edge[0] === origin && edge[1] === rel) {
                    this.data[dest].delete(edge);
                }
            });
        }
    }

    /** Método que representa o grafo como uma string */
    toString() {
        let output = '';
        for (const vertex in this.data) {
            output += `${vertex}:\n`;
            this.data[vertex].forEach((edge, index) => {
                const [dest, rel] = edge;
                output += `  ${dest} (${rel})\n`;
            });
            output += '\n';
        }
        output += `isDirected: ${this.isDirected}\n`;
        return output;
    }
}

module.exports = Graph;

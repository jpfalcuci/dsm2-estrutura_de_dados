const Graph = require('./lib/graph.js');

const estradas = new Graph();   // Não direcionado, por padrão
console.log(estradas.toString());

estradas.addVertex("Franca");
console.log(estradas.toString());
console.log(`Grau Franca (a): ${estradas.degree("Franca")}`);

estradas.addEdge("Franca", "Batatais", "Rod. Candido Portinari");
console.log(estradas.toString());
console.log(`Grau Franca (b): ${estradas.degree("Franca")}`);

estradas.addEdge("Franca", "Restinga");
console.log(estradas.toString());
console.log(`Grau Franca (c): ${estradas.degree("Franca")}`);

// Remoção da aresta Batatais <-> Franca
estradas.removeEdge("Batatais", "Franca", "Rod. Candido Portinari");
console.log(estradas.toString());

// Tentativa de apagar o vértice "Batatais"
estradas.removeVertex("Batatais");
console.log(estradas.toString());
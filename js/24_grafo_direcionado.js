const Graph = require('./lib/graph.js');

let familia = new Graph(true);  // Grafo direcionado

familia.addEdge("Temístocles", "Gercina", "marido de");
familia.addEdge("Gercina", "Temístocles", "esposa de");
console.log(familia.toString());

familia.addEdge("Jerusa", "Temístocles", "filha de");
familia.addEdge("Jerusa", "Gercina", "filha de");
familia.addEdge("Temístocles", "Jerusa", "pai de");
familia.addEdge("Gercina", "Jerusa", "mãe de");
console.log(familia.toString());

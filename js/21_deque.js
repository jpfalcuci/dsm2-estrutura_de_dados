const Deque = require('./lib/deque.js');

const deque = new Deque();

// Deque se comportando como fila comum
deque.insertBack('Antero');
deque.insertBack('Olentina');
deque.insertBack('Gaudêncio');
deque.insertBack('Hildebrando');
deque.insertBack('Iranildes');

console.log(deque.toString());

const removido_frente = deque.removeFront();
console.log(`Removido da frente: ${removido_frente}`);
console.log(deque.toString());

deque.insertBack('Turíbio');
console.log(deque.toString());

const primeiro = deque.peekFront();
console.log(`Primeiro da fila: ${primeiro}`);
console.log(deque.toString());

// USANDO RECURSOS EXCLUSIVOS DO DEQUE

// Inserção prioritário
deque.insertFront('Emerenciana');
console.log(deque.toString());

// Desistência da fila
const desistente = deque.removeBack();
console.log(`Desistente: ${desistente}`);
console.log(deque.toString());

// Nova inserção prioritária
deque.insertFront('Deusdete');
console.log(deque.toString());

// Consultando a última pessoa da fila
const ultimo = deque.peekBack();
console.log(`Último: ${ultimo}`);
console.log(deque.toString());

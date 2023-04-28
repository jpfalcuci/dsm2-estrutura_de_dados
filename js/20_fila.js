const Queue = require('./lib/queue.js');

const fila = new Queue(); // Cria uma fila vazia

// Insere algumas pessoas na fila
fila.enqueue('Leotildes');
fila.enqueue('Orozimbo');
fila.enqueue('Valdisney');
fila.enqueue('Adamastor');

const atendido = fila.dequeue();
console.log(`Atendido: ${atendido}`);
console.log(fila.toString());

fila.enqueue('Marcinéia');
console.log(fila.toString());

const proximo = fila.peek();
console.log(`Próximo a ser atendido: ${proximo}`);
console.log(fila.toString());

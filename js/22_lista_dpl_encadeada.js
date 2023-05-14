const DoublyLinkedList = require('./lib/doubly_linked_list.js');

let lista = new DoublyLinkedList();
console.log(lista.toString());

// Insere o primeiro elemento
lista.insert(0, "Macarrão");
console.log(lista.toString());

// Insere no fim
lista.insert(1, "Molho de tomate");
console.log(lista.toString());

// Insere em uma posição intermediária
lista.insert(1, "Óleo de soja");
console.log(lista.toString());

// Insere no final usando método de atalho
lista.insertBack("Queijo ralado");

// Insere no início usando método de atalho
lista.insertFront("Carne moída");

// Mais uma inserção em posição intermediária
lista.insert(3, "Sal");
console.log(lista.toString());

// Busca pelo valor "Queijo ralado" na lista
let pos1 = lista.find("Queijo ralado");
console.log(`'Queijo ralado' está na posição ${pos1}`);

// Busca pelo valor "Manjericão" na lista
let pos2 = lista.find("Manjericão");
console.log(`'Manjericão' está na posição ${pos2}`);

// Consulta alguns itens da lista
let primeiro = lista.peekFront();
let ultimo = lista.peekBack();
let quarto = lista.peek(3);
console.log(`PRIMEIRO: ${primeiro}, ÚLTIMO: ${ultimo}, QUARTO: ${quarto}`);

// Remove o primeiro item da lista
primeiro = lista.removeFront();
console.log(`PRIMEIRO ITEM REMOVIDO: ${primeiro}`);
console.log(lista.toString());

// Remove o último item da lista
ultimo = lista.removeBack();
console.log(`ÚLTIMO ITEM REMOVIDO: ${ultimo}`);
console.log(lista.toString());

// Remove o item da posição 2
pos2 = lista.remove(2);
console.log(`ITEM DA POSIÇÃO 2, REMOVIDO: ${pos2}`);
console.log(lista.toString());

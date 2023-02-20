// Listas/arrays

// Uma lista de números, strings e boolean
const valores = [2, 3, 5, 7, 9, 11, 'batata', 'tomate', true];

// Percurso
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

console.log("\n" + "-".repeat(80) + "\n");

/**********/

// Inserção de um novo elemento no final da lista
valores.push('cebola');
console.log(valores);

valores.push(29);
console.log(valores);

console.log("\n" + "-".repeat(80) + "\n");

/**********/

// Inserção de um novo elemento na posição especificada
//    Parâmetros:
//    1º: índice para inserir
//    2º: quantos elementos serão removidos
//    3º: valor a ser inserido

// Inserindo 'chuchu' no índice 4
valores.splice(4, 0, 'chuchu');
console.log(valores);

// Inserindo 'abobrinha' na primeira posição
valores.splice(0, 0, 'abobrinha');
console.log(valores);

console.log("\n" + "-".repeat(80) + "\n");

/**********/

// Acessando um elemento em uma posição específica
console.log('Elemento na SÉTIMA posição:', valores[6]);
console.log('Elemento na TERCEIRA posição:', valores[2]);
console.log('Elemento na ÚLTIMA posição:', valores[valores.length - 1]);

console.log("\n" + "-".repeat(80) + "\n");

/**********/

// Substituindo valores existentes
console.log('Antes:', valores);
valores[10] = 'cenoura';                // Substituindo o valor da posição 10 (11º elemento)
valores[0] = 'beterraba';               // Substituindo o valor da posição 0 (1º elemento)
valores[valores.length - 1] = 'alho';   // Substituindo o valor da última posição
console.log('Depois:', valores);

console.log("\n" + "-".repeat(80) + "\n");

/**********/

// Determinando quantos elementos há na lista
console.log("Número de elementos na lista:", valores.length);

// Imprimindo o último valor da lista com a ajuda de length
console.log("Último valor da lista:", valores[valores.length - 1]);

console.log("\n" + "-".repeat(80) + "\n");

/**********/

// Removendo o último elemento da lista
console.log("Antes:", valores);
let ultimo = valores.pop();
console.log("Valor removido da lista:", ultimo);
console.log("Depois:", valores);

console.log("\n" + "-".repeat(80) + "\n");

/**********/

// Removendo um elemento por sua posição
console.log("Antes:", valores);
let pos9 = valores.splice(9, 1); // Remove o elemento da posição 9
console.log("Valor removido da posição 9:", pos9);
let pos0 = valores.splice(0, 1); // Remove o primeiro elemento (posição 0)
console.log("Valor removido da posição 0:", pos0);
console.log("Depois:", valores);

console.log("\n" + "-".repeat(80) + "\n");

/**********/

// Removendo um elemento pelo seu valor
console.log("Antes:", valores);
valores.splice(valores.indexOf("batata"), 1);  // Remove o valor "batata"
valores.splice(valores.indexOf(5), 1);         // Remove o valor 5
console.log("Depois:", valores);

console.log("\n" + "-".repeat(80) + "\n");

/**********/

// Acrescentando mais alguns elementos na lista
valores.push(13)
valores.push(15)
valores.push('milho')
valores.push(17)
valores.push('mandioca')
valores.push(19)

/**********/

// Fatiando uma lista
console.log(valores);

// cria uma sublista que contém os elementos de 1 até a posição 7 (posição 8 NÃO ENTRA)
let sublista1_7 = valores.slice(1, 8);
console.log("Sublista de 1 à 7:", sublista1_7);

// cria uma sublista que contém os elementos do início até a posição 5 (posição 6 NÃO ENTRA)
let sublista0_5 = valores.slice(0, 6);
console.log("Sublista de 0 à 5:", sublista0_5);

// cria uma sublista que contém os elementos da posição 10 até o fim da lista
let sublista10_fim = valores.slice(10);
console.log("Sublista de 10 até o final:", sublista10_fim);

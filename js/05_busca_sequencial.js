// Lista de números
const nums = [9, 21, 33, 12, 0, 18, 24, 30, 15, 6, 3, 27];

/**
* Função que realiza uma busca sequencial em um array procurando por um determinado valor.
* Se o valor for encontrado, retorna a posição onde foi encontrado.
* Caso contrário, retorna o valor -1.
*/
function buscaSequencial(array, valor) {
    for (let i = 0; i < array.length; i++) {
        // Encontrou o valor; retorna a posição onde foi encontrado
        if (valor === array[i]) {
            return i;
        }
    }
    // Percorreu todo o array e não encontrou o valor: retorna -1
    return -1;
}

// Busca sequencial: Lista precisa estar ordenada e quanto mais perto do fim o item estiver, mais tempo o algoritmo demora para encontrar
// Só é eficiente se o item procurado estiver no começo da lista


// TESTES

// Procurando o valor 15 no array nums
let resultado = buscaSequencial(nums, 15);
console.log(`Posição do valor 15 no array: ${resultado}`);
console.log("\n" + "-".repeat(80) + "\n");

// Procurando o valor 20 no array nums
resultado = buscaSequencial(nums, 20);
console.log(`Posição do valor 20 no array: ${resultado}`);
console.log("\n" + "-".repeat(80) + "\n");

// Procurando o valor 33 no array nums
resultado = buscaSequencial(nums, 33);
console.log(`Posição do valor 33 no array: ${resultado}`);
console.log("\n" + "-".repeat(80) + "\n");


// TESTES COM NOMES

let nomes = require('./data/nomes_desord.json');

let horaIni = Date.now();
resultado = buscaSequencial(nomes, 'JOAO');
let horaFim = Date.now();
console.log(`Posição do valor "JOAO" na lista: ${resultado}`);
console.log(`Tempo gasto: ${horaFim - horaIni}ms`);
console.log("\n" + "-".repeat(80) + "\n");


nomes = require('./data/lista_nomes.json');

horaIni = Date.now();
resultado = buscaSequencial(nomes, 'JOAO');
horaFim = Date.now();
console.log(`Posição do valor "JOAO" na lista: ${resultado}`);
console.log(`Tempo gasto: ${horaFim - horaIni}ms`);
console.log("\n" + "-".repeat(80) + "\n");

horaIni = Date.now();
resultado = buscaSequencial(nomes, 'CARLOS');
horaFim = Date.now();
console.log(`Posição do valor "CARLOS" na lista: ${resultado}`);
console.log(`Tempo gasto: ${horaFim - horaIni}ms`);
console.log("\n" + "-".repeat(80) + "\n");

horaIni = Date.now();
resultado = buscaSequencial(nomes, 'YARA');
horaFim = Date.now();
console.log(`Posição do valor "YARA" na lista: ${resultado}`);
console.log(`Tempo gasto: ${horaFim - horaIni}ms`);
console.log("\n" + "-".repeat(80) + "\n");

horaIni = Date.now();
resultado = buscaSequencial(nomes, 'ORKUTILSON');
horaFim = Date.now();
console.log(`Posição do valor "ORKUTILSON" na lista: ${resultado}`);
console.log(`Tempo gasto: ${horaFim - horaIni}ms`);
console.log("\n" + "-".repeat(80) + "\n");

/**
 * ALGORÍTIMO DE BUSCA BINÁRIA
 * Dados de uma lista, que deve estar PREVIAMENTE ORDENADA, e um valor de busca, divide a lista em duas metades
 * procurando pelo valor de busca apenas na metade onde o valor poderia estar.
 * Novas subdivisões são feitas até que se encontre o valor de busca 
 * ou que reste apenas uma sub lista vazia, quando se conclui que o valor de busca não existe na lista
 */

let comps = 0;

function buscaBinaria(lista, val) {
    comps = 0;
    let ini = 0; // Início da lista
    let fim = lista.length - 1; // Fim da lista

    while (ini <= fim) {
        // Resultado da divisão inteira (Descarta as casas decimais)
        let meio = Math.floor((ini + fim) / 2);

        // O valor de busca foi encontrado, retorna a posição
        if (lista[meio] === val) {
            comps++;
            return meio;
        } else if (val < lista[meio]) {
            comps += 2;
            fim = meio - 1;
        } else {
            comps += 2;
            ini = meio + 1;
        }
    }
    return -1; // Valor não existe na lista
}


let nomes = require('./data/lista_nomes.json');

let horaIni = Date.now();
let resultado = buscaBinaria(nomes, 'JOAO');
let horaFim = Date.now();
console.log(`Posição do valor "JOAO" na lista: ${resultado}`);
console.log(`Tempo gasto: ${(horaFim - horaIni).toFixed(2)}ms, comparações: ${comps}`);
console.log('-'.repeat(80) + '\n');

horaIni = Date.now();
resultado = buscaBinaria(nomes, 'CARLOS');
horaFim = Date.now();
console.log(`Posição do valor "CARLOS" na lista: ${resultado}`);
console.log(`Tempo gasto: ${(horaFim - horaIni).toFixed(2)}ms, comparações: ${comps}`);
console.log('-'.repeat(80) + '\n');

horaIni = Date.now();
resultado = buscaBinaria(nomes, 'YARA');
horaFim = Date.now();
console.log(`Posição do valor "YARA" na lista: ${resultado}`);
console.log(`Tempo gasto: ${(horaFim - horaIni).toFixed(2)}ms, comparações: ${comps}`);
console.log('-'.repeat(80) + '\n');

horaIni = Date.now();
resultado = buscaBinaria(nomes, 'ORKUTILSON');
horaFim = Date.now();
console.log(`Posição do valor "ORKUTILSON" na lista: ${resultado}`);
console.log(`Tempo gasto: ${(horaFim - horaIni).toFixed(2)}ms, comparações: ${comps}`);
console.log('-'.repeat(80) + '\n');

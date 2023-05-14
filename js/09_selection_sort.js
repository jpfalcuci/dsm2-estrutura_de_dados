/**
 * ALGORITMO DE ORDENAÇÃO SELECTION SORT
 * 
 * Isola (seleciona) o primeiro elemento da lista e, em seguida, encontra o menor valor no restante da lista.
 * Se o valor encontrado for menor que o valor previamente selecionado, efetua a troca entre eles.
 * Continuando, seleciona o segundo elemento da lista, buscando pelo menor valor das posições subsequentes.
 * Faz a troca entre os dois valores, se necessário.
 * O processo se repete até que o penúltimo elemento da lista seja isolado, comparado com o último e feita a troca entre eles, se for o caso
 */
function selectionSort(lista) {
    let comps = 0;
    let trocas = 0;
    let passadas = 0;

    // Loop que vai da primeira até a PENÚLTIMA posição
    for (let pos_sel = 0; pos_sel < lista.length - 1; pos_sel++) {

        passadas++;

        // Encontra o menor valor da sublista à frente de pos_sel
        let pos_menor = pos_sel + 1;
        for (let pos = pos_sel + 2; pos < lista.length; pos++) {
            // Se o valor encontrado na posição pos for MENOR que o valor da posição pos_menor,
            // então pos_menor passa a ser pos
            comps++;
            if (lista[pos] < lista[pos_menor]) pos_menor = pos;
        }

        // Compara os elementos das posições pos_menor e pos_sel.
        // Se o valor do primeiro for MENOR que o valor do segundo, efetua a troca
        comps++;
        if (lista[pos_menor] < lista[pos_sel]) {
            [lista[pos_sel], lista[pos_menor]] = [lista[pos_menor], lista[pos_sel]];
            trocas++;
        }
    }
    return {lista, comps, trocas, passadas};
}


////////////////////////////////////////////////////////////////////////////////

// Quantidade passadas de é sempre fixa (n - 1)
// Quantidade máxima de comparações é n² - n / 2


// Teste com um vetor de 10 números
let nums = [6, 4, 2, 0, 9, 5 ,1, 8, 3, 7];

let resultado = selectionSort(nums);
console.log('Lista ordenada: ', resultado.lista);
console.log(`Comparações: ${resultado.comps}, trocas: ${resultado.trocas}, passadas: ${resultado.passadas}`);
console.log('-'.repeat(80) + '\n');


let pior_caso = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8];
resultado = selectionSort(pior_caso);
console.log('Lista ordenada: ', resultado.lista);
console.log(`Comparações: ${resultado.comps}, trocas: ${resultado.trocas}, passadas: ${resultado.passadas}`);
console.log('-'.repeat(80) + '\n');


let melhor_caso = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
resultado = selectionSort(melhor_caso);
console.log('Lista ordenada: ', resultado.lista);
console.log(`Comparações: ${resultado.comps}, trocas: ${resultado.trocas}, passadas: ${resultado.passadas}`);
console.log('-'.repeat(80) + '\n');


////////////////////////////////////////////////////////////////////////////////

let nomes = require('./data/nomes_desord.json');

// Pega apenas os 25k primeiros nomes
nomes = nomes.slice(0, 25000);

const inicio = Date.now();
resultado = selectionSort(nomes);
const fim = Date.now();
// console.log('Nomes ordenados: ', nomes);
console.log(`Tempo gasto: ${(fim - inicio)}ms`);
console.log(`(Nomes) Comparações: ${resultado.comps}, trocas: ${resultado.trocas}, passadas: ${resultado.passadas}`);
console.log('-'.repeat(80) + '\n');

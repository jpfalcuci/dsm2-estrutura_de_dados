// ALGORÍTMO DE ORDENAÇÃO MERGE SORT

// No processo de ordenação, esse algoritmo "desmonta" a lista original, contendo N elementos, até obter N listas com apenas um elemento cada uma.
// Em seguida, usando a técnica de mesclagem (merge), "remonta" a lista, desta vez com os elementos já em ordem.

let divs = 0;
let juncs = 0;
let comps = 0;

function merge_sort(lista) {

    if (lista.length > 1) {

        let meio = Math.floor(lista.length / 2);
        let sublista_esq = lista.slice(0, meio);
        let sublista_dir = lista.slice(meio);
        divs++;

        sublista_esq = merge_sort(sublista_esq);
        sublista_dir = merge_sort(sublista_dir);

        let pos_esq = 0;
        let pos_dir = 0;
        let ordenada = [];

        while (pos_esq < sublista_esq.length && pos_dir < sublista_dir.length) {
            comps++;
            if (sublista_esq[pos_esq] < sublista_dir[pos_dir]) {
                ordenada.push(sublista_esq[pos_esq]);
                pos_esq++;
            } else {
                ordenada.push(sublista_dir[pos_dir]);
                pos_dir++;
            }
        }

        let sobra = [];

        if (pos_esq < pos_dir) {
            sobra = sublista_esq.slice(pos_esq);
        } else {
            sobra = sublista_dir.slice(pos_dir);
        }

        juncs++;

        return ordenada.concat(sobra);
    } else {
        return lista;
    }
}

////////////////////////////////////////////////////////////////////////////////


// Teste com vetor de 10 números
const nums = [6, 4, 2, 0, 9, 5, 1, 8, 3, 7];
// const nums = [9, 0, 8, 1, 7, 2, 6, 3, 5, 4];
divs = juncs = comps = 0; // Reseta as variáveis de estatísticas
let resultado = merge_sort(nums);
console.log("Lista original:", nums);
console.log("Lista ordenada:", resultado);
console.log(`Divisões: ${divs}, junções: ${juncs}, comparações: ${comps}`);
console.log('-'.repeat(80));

////////////////////////////////////////////////////////////////////////////////


const nomes = require('./data/nomes_desord.json'); // Importa o array de nomes desordenados

divs = 0, juncs = 0, comps = 0;
let inicio = Date.now();

// Capturar uso de memória antes de executar o Merge Sort
const initialMemoryUsage = process.memoryUsage().heapUsed;

resultado = merge_sort(nomes);

// Capturar uso de memória depois de executar o Merge Sort
const finalMemoryUsage = process.memoryUsage().heapUsed;
const peakMemoryUsage = finalMemoryUsage - initialMemoryUsage;

let fim = Date.now();

// console.log("Nomes ordenados:", resultado);
console.log(`Tempo gasto: ${(fim - inicio).toFixed(2)}ms`);
console.log(`Pico de memória utilizado: ${peakMemoryUsage} bytes`);
console.log(`(Nomes) Divisões: ${divs}, junções: ${juncs}, comparações: ${comps}`);

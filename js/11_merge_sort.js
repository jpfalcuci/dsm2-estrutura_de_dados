let divs = juncs = comps = 0;

/**  
 * ALGORÍTMO DE ORDENAÇÃO MERGE SORT
 * 
 * No processo de ordenação, esse algoritmo "desmonta" a lista original, contendo N elementos, até obter N listas com apenas um elemento cada uma.
 * Em seguida, usando a técnica de mesclagem (merge), "remonta" a lista, desta vez com os elementos já em ordem.
 */
function mergeSort(lista) {

    // Para que possa haver divisão da lista, esta deve ter mais de um elemento
    if (lista.length > 1) {

        // Encontra a posição do meio da lista, para fazer a divisão em duas metades
        let meio = Math.floor(lista.length / 2);

        // Tira uma cópia de cada metade da lista
        let sublista_esq = lista.slice(0, meio);
        let sublista_dir = lista.slice(meio);
        divs++;

        // Chamamos recursivamente a função para que ela continue repartindo cada uma das sublistas em duas partes menores
        sublista_esq = merge_sort(sublista_esq);
        sublista_dir = merge_sort(sublista_dir);

        // AQUI COMEÇA A MESCLAGEM ORDENADA DAS DUAS SUBLISTAS
        let pos_esq = 0;
        let pos_dir = 0;
        let ordenada = [];

        // Compara os elementos das sublistas entre si e insere na lista ordenada o menor entre dois elementos
        while (pos_esq < sublista_esq.length && pos_dir < sublista_dir.length) {
            // O menor elemento está na sublista da esquerda
            comps++;
            if (sublista_esq[pos_esq] < sublista_dir[pos_dir]) {
                // 'Desce' o elemento da esquerda para a lista ordenada
                ordenada.push(sublista_esq[pos_esq]);
                pos_esq++;
            // O menor elemento está na sublista da direita
            } else {
                // 'Desce' o elemento da direita para a sublista ordenada
                ordenada.push(sublista_dir[pos_dir]);
                pos_dir++;
            }
        }

        // Verificação da sobra
        let sobra = [];

        // Sobra à esquerda
        if (pos_esq < pos_dir) {
            sobra = sublista_esq.slice(pos_esq);
        // Sobra à direita
        } else {
            sobra = sublista_dir.slice(pos_dir);
        }

        juncs++;

        // O resultado final é a junção (concatenação) da lista ordenada com a sobra
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
console.log("Lista original:", nums);
let resultado = mergeSort(nums);
console.log("Lista ordenada:", resultado);
console.log(`Divisões: ${divs}, junções: ${juncs}, comparações: ${comps}`);
console.log('-'.repeat(80));

////////////////////////////////////////////////////////////////////////////////


const nomes = require('./data/nomes_desord.json'); // Importa o array de nomes desordenados

divs = 0, juncs = 0, comps = 0;
let inicio = Date.now();

// Capturar uso de memória antes de executar o Merge Sort
const initialMemoryUsage = process.memoryUsage().heapUsed;

resultado = mergeSort(nomes);

// Capturar uso de memória depois de executar o Merge Sort
const finalMemoryUsage = process.memoryUsage().heapUsed;
const peakMemoryUsage = finalMemoryUsage - initialMemoryUsage;

let fim = Date.now();

// console.log("Nomes ordenados:", resultado);
console.log(`Tempo gasto: ${(fim - inicio).toFixed(2)}ms`);
console.log(`Pico de memória utilizado: ${peakMemoryUsage} bytes`);
console.log(`(Nomes) Divisões: ${divs}, junções: ${juncs}, comparações: ${comps}`);

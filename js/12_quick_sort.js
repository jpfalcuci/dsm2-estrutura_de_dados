let passadas = 0, comps = 0, trocas = 0;

/** 
 * ALGORITMO DE ORDENAÇÃO QUICK SORT
 * 
 * Escolha um dos elementos da lista para ser o pivô (na nossa implementação, o último elemento)
 * e, na primeira passada, divide a lista, a partir da posição final do pivô, em uma sublista à esquerda,
 * contendo apenas valores menores que o pivô, e outra à direita, que contém apenas valores maiores que o pivô.
 * Em seguida, recursivamente, repete o processo em cada uma das sublistas, até que toda lista esteja ordenada.
 */
function quickSort(lista, ini = 0, fim = lista.length - 1) {

    // Para que o algoritmo trabalhe, é necessário que a faixa delimitada pelas variáveis "ini" e "fim" tenha, pelo menos, dois elementos
    // Caso contrário, saímos da função sem fazer nada
    if (fim <= ini) return;

    let pivot = fim;
    let div = ini - 1;
    passadas++;

    // Percorre a lista da posição "int" até a posição "fim" - 1
    for (let pos = ini; pos < fim; pos++) {
        // Compara os elementos das posições "pos" e "pivot"
        comps++;
        if (lista[pos] < lista[pivot]) {
            div++;
            // Se os valores das variáveis "div" e "pos" forem diferentes entre si e o elemento "pos" for menor
            // que o elemento da posição "div", promove a troca entre eles
            comps++;
            if (pos !== div && lista[pos] < lista[div]) {
                [lista[pos], lista[div]] = [lista[div], lista[pos]];
                trocas++;
            }
        }
    }

    // Depois que o loop acaba, o divisor é incrementado ainda uma vez
    div++;

    // Caso os valores das posições "div" e "pivot" sejam diferentes entre si, é feita a comparação entre os elementos dessas posições.
    // Se o valor de "pivot" for menor, promove-se a troca entre os elementos.
    comps++;
    if (pivot !== div && lista[pivot] < lista[div]) {
        [lista[pivot], lista[div]] = [lista[div], lista[pivot]];
        trocas++;
    }
    // O ELEMENTO DA POSIÇÃO "div" ESTÁ EM SEU LUGAR CORRETA AGORA

    // Chamamos recursivamente a função para ordenar a sublista à esquerda da posição "div"
    quickSort(lista, ini, div - 1);
    // Fazemos o mesmo para ordenar a sublista à direita de "div"
    quickSort(lista, div + 1, fim);
}


////////////////////////////////////////////////////////////////////////////////

// const numeros = [6, 4, 2, 0, 9, 5, 1, 8, 3, 7];
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

passadas = 0, comps = 0, trocas = 0;
console.log(`Lista original: ${numeros}`);
quickSort(numeros);
console.log(`Lista ordenada: ${numeros}`);
console.log(`Comparações: ${comps}, Trocas: ${trocas}, Passadas: ${passadas}`);
console.log('-'.repeat(80));


////////////////////////////////////////////////////////////////////////////////

const nomes = require('./data/nomes_desord.json'); // Importa o array de nomes desordenados

passadas = 0, comps = 0, trocas = 0;
let inicio = Date.now();

// Capturar uso de memória antes de executar o Quick Sort
const initialMemoryUsage = process.memoryUsage().heapUsed;

resultado = quickSort(nomes);

// Capturar uso de memória depois de executar o Merge Sort
const finalMemoryUsage = process.memoryUsage().heapUsed;
const peakMemoryUsage = finalMemoryUsage - initialMemoryUsage;

let fim = Date.now();

// console.log("Nomes ordenados:", resultado);
console.log(`Tempo gasto: ${(fim - inicio).toFixed(2)}ms`);
console.log(`Pico de memória utilizado: ${peakMemoryUsage} bytes`);
console.log(`(Nomes) Comparações: ${comps}, Trocas: ${trocas}, Passadas: ${passadas}`);

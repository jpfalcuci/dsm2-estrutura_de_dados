let passadas = 0, comps = 0, trocas = 0; // Variáveis de estatísticas

/**
 * Função que implementa o algoritmo Quick Sort de forma ITERATIVA
 */
function quickSort(lista, ini = 0, fim = null) {

    if (fim === null) fim = lista.length - 1;

    // Cria uma lista auxiliar
    const tamanho = fim - ini + 1;
    const aux = new Array(tamanho);

    // Inicializa a posição da lista auxiliar
    let pos = -1;

    // Coloca os valores iniciais de ini e fim na lista auxiliar
    pos++;
    aux[pos] = ini;
    pos++;
    aux[pos] = fim;

    // Continua retirando valores da lista auxiliar enquanto ela não estiver vazia
    while (pos >= 0) {
        passadas++;

        // Retira fim e início
        fim = aux[pos];
        pos--;
        ini = aux[pos];
        pos--;

        // Coloca o pivô em sua posição correta na lista ordenada
        let i = ini - 1;
        const x = lista[fim];

        for (let j = ini; j < fim; j++) {
            comps++;
            if (lista[j] <= x) {
            // Incrementa a posição do menor elemento
            i++;
            [lista[i], lista[j]] = [lista[j], lista[i]];
            trocas++;
            }
        }

        [lista[i + 1], lista[fim]] = [lista[fim], lista[i + 1]];
        trocas++;

        const pivot = i + 1;

        // Se há elementos à esquerda do pivô, coloca-os no lado esquerdo da lista auxiliar
        if (pivot - 1 > ini) {
            pos++;
            aux[pos] = ini;
            pos++;
            aux[pos] = pivot - 1;
        }

        // Se há elementos à direita do pivô, coloca-os no lado direito da lista auxiliar
        if (pivot + 1 < fim) {
            pos++;
            aux[pos] = pivot + 1;
            pos++;
            aux[pos] = fim;
        }
    }
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

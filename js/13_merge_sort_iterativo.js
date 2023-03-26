let divs = juncs = comps = 0;

function mergeSort(lista) {
    
    // Função que implementa o algoritmo Merge Sort de forma ITERATIVA

    // Inicia com o menor tamanho de partição de 2^0 = 1
    let tam_part = 1;
    const n = lista.length; // Obtém o tamanho da lista

    // O tamanho da sublista cresce em potências de 2
    // enquanto o tamanho da partição for menor que o tamanho da lista
    while (tam_part < n) {
        // Inicia sempre pela esquerda
        let esq = 0;

        // enquanto a posição da esquerda for menor que o tamanho da lista
        while (esq < n) {   
            // define a posição da direita como a menor entre esq+(2*tam_part-1)
            let dir = Math.min(esq + (tam_part * 2 - 1), n - 1);
            // define a posição do meio como a média entre esq e dir, arredondada para baixo
            let meio = Math.floor((esq + dir) / 2);

            // A mescla final deve considerar sublistas não mescladas se o tamanho da lista original não for potência de 2
            comps++;
            // se o tamanho da partição for maior que o tamanho da lista / 2
            if (tam_part > Math.floor(n / 2)) {
                // ajusta a posição do meio para levar em conta sub-listas não mescladas
                meio = dir - (n % tam_part);
            }

            // Divide a lista em duas sublistas
            let tam_esq = meio - esq + 1;
            let tam_dir = dir - meio;
            let lista_esq = new Array(tam_esq);
            let lista_dir = new Array(tam_dir);

            // Copia os elementos da sublista esquerda e da sublista direita para suas respectivas listas auxiliares
            for (let pos_esq = 0; pos_esq < tam_esq; pos_esq++) {
                lista_esq[pos_esq] = lista[esq + pos_esq];
            }

            for (let pos_dir = 0; pos_dir < tam_dir; pos_dir++) {
                lista_dir[pos_dir] = lista[meio + pos_dir + 1];
            }

            // Realiza a junção das duas sublistas em ordem crescente
            // Inicializa as variáveis de posição da sublista da esquerda, direita e da lista original
            let pos_esq = pos_dir = 0;
            let i = esq;

            // Enquanto houver elementos nas duas sublistas
            while (pos_esq < tam_esq && pos_dir < tam_dir) {
                comps++;
                if (lista_esq[pos_esq] > lista_dir[pos_dir]) {
                    lista[i] = lista_dir[pos_dir];
                    pos_dir++;
                } else {
                    lista[i] = lista_esq[pos_esq];
                    pos_esq++;
                }
                i++;
            }

            // Insere o restante da sub-lista esquerda, se houver
            while (pos_esq < tam_esq) {
                lista[i] = lista_esq[pos_esq];
                pos_esq++;
                i++;
            }

            // Insere o restante da sub-lista direita, se houver
            while (pos_dir < tam_dir) {
                lista[i] = lista_dir[pos_dir];
                pos_dir++;
                i++;
            }

            // Move o ponteiro esquerdo para a próxima sub-lista
            esq += tam_part * 2;
            juncs++;
        }

        // Incrementa a sublista em potências de 2
        tam_part *= 2;
        divs++;
    }

    return lista;
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

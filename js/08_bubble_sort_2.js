// ALGORITMO DE ORDENAÇÃO BUBBLE SORT
// Percorre a lista a ser ordenada em sucessivas passadas, trocando dois elementos adjacentes sempre que o segundo for MENOR que o primeiro.
// Efetua tantas passadas quanto necessárias, até que, na última passada, nenhuma troca seja efetuada
// VERSÃO OTIMIZADA COM ENCOLHIMENTO DO PERCURSO A CADA PASSADA

function bubbleSort(lista) {
    let comps = 0;
    let trocas = 0;
    let passadas = 0;
    let desloc = 1;
    
    // Loop eterno, não sabemos quantas passadas serão necessárias
    while (true) {
        let trocou = false;
        passadas++;

        // Percurso da lista, do primeiro ao PENÚLTIMO elemento, com acesso a cada posição
        for (let pos = 0; pos < lista.length - desloc; pos++) {
            comps++;
        
            // Se o número que está a frente na lista for MENOR do que o que está atrás, TROCA
            if (lista[pos + 1] < lista[pos]) {
                [lista[pos], lista[pos + 1]] = [lista[pos + 1], lista[pos]];
                trocou = true;
                trocas++;
            }
        }
        
        if (!trocou) {  // Não houve troca na passada
            break;        // Interrompe o loop eterno; acabou
        }

        desloc++; // Aumenta o deslocamento para diminuir o tamanho da próxima passada
    }

    return {
        lista: lista,
        comps: comps,
        trocas: trocas,
        passadas: passadas
    };
}


// Teste com um vetor de 10 números
let nums = [6, 4, 2, 0, 9, 5 ,1, 8, 3, 7];


let resultado = bubbleSort(nums);
console.log('Lista ordenada: ', resultado.lista);
console.log(`Comparações: ${resultado.comps}, trocas: ${resultado.trocas}, passadas: ${resultado.passadas}`);
console.log('-'.repeat(80) + '\n');

// Pior caso:
// - n = itens da lista
// - 90 -> n² - n
// - 45 -> (n² - n) / 2
// - 10 -> n
// - Uma pequena alteração no número de elementos, eleva o número de comparações ao quadrado


let piorCaso = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
resultado = bubbleSort(piorCaso);
console.log('Lista ordenada: ', resultado.lista);
console.log(`Comparações: ${resultado.comps}, trocas: ${resultado.trocas}, passadas: ${resultado.passadas}`);
console.log('-'.repeat(80) + '\n');

// Melhor caso:
// - n = itens da lista
// - 0 -> n - 1
// - 0 -> 0
// - 1 -> 1


let melhorCaso = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
resultado = bubbleSort(melhorCaso);
console.log('Lista ordenada: ', resultado.lista);
console.log(`Comparações: ${resultado.comps}, trocas: ${resultado.trocas}, passadas: ${resultado.passadas}`);
console.log('-'.repeat(80) + '\n');


let nomes = require('./data/nomes_desord.json');

// Pega apenas os 10k primeiros nomes
nomes = nomes.slice(0, 10000);

const inicio = Date.now();
resultado = bubbleSort(nomes);
const fim = Date.now();
// console.log('Nomes ordenados: ', nomes);
console.log(`Tempo gasto: ${(fim - inicio)}ms`);
console.log(`Comparações: ${resultado.comps}, trocas: ${resultado.trocas}, passadas: ${resultado.passadas}`);
console.log('-'.repeat(80) + '\n');

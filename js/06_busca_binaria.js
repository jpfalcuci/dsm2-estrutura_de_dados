/**
 * ALGORÍTIMO DE BUSCA BINÁRIA
 * Dados de uma lista, que deve estar PREVIAMENTE ORDENADA, e um valor de busca, divide a lista em duas metades
 * procurando pelo valor de busca apenas na metade onde o valor poderia estar.
 * Novas subdivisões são feitas até que se encontre o valor de busca 
 * ou que reste apenas uma sub lista vazia, quando se conclui que o valor de busca não existe na lista
 */


function buscaBinaria(lista, val) {
    let ini = 0;  // Início da lista
    let fim = lista.length - 1;  // Fim da lista
    let comps = 0;  // Conta o número de comparações
  
    while (ini <= fim) {
        // Resultado da divisão inteira (Descarta as casas decimais)
        const meio = Math.floor((ini + fim) / 2);

        // O valor de busca foi encontrado, retorna a posição
        if (lista[meio] === val) {
            comps += 1;
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
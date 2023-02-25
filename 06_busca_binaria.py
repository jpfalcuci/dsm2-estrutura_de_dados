""" 
    ALGORÍTIMO DE BUSCA BINÁRIA
    Dados de uma lista, que deve estar PREVIAMENTE ORDENADA, e um valor de busca, divide a lista em duas metades
    procurando pelo valor de busca apenas na metade onde o valor poderia estar.
    Novas subdivisões são feitas até que se encontre o valor de busca 
    ou que reste apenas uma sub lista vazia, quando se conclui que o valor de busca não existe na lista
"""
comps = 0       # Conta o número de comparações


def busca_binaria(lista, val):
    ini = 0                 # Início da lista
    fim = len(lista) - 1    # Fim da lista

    while ini <= fim:
        # Resultado da divisão inteira (Descarta as casas decimais)
        meio = (ini + fim) // 2

        # O valor de busca foi encontrado, retorna a posição
        if lista[meio] == val:
            comps += 1
            return meio

        elif val < lista[meio]:
            comps += 2
            fim = meio - 1

        else:
            comps += 2
            fim = meio + 1

    return -1   # Valor não existe na lista

""" 
    ALGORÍTIMO DE BUSCA BINÁRIA
    Dados de uma lista, que deve estar PREVIAMENTE ORDENADA, e um valor de busca, divide a lista em duas metades
    procurando pelo valor de busca apenas na metade onde o valor poderia estar.
    Novas subdivisões são feitas até que se encontre o valor de busca 
    ou que reste apenas uma sub lista vazia, quando se conclui que o valor de busca não existe na lista
"""

comps = 0               # Conta o número de comparações
def busca_binaria(lista, val):
    global comps
    comps = 0
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
            ini = meio + 1

    return -1   # Valor não existe na lista


import sys
sys.dont_write_bytecode = True # Impede a criação do cache

from time import time
from data.lista_nomes import nomes


hora_ini = time()
resultado = busca_binaria(nomes, 'JOAO')
hora_fim = time()
print(f'Posição do valor "JOAO" na lista: {resultado}')
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms, comparações: {comps}')
print('\n', '-' * 80, '\n', sep='')

hora_ini = time()
resultado = busca_binaria(nomes, 'CARLOS')
hora_fim = time()
print(f'Posição do valor "CARLOS" na lista: {resultado}')
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms, comparações: {comps}')
print('\n', '-' * 80, '\n', sep='')

hora_ini = time()
resultado = busca_binaria(nomes, 'YARA')
hora_fim = time()
print(f'Posição do valor "YARA" na lista: {resultado}')
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms, comparações: {comps}')
print('\n', '-' * 80, '\n', sep='')

hora_ini = time()
resultado = busca_binaria(nomes, 'ORKUTILSON')
hora_fim = time()
print(f'Posição do valor "ORKUTILSON" na lista: {resultado}')
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms, comparações: {comps}')
print('\n', '-' * 80, '\n', sep='')

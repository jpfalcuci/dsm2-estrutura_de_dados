# Variáveis de estatísticas
divs = juncs = comps = 0

def merge_sort(lista):
    """
        Função que implementa o algoritmo Merge Sort de forma ITERATIVA
    """

    global divs, juncs, comps

    # Inicia com o menor tamanho de partição de 2^0 = 1
    tam_part = 1
    n = len(lista)  # Obtém o tamanho da lista
    
    # O tamanho da sublista cresce em potências de 2
    while (tam_part < n):   # enquanto o tamanho da partição for menor que o tamanho da lista
        # Inicia sempre pela esquerda
        esq = 0
        while (esq < n):    # enquanto a posição da esquerda for menor que o tamanho da lista
            dir = min(esq + (tam_part * 2 - 1), n - 1)  # define a posição da direita como a menor entre esq+(2*tam_part-1) e n-1
            meio = (esq + dir) // 2 # define a posição do meio como a média entre esq e dir, arredondada para baixo

            # print(f"esq: {esq}, dir: {dir}, meio: {meio}")

            # A mescla final deve considerar sublistas não mescladas se o tamanho da lista original não for potência de 2
            comps += 1
            if (tam_part > n // 2):             # se o tamanho da partição for maior que o tamanho da lista / 2
                meio = dir  - (n % tam_part)    # ajusta a posição do meio para levar em conta sub-listas não mescladas
            
            # Divide a lista em duas sublistas
            tam_esq = meio - esq + 1
            tam_dir = dir - meio
            lista_esq = [0] * tam_esq   # Vetor auxiliar
            lista_dir = [0] * tam_dir   # Vetor auxiliar

            # Copia os elementos da sublista esquerda e da sublista direita para suas respectivas listas auxiliares
            for pos_esq in range(0, tam_esq):
                lista_esq[pos_esq] = lista[esq + pos_esq]
            for pos_esq in range(0, tam_dir):
                lista_dir[pos_esq] = lista[meio + pos_esq + 1]

            # Realiza a junção das duas sublistas em ordem crescente
            pos_esq, pos_dir, i = 0, 0, esq     # inicializa as variáveis de posição da sublista da esquerda, direita e da lista original
            while pos_esq < tam_esq and pos_dir < tam_dir:  # enquanto houver elementos nas duas sublistas
                comps += 1
                if lista_esq[pos_esq] > lista_dir[pos_dir]:
                    lista[i] = lista_dir[pos_dir]
                    pos_dir += 1
                else:
                    lista[i] = lista_esq[pos_esq]
                    pos_esq += 1
                i += 1

            # Insere o restante da sub-lista esquerda, se houver
            while pos_esq < tam_esq:
                lista[i] = lista_esq[pos_esq]
                pos_esq += 1
                i += 1

            # Insere o restante da sub-lista direita, se houver
            while pos_dir < tam_dir:
                lista[i] = lista_dir[pos_dir]
                pos_dir += 1
                i += 1

            esq += tam_part * 2 # Move o ponteiro esquerdo para a próxima sub-lista
            juncs += 1

        # Incrementa a sublista em potências de 2
        tam_part *= 2

        divs += 1

    return lista


############################################################

# nums = [7, 3, 6, 8, 1, 4, 9, 0, 5, 2]
# nums_ord = merge_sort(nums)
# print(nums_ord)

# Teste com vetor de 10 números
nums = [6, 4, 2, 0, 9, 5, 1, 8, 3, 7]
# nums = [9, 0, 8, 1, 7, 2, 6, 3, 5, 4]

divs = juncs = comps = 0    # Reseta as variáveis de estatísticas
print("Lista original:", nums)
resultado = merge_sort(nums)
print("Lista ordenada:", resultado)
print(f"Divisões: {divs}, junções: {juncs}, comparações: {comps}")
print('-' * 80, '\n', sep='')


################################################################################

import tracemalloc  # biblioteca para medir o consumo de memória
import sys
sys.dont_write_bytecode = True # Impede a criação do cache

from time import time
from data.nomes_desord import nomes

divs = juncs = comps = 0

tracemalloc.start() # Inicia a medição de memória
hora_ini = time()
resultado = merge_sort(nomes)
hora_fim = time()

# Captura as informações de gasto de memória
mem_atual, mem_pico = tracemalloc.get_traced_memory()

# print("Nomes ordenados: ", resultado)
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms')
print(f'Pico de memória: {round(mem_pico / 1024 / 1024, 3)} MB')
print(f"(Nomes) Divisões: {divs}, junções: {juncs}, comparações: {comps}")
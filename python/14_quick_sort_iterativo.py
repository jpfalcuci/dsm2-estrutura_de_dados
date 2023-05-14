passadas = comps = trocas = 0    # Variáveis de estatísticas

def quick_sort(lista, ini = 0, fim = None):
    """ Função que implementa o algoritmo Quick Sort de forma ITERATIVA """

    global passadas, comps, trocas

    if fim is None: fim = len(lista) - 1

    # Cria uma lista auxiliar
    tamanho = fim - ini + 1
    aux = [None] * tamanho
  
    # Inicializa a posição da lista auxiliar
    pos = -1
  
    # Coloca os valores iniciais de ini e fim na lista auxiliar
    pos = pos + 1
    aux[pos] = ini
    pos = pos + 1
    aux[pos] = fim
  
    # Continua retirando valores da lista auxiliar enquanto ela não estiver vazia
    while pos >= 0:
        passadas += 1

        # print(aux)
  
        # Retira fim e início
        fim = aux[pos]
        pos = pos - 1
        ini = aux[pos]
        pos = pos - 1
  
        # Coloca o pivô em sua posição correta na lista ordenada
        i = ini - 1
        x = lista[fim]
    
        for j in range(ini , fim):
            comps += 1
            if lista[j] <= x:
                # Incrementa a posição do menor elemento
                i = i + 1
                lista[i], lista[j] = lista[j], lista[i]
                trocas += 1
    
        lista[i + 1], lista[fim] = lista[fim], lista[i + 1]
        trocas += 1
        
        pivot = i + 1
  
        # Se há elementos à esquerda do pivô, coloca-os no lado esquerdo da lista auxiliar
        if pivot - 1 > ini:
            pos = pos + 1
            aux[pos] = ini
            pos = pos + 1
            aux[pos] = pivot - 1
  
        # Se há elementos à direita do pivô, coloca-os no lado direito da lista auxiliar
        if pivot + 1 < fim:
            pos = pos + 1
            aux[pos] = pivot + 1
            pos = pos + 1
            aux[pos] = fim

########################################################################

# nums = [7, 3, 6, 8, 1, 4, 9, 0, 5, 2]
# quick_sort(nums)
# print(nums)

# Teste com vetor de 10 números
# nums = [6, 4, 2, 0, 9, 5, 1, 8, 3, 7]
# nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

passadas = comps = trocas = 0    # Reseta as variáveis de estatísticas
print("Lista original:", nums)
quick_sort(nums)
print("Lista ordenada:", nums)
print(f"Comparações: {comps}, trocas: {trocas}, passadas: {passadas}")
print('-' * 80, '\n', sep='')


################################################################################

import tracemalloc  # biblioteca para medir o consumo de memória
import sys
sys.dont_write_bytecode = True # Impede a criação do cache

from time import time
from data.nomes_desord import nomes

passadas = comps = trocas = 0

tracemalloc.start() # Inicia a medição de memória
hora_ini = time()
quick_sort(nomes)
hora_fim = time()

# Captura as informações de gasto de memória
mem_atual, mem_pico = tracemalloc.get_traced_memory()

# print("Nomes ordenados: ", resultado)
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms')
print(f'Pico de memória: {round(mem_pico / 1024 / 1024, 3)} MB')
print(f"(Nomes) Comparações: {comps}, trocas: {trocas}, passadas: {passadas}")

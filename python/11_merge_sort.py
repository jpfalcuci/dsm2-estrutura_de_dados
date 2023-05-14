divs = juncs = comps = 0    # Variáveis de estatísticas

def merge_sort(lista):
    """ ALGORÍTMO DE ORDENAÇÃO MERGE SORT

    No processo de ordenação, esse algoritmo "desmonta" a lista original, contendo N elementos, até obter N listas com apenas um elemento cada uma.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" a lista, desta vez com os elementos já em ordem. """

    global divs, juncs, comps

    # Para que possa haver divisão da lista, esta deve ter mais de um elemento
    if len(lista) > 1:
        
        # Encontra a posição do meio da lista, para fazer a divisão em duas metades
        meio = len(lista) // 2

        # Tira uma cópia de cada metade da lista
        sublista_esq = lista[:meio]
        sublista_dir = lista[meio:]
        divs += 1   # Número de divisões

        # Chamamos recursivamente a função para que ela continue repartindo cada uma das sublistas em duas partes menores
        sublista_esq = merge_sort(sublista_esq)
        sublista_dir = merge_sort(sublista_dir)

        # AQUI COMEÇA A MESCLAGEM ORDENADA DAS DUAS SUBLISTAS
        pos_esq = pos_dir = 0
        ordenada = []   # Lista vazia

        # Compara os elementos das sublistas entre si e insere na lista ordenada o menor entre dois elementos
        while pos_esq < len(sublista_esq) and pos_dir < len(sublista_dir):
            # O menor elemento está na sublista da esquerda
            comps += 1  # Número de comparações
            if sublista_esq[pos_esq] < sublista_dir[pos_dir]:
                # 'Desce' o elemento da esquerda para a lista ordenada
                ordenada.append(sublista_esq[pos_esq])
                pos_esq += 1    # Incrementa pos_esq
            # O menor elemento está na sublista da direita
            else:
                # 'Desce' o elemento da direita para a sublista ordenada
                ordenada.append(sublista_dir[pos_dir])
                pos_dir += 1    # Incrementa pos_dir
        
        # Verificação da sobra
        sobra = []      # Lista vazia

        # Sobra à esquerda
        if(pos_esq < pos_dir): sobra = sublista_esq[pos_esq:]
        # Sobra à direita
        else: sobra = sublista_dir[pos_dir:]

        juncs += 1  # Número de junções

        # O resultado final é a junção (concatenação) da lista ordenada com a sobra
        return ordenada + sobra
    
    else: return lista


############################################################

# Teste com vetor de 10 números
nums = [6, 4, 2, 0, 9, 5, 1, 8, 3, 7]
# nums = [9, 0, 8, 1, 7, 2, 6, 3, 5, 4]
divs = juncs = comps = 0    # Reseta as variáveis de estatísticas
resultado = merge_sort(nums)
print("Lista original:", nums)
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

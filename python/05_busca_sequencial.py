# Lista de números
nums = [9, 21, 33, 12, 0, 18, 24, 30, 15, 6, 3, 27]

def busca_sequencial(lista, val):
    """ Função que realiza uma busca sequencial em uma lista procuração por val.
    Se val for encontrado, retorna a posição de val.
    Caso contrário, retorna o valor -1 """
    
    for pos in range(len(lista)):
        # Encontrou val; retorna a posição onde foi encontrado
        if val == lista[pos]: return pos
    # Percorreu toda a lista e não encontrou val: retorna -1
    return -1

# Busca sequencial: Lista precisa estar ordenada e quanto mais perto do fim o item estiver, mais tempo o algoritmo demora para encontrar
# Só é eficiente se o item procurado estiver no começo da lista


# TESTES

# Procurando o valor 15
resultado = busca_sequencial(nums, 15)
print(f'Posição do valor 15 na lista: {resultado}')
print('\n', '-' * 80, '\n', sep='')

# Procurando o valor 20
resultado = busca_sequencial(nums, 20)
print(f'Posição do valor 20 na lista: {resultado}')
print('\n', '-' * 80, '\n', sep='')

# Procurando o valor 33
resultado = busca_sequencial(nums, 33)
print(f'Posição do valor 33 na lista: {resultado}')
print('\n', '-' * 80, '\n', sep='')


# TESTES COM NOMES

import sys
sys.dont_write_bytecode = True # Impede a criação do cache

from time import time
from data.nomes_desord import nomes

hora_ini = time()
resultado = busca_sequencial(nomes, 'JOAO')
hora_fim = time()
print(f'Posição do valor "JOAO" na lista: {resultado}')
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms')
print('\n', '-' * 80, '\n', sep='')


from data.lista_nomes import nomes

hora_ini = time()
resultado = busca_sequencial(nomes, 'JOAO')
hora_fim = time()
print(f'Posição do valor "JOAO" na lista: {resultado}')
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms')
print('\n', '-' * 80, '\n', sep='')

hora_ini = time()
resultado = busca_sequencial(nomes, 'CARLOS')
hora_fim = time()
print(f'Posição do valor "CARLOS" na lista: {resultado}')
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms')
print('\n', '-' * 80, '\n', sep='')

hora_ini = time()
resultado = busca_sequencial(nomes, 'YARA')
hora_fim = time()
print(f'Posição do valor "YARA" na lista: {resultado}')
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms')
print('\n', '-' * 80, '\n', sep='')

hora_ini = time()
resultado = busca_sequencial(nomes, 'ORKUTILSON')
hora_fim = time()
print(f'Posição do valor "ORKUTILSON" na lista: {resultado}')
print(f'Tempo gasto: {round((hora_fim - hora_ini) * 1000, 2)}ms')
print('\n', '-' * 80, '\n', sep='')

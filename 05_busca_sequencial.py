# Lista de números
nums = [9, 21, 33, 12, 0, 18, 24, 30, 15, 6, 3, 27]

""" 
    Função que realiza uma busca sequencial em uma lista procuração por val.
    Se val for encontrado, retorna a posição de val.
    Caso contrário, retorna o valor -1
"""

def busca_sequencial(lista, val):
    for pos in range(len(lista)):
        # Encontrou val; retorna a posição onde foi encontrado
        if val == lista[pos]: return pos
    # Percorreu toda a lista e não encontrou val: retorna -1
    return -1

# Busca sequencial: Lista precisa estar ordenada e quanto mais perto do fim o item estiver, mais tempo o algoritmo demora para encontrar


# TESTES

# Procurando o valor 15
resultado = busca_sequencial(nums, 15)
print(f'Posição do valor 15 na lista: {resultado}')

# Procurando o valor 15
resultado = busca_sequencial(nums, 20)
print(f'Posição do valor 20 na lista: {resultado}')

# Procurando o valor 15
resultado = busca_sequencial(nums, 33)
print(f'Posição do valor 33 na lista: {resultado}')


from data.nomes_desord import nomes

resultado = busca_sequencial(nomes, 'JOAO')
print(f'Posição do valor "JOAO" na lista: {resultado}')
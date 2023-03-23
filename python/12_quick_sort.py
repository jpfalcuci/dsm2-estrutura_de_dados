"""
    ALGORITMO DE ORDENAÇÃO QUICK SORT

    Escolha um dos elementos da lista para ser o pivô (na nossa implementação, o último elemento)
    e, na primeira passada, divide a lista, a partir da posição final do pivô, em uma sublista à esquerda,
    contendo apenas valores menores que o pivô, e outra à direita, que contém apenas valores maiores que o pivô.

    Em seguida, recursivamente, repete o processo em cada uma das sublistas, até que toda lista esteja ordenada.
"""

passadas = comps = trocas = 0    # Reseta as variáveis de estatísticas

def quick_sort(lista, ini=0, fim=None):
    
    # Quando não soubermos o valor da variável "fim", vamos atribuir a ela a última posição da lista
    if fim is None: fim = len(lista) - 1

    # Para que o algoritmo trabalhe, é necessário que a faixa delimitada pelas variáveis "int" e "fim" tenha, pelo menos, dois elementos
    # Caso contrário, saímos da função sem fazer nada
    if fim <= ini: return

    global passadas, comps, trocas

    # Inicialização das variáveis
    pivot = fim
    div = ini - 1
    passadas += 1

    # Percorre a lista da posição "int" até a posição "fim" - 1
    for pos in range(ini, fim):
        # Compara os elementos das posições "pos" e "pivot"
        comps += 1
        if lista[pos] < lista[pivot]:
            div += 1
            # Se os valores das variáveis "div" e "pos" forem diferentes entre si e o elemento "pos" for menor
            # que o elemento da posição "div", promove a troca entre eles
            comps += 1
            if pos != div and lista[pos] < lista[div]:
                lista[pos], lista[div] = lista[div], lista[pos]
                trocas += 1

    # Depois que o loop acaba, o divisor é incrementado ainda uma vez
    div += 1

    # Caso os valores das posições "div" e "pivot" sejam diferentes entre si, é feita a comparação entre os elementos dessas posições.
    # Se o valor de "pivot" for menor, promove-se a troca entre os elementos.
    comps += 1
    if pivot != div and lista[pivot] < lista[div]:
        lista[pivot], lista[div] = lista[div], lista[pivot]
        trocas += 1

    # O ELEMENTO DA POSIÇÃO "div" ESTÁ EM SEU LUGAR CORRETA AGORA

    # Chamamos recursivamente a função para ordenar a sublista à esquerda da posição "div"
    quick_sort(lista, ini, div - 1)

    # Fazemos o mesmo para ordenar a sublista à direita de "div"
    quick_sort(lista, div + 1, fim)


############################################################

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
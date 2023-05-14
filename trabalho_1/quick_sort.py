import datetime
import tracemalloc
import sys
sys.dont_write_bytecode = True


passadas = comps = trocas = 0


def quick_sort(lista, ini=0, fim=None):
    """ ALGORITMO DE ORDENAÇÃO QUICK SORT

    Escolha um dos elementos da lista para ser o pivô (na nossa implementação, o último elemento)
    e, na primeira passada, divide a lista, a partir da posição final do pivô, em uma sublista à esquerda,
    contendo apenas valores menores que o pivô, e outra à direita, que contém apenas valores maiores que o pivô.
    Em seguida, recursivamente, repete o processo em cada uma das sublistas, até que toda lista esteja ordenada. """
    
    # Quando não soubermos o valor da variável "fim", vamos atribuir a ela a última posição da lista
    if fim is None: fim = len(lista) - 1

    # Para que o algoritmo trabalhe, é necessário que a faixa delimitada pelas variáveis "int" e "fim" tenha, pelo menos, dois elementos
    # Caso contrário, saímos da função sem fazer nada
    if fim <= ini: return

    global passadas, comps, trocas

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

    div += 1    # Depois que o loop acaba, o divisor é incrementado ainda uma vez

    # Caso os valores das posições "div" e "pivot" sejam diferentes entre si, é feita a comparação entre os elementos dessas posições.
    # Se o valor de "pivot" for menor, promove-se a troca entre os elementos.
    comps += 1
    if pivot != div and lista[pivot] < lista[div]:
        lista[pivot], lista[div] = lista[div], lista[pivot]
        trocas += 1

    # O ELEMENTO DA POSIÇÃO "div" ESTÁ EM SEU LUGAR CORRETO AGORA

    # Chamamos recursivamente a função para ordenar as sublista à esquerda da posição "div", e depois à direita
    quick_sort(lista, ini, div - 1)
    quick_sort(lista, div + 1, fim)


def teste(lista):
    global passadas, comps, trocas
    passadas = comps = trocas = 0

    print(f'\nEmpresas (original): {lista[:5]} ... {lista[-5:]}')

    tracemalloc.start()
    hora_ini = datetime.datetime.now()
    quick_sort(lista)
    hora_fim = datetime.datetime.now()
    mem_atual, mem_pico = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    tempo_gasto = hora_fim - hora_ini
    tempo_str = str(tempo_gasto)
    tempo_ms = round(tempo_gasto.total_seconds() * 1000, 2)
    tempo_s = round(tempo_gasto.total_seconds(), 2)

    print(f'Empresas (ordenado): {lista[:5]} ... {lista[-5:]}')
    print(f'Tempo gasto: {tempo_str} ({tempo_ms}ms | {tempo_s}s)')
    print(f'Pico de memória: {round(mem_pico / 1024 / 1024, 5)} MB')
    print(f'Comparações: {comps}, trocas: {trocas}, passadas: {passadas}\n')


from data.emp10mil import empresas
print('\nQuick Sort (10k)')
teste(empresas)

from data.emp25mil import empresas
print('\nQuick Sort (25k)')
teste(empresas)

from data.emp50mil import empresas
print('\nQuick Sort (50k)')
teste(empresas)

from data.emp100mil import empresas
print('\nQuick Sort (100k)')
teste(empresas)

import datetime
import tracemalloc
import sys
sys.dont_write_bytecode = True


def selection_sort(lista):
    """ ALGORITMO DE ORDENAÇÃO SELECTION SORT

    Isola (seleciona) o primeiro elemento da lista e, em seguida, encontra o menor valor no restante da lista.
    Se o valor encontrado for menor que o valor previamente selecionado, efetua a troca entre eles.
    Continuando, seleciona o segundo elemento da lista, buscando pelo menor valor das posições subsequentes.
    Faz a troca entre os dois valores, se necessário.
    O processo se repete até que o penúltimo elemento da lista seja isolado, comparado com o último e feita a troca entre eles, se for o caso """

    global comps, trocas, passadas
    comps = trocas = passadas = 0
    
    for pos_sel in range(len(lista) - 1):   # Loop que vai da primeira até a PENÚLTIMA posição
        passadas += 1

        # Encontra o menor valor da sublista à frente de pos_sel
        pos_menor = pos_sel + 1
        for pos in range(pos_sel + 2, len(lista)):
            # Se o valor encontrado na posição pos for MENOR que o valor da posição pos_menor, então pos_menor passa a ser pos
            comps += 1
            if lista[pos] < lista[pos_menor]: pos_menor = pos

        # Compara os elementos das posições pos_menor e pos_sel.
        # Se o valor do primeiro for MENOR que o valor do segundo, efetua a troca
        comps += 1
        if lista[pos_menor] < lista[pos_sel]:
            lista[pos_menor], lista[pos_sel] = lista[pos_sel], lista[pos_menor]
            trocas += 1


def teste(lista):
    print(f'\nEmpresas (original): {lista[:5]} ... {lista[-5:]}')

    tracemalloc.start()
    hora_ini = datetime.datetime.now()
    selection_sort(lista)
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
print('\nSelection Sort (10k)')
teste(empresas)

from data.emp25mil import empresas
print('\nSelection Sort (25k)')
teste(empresas)

from data.emp50mil import empresas
print('\nSelection Sort (50k)')
teste(empresas)

from data.emp100mil import empresas
print('\nSelection Sort (100k)')
teste(empresas)

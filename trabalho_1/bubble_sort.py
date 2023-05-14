import datetime
import tracemalloc
import sys
sys.dont_write_bytecode = True


def bubble_sort(lista):
    """ ALGORITMO DE ORDENAÇÃO BUBBLE SORT

    Percorre a lista a ser ordenada em sucessivas passadas, trocando dois elementos adjacentes sempre que o segundo for MENOR que o primeiro.
    Efetua tantas passadas quanto necessárias, até que, na última passada, nenhuma troca seja efetuada """

    global comps, trocas, passadas
    comps = trocas = passadas = 0

    while True: # Loop eterno, não sabemos quantas passadas serão necessárias
        trocou = False
        passadas += 1

        # Percurso da lista, do primeiro ao PENÚLTIMO elemento, com acesso a cada posição
        for pos in range(len(lista) - 1):
            comps += 1
            
            # Se o número que está a frente na lista for MENOR do que o que está atrás, TROCA
            if lista[pos + 1 ] < lista[pos]:
                lista[pos + 1], lista[pos] = lista[pos], lista[pos + 1]
                trocou = True
                trocas += 1

        if not trocou:  # Não houve troca na passada
            break       # Interrompe o loop eterno; acabou


def teste(lista):
    print(f'\nEmpresas (original): {lista[:5]} ... {lista[-5:]}')

    tracemalloc.start()
    hora_ini = datetime.datetime.now()
    bubble_sort(lista)
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
print('\nBubble Sort (10k)')
teste(empresas)

from data.emp25mil import empresas
print('\nBubble Sort (25k)')
teste(empresas)

from data.emp50mil import empresas
print('\nBubble Sort (50k)')
teste(empresas)

from data.emp100mil import empresas
print('\nBubble Sort (100k)')
teste(empresas)

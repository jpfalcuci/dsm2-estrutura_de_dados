import datetime
import tracemalloc
import sys
sys.dont_write_bytecode = True


passadas = comps = trocas = 0


def quick_sort(lista, ini = 0, fim = None):
    """
        Função que implementa o algoritmo Quick Sort de forma ITERATIVA
    """

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
print('\nQuick Sort Iter (10k)')
teste(empresas)

from data.emp25mil import empresas
print('\nQuick Sort Iter (25k)')
teste(empresas)

from data.emp50mil import empresas
print('\nQuick Sort Iter (50k)')
teste(empresas)

from data.emp100mil import empresas
print('\nQuick Sort Iter (100k)')
teste(empresas)
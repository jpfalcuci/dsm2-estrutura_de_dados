import datetime
import tracemalloc
import sys
sys.dont_write_bytecode = True


divs = juncs = comps = 0    # Variáveis de estatísticas


def merge_sort(lista):
    """
        Função que implementa o algoritmo Merge Sort de forma ITERATIVA
    """

    global divs, juncs, comps

    tam_part = 1    # Inicia com o menor tamanho de partição de 2^0 = 1
    n = len(lista)  # Obtém o tamanho da lista
    
    # O tamanho da sublista cresce em potências de 2
    while (tam_part < n):   # enquanto o tamanho da partição for menor que o tamanho da lista
        esq = 0             # Inicia sempre pela esquerda
        while (esq < n):    # enquanto a posição da esquerda for menor que o tamanho da lista
            divs += 1
            dir = min(esq + (tam_part * 2 - 1), n - 1)  # define a posição da direita como a menor entre esq+(2*tam_part-1) e n-1
            meio = (esq + dir) // 2 # define a posição do meio como a média entre esq e dir, arredondada para baixo

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

        tam_part *= 2   # Incrementa a sublista em potências de 2

    return lista


def teste(lista):
    global divs, juncs, comps
    divs = juncs = comps = 0

    print(f'\nEmpresas (original): {lista[:5]} ... {lista[-5:]}')

    tracemalloc.start()
    hora_ini = datetime.datetime.now()
    resultado = merge_sort(lista)
    hora_fim = datetime.datetime.now()
    mem_atual, mem_pico = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    tempo_gasto = hora_fim - hora_ini
    tempo_str = str(tempo_gasto)
    tempo_ms = round(tempo_gasto.total_seconds() * 1000, 2)
    tempo_s = round(tempo_gasto.total_seconds(), 2)

    print(f'Empresas (ordenado): {resultado[:5]} ... {resultado[-5:]}')
    print(f'Tempo gasto: {tempo_str} ({tempo_ms}ms | {tempo_s}s)')
    print(f'Pico de memória: {round(mem_pico / 1024 / 1024, 5)} MB')
    print(f'Divisões: {divs}, junções: {juncs}, comparações: {comps}\n')


from data.emp10mil import empresas
print('\nMerge Sort Iter (10k)')
teste(empresas)

from data.emp25mil import empresas
print('\nMerge Sort Iter (25k)')
teste(empresas)

from data.emp50mil import empresas
print('\nMerge Sort Iter (50k)')
teste(empresas)

from data.emp100mil import empresas
print('\nMerge Sort Iter (100k)')
teste(empresas)

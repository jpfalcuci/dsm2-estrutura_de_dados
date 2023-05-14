import datetime
import tracemalloc
import sys
sys.dont_write_bytecode = True


divs = juncs = comps = 0    # Variáveis de estatísticas


def merge_sort(lista):
    """ ALGORÍTMO DE ORDENAÇÃO MERGE SORT

    No processo de ordenação, esse algoritmo "desmonta" a lista original, contendo N elementos, até obter N listas com apenas um elemento cada uma.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" a lista, desta vez com os elementos já em ordem. """

    global divs, juncs, comps

    if len(lista) > 1:  # Para que possa haver divisão da lista, esta deve ter mais de um elemento
        
        meio = len(lista) // 2  # Encontra a posição do meio da lista, para fazer a divisão em duas metades

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
print('\nMerge Sort (10k)')
teste(empresas)

from data.emp25mil import empresas
print('\nMerge Sort (25k)')
teste(empresas)

from data.emp50mil import empresas
print('\nMerge Sort (50k)')
teste(empresas)

from data.emp100mil import empresas
print('\nMerge Sort (100k)')
teste(empresas)

"""
    1) Identifique o algoritmo abaixo.
        R: Merge Sort

    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
        a: Nome da função
        b: Lista passada a função como parâmetro
        c: Metade da lista
        d: Sublista da esquerda
        e: Sublista da direita
        f: Posição da lista da esquerda
        g: Posição da lista da direita
        h: Lista ordenada
        i: Lista para verificar a sobra

    3) Há um erro no algoritmo. Identifique-o, descreva-o e corrija-o.
"""

def a(b):
    if len(b) <= 1: return b
    c = len(b) // 2
    d = b[:c]
    e = b[c:]
    d = a(d)
    e = a(e)
    f = g = 0
    h = []
    # i = []    Esta lista deve ser declarada após o loop while
    while f < len(d) and g < len(e):
        if d[f] < e[g]:
            # i.append(d[f])    Aqui deveria ser a lista ordenada (h)
            h.append(d[f])      # Correção da lista ordenada
            f += 1
        else:
            # i.append(e[g])    Aqui deveria ser a lista ordenada (h)
            h.append(e[g])      # Correção da lista ordenada
            g += 1
    i = []  # Posição correta da lista da sobra (i)
    if(f < g): i = d[f:]
    else: i = e[g:]
    return h + i


nums = [6, 4, 2, 0, 9, 5, 1, 8, 3, 7]
result = a(nums)
print("Lista original:", nums)
print("Lista ordenada:", result)

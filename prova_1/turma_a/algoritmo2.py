"""
    1) Identifique o algoritmo abaixo.
        R: Busca Binária

    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
        a: Nome da função
        b: Lista passada a função como parâmetro
        c: Valor a ser procurado na lista
        d: Posição inicial da lista
        e: Posição final da lista
        f: Posição do meio da lista

    3) Há um erro no algoritmo. Identifique-o, descreva-o e corrija-o.
"""    

def a(b, c):
    d = 0
    e = len(b) - 1
    while d <= e: 
        f = (d + e) // 2
        # if c == b[f]: e = f   Aqui deveria retornar o meio da lista
        if c == b[f]: return f  # Retornando o meio da lista
        elif c < b[f]: e = f - 1
        else: d = f + 1
    return -1


nums = [6, 4, 2, 0, 9, 5 ,1, 8, 3, 7]
numero = 9
result = a(nums, numero)
print(f'Lista: {nums}')
print(f'Posição de {numero} na lista: {result}')

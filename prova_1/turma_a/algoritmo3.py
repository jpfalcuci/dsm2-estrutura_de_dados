"""
    1) Identifique o algoritmo abaixo.
        R: Bubble Sort
    
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
        a: Nome da função
        b: Lista passada a função como parâmetro
        c: Variável de controle de trocas
        d: Posição, iterador do for

    3) Há um erro no algoritmo. Identifique-o, descreva-o e corrija-o.
"""

def a(b):
    while True:
        c = False
        for d in range(len(b) - 1):
            if b[d + 1] < b[d]:
                # b[d + 1], b[c] = b[c], b[d + 1]   Lista (b) deve receber a posição (d) no index
                b[d + 1], b[d] = b[d], b[d + 1]
                c = True
        if not c:
            break


nums = [6, 4, 2, 0, 9, 5 ,1, 8, 3, 7]
print('Lista original: ', nums)
a(nums)
print('Lista ordenada: ', nums)

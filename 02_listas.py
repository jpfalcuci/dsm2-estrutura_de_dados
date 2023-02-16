# LISTAS EM PYTHON
# Listas são uma forma de armazenar mais de um valor em uma única variável
# Os valores podem ser de tipos diferentes

# Uma lista de números
valores = [2, 3, 5, 7, 9, 11, 'batata', 'tomate', True]


# OPERAÇÕES SOBRE LISTAS
# 1) PERCURSO: significa percorrer a lista do primeiro até o último elemento, fazendo algo com cada um deles.
#   No caso, a seguir, vamos exibir cada um dos elementos separadamente usando print()
for v in valores:
    print(v)

print('\n', '*' * 80, sep='') # Imprime * 80 vezes


# 2) INSERÇÃO DE UM NOVO ELEMENTO NO *FIM* DA LISTA: append()
valores.append('cebola')
print(valores)
valores.append(29)
print(valores)

print('\n', '-' * 80, sep='') # Imprime - 80 vezes


# 3) INSERINDO UM NOVO ELEMENTO EM UMA POSIÇÃO ESPECIFICADA: insert()
#    Parâmetros:
#    1º: índice para inserir
#    2º: valor a ser inserido
valores.insert(4, 'chuchu') # Inserindo 'chuchu' no índice 4
print(valores)

valores.insert(0, 'abobrinha') # Inserindo 'abobrinha' na primeira posição
print(valores)

print('\n', '-' * 80, sep='')


# 4) ACESSANDO UM VALOR EM UMA POSIÇÃO ESPECÍFICA
print('Elemento na SÉTIMA posição:', valores[6])
print('Elemento na TERCEIRA posição:', valores[2])
print('Elemento na PRIMEIRA posição:', valores[0])
print('Elemento na ÚLTIMA posição:', valores[-1])
print('Elemento na PENÚLTIMA posição:', valores[-2])

print('\n', '-' * 80, sep='')


# 5) SUBSTITUINDO VALORES EXISTENTES
print('Antes:', valores)
valores[10] = 'cenoura'     # Substituindo o valor da posição 10 (11º elemento)
valores[0] = 'beterraba'    # Substituindo o valor da posição 0 (1º elemento)
valores[-1] = 'alho'        # Substituindo o valor da última posição
print('Depois:', valores)

print('\n', '-' * 80, sep='')

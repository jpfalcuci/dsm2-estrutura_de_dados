# Lista
frutas = ['laranja', 'maçã', 'uva', 'pêra', 'mamão', 'abacate', 'amora']

# Para percorrer uma lista e exibir apenas seus elementos, usamos for..in, como já vimos no arquivo 02
for f in frutas:
    print(f)

print('\n', '-' * 80, sep='')


# Se quisermos percorrer a lista em ordem inversa para exibir apenas seus elementos, podemos usar for..in combinado com reserved()
for f in reversed(frutas):
    print(f)

print('\n', '-' * 80, sep='')


# Agora, se precisarmos exibir, além do elemento, também sua POSIÇÃO, devemos usar range():
for pos in range(len(frutas)):
    print(f'A fruta {frutas[pos]} está na posição {pos}.')

print('\n', '-' * 80, sep='')


# Percurso em ordem inversa usando range() com 3 parâmetros
for i in range(len(frutas) -1, -1, -1):
    print(f'A fruta {frutas[i]} está na posição {i}.')

print('\n', '-' * 80, sep='')
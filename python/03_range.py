# range(): função que gera uma faixa de números
# É muito usada em associação com listas


# range() com 1 parâmetro: gera uma faixa que vai de 0 até o valor do parâmetro -1
for x in range(10):
    print(x)

print('\n', '-' * 80, sep='')


# range() com 2 parâmetros: gera uma lista começando pelo primeiro parâmetro (inclusive) até o segundo argumento (exclusive, NÃO ENTRA)
for y in range(5, 12):
    print(y)

print('\n', '-' * 80, sep='')


# range() com 3 parâmetros:
# 1º: limite inferior (inclusive)
# 2º: limite superior (EXCLUSIVE)
# 3º: passo (de quanto em quanto a lista vai saltar; PODE SER NEGATIVO)
for z in range(0, 22, 3):   # De 0 a 21 saltando de 3 em 3
    print(z)

print('\n', '-' * 80, sep='')
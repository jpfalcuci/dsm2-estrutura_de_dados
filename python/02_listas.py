# LISTAS EM PYTHON
# Listas são uma forma de armazenar mais de um valor em uma única variável
# Os valores podem ser de tipos diferentes

# Uma lista de números, strings e boolean
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


# 6) DETERMINANDO QUANTOS ELEMENTOS HÁ NA LISTA: len()
print("Número de elementos na lista:", len(valores))

# Imprimindo o último elemento da lista com a ajuda de len()
print("Último valor da lista:", valores[len(valores) - 1])

print('\n', '-' * 80, sep='')


# 7) REMOVENDO O ÚLTIMO ELEMENTO DA LISTA: pop()
print("Antes:", valores)
ultimo = valores.pop()
print("Valor removido da lista:", ultimo)
print("Depois:", valores)

print('\n', '-' * 80, sep='')


# 8) REMOVENDO UM ELEMENTO POR SUA POSIÇÃO: pop() com parãmetro
print("Antes:", valores)
pos9 = valores.pop(9)   # Remove o elemento da posição 9
print("Valor removido da posição 9:", pos9)
pos0 = valores.pop(0)   # Remove o primeiro elemento (posição 0)
print("Valor removido da posição 0:", pos0)
print("Depois:", valores)

print('\n', '-' * 80, sep='')


# 9) REMOVENDO UM ELEMENTO PELO SEU VALOR: remove()
print("Antes:", valores)
valores.remove("batata")    # Remove o valor "batata"
valores.remove(5)           # Remove o valor 5
print("Depois:", valores) 

print('\n', '-' * 80, sep='')


# Acrescentando mais alguns elementos na lista
valores.append(13)
valores.append(15)
valores.append('milho')
valores.append(17)
valores.append('mandioca')
valores.append(19)


# 10) FATIANDO UMA LISTA
print(valores)

# Cria uma sublista que contém os elementos de 1 até a posição 7 (posição 8 NÃO ENTRA)
sublista1_7 = valores[1:8]
print('Sublista de 1 à 7:', sublista1_7)

# Cria uma sublista que contém os elementos do início até a posição 5 (posição 6 NÃO ENTRA)
sublista0_5 = valores[:6]
print('Sublista de 0 à 5:', sublista0_5)

# Cria uma sublista que contém os elementos da posição 10 até o fim da lista
sublista10_fim = valores[10:]
print('Sublista de 10 até o final:', sublista10_fim)

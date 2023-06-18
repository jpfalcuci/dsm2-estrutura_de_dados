"""
	1) Identifique o algoritmo abaixo.
	RESPOSTA ~> Trata-se do algoritmo de ordenação Selection Sort
	2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
	RESPOSTA ~>
	z ~> função selection_sort
	y ~> a lista a ser ordenada
	x ~> posição da lista no loop
	w ~> posição do menor
	i ~> posição da lista no loop interno
	3) Há um erro no algoritmo. Identifique-o, descreva-o e corrija-o.
	RESPOSTA ~> No if dentro do loop interno, x estava sendo usado como
				variável de índice, quando o correto é utilizar a variável
				w.
"""

def z(y):
	for x in range(len(y) - 1):
		w = x + 1
		for i in range(x + 2, len(y)):
			# if y[i] < y[x]:   # Erro
			if y[i] < y[w]:
				w = i
		if y[w] < y[x]:
			y[x], y[w] = y[w], y[x]

"""
	1) Identifique o algoritmo abaixo.
	RESPOSTA ~> Trata-se do algoritmo de busca binária.
	2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
	RESPOSTA ~>
	z ~> função busca_binaria
	y ~> lista onde será feita a busca
	x ~> valor a ser buscado
	w ~> posição inicial
	v ~> posição final
	u ~> meio calculado da lista
	3) Há um erro no algoritmo. Identifique-o, descreva-o e corrija-o.
	RESPOSTA ~> Quando o valor de busca é encotrado, deve-se
				retornar o valor do meio, no caso, u.
"""

def z(y, x):
	w = 0
	v = len(y) - 1
	while w <= v:
		u = (w + v) // 2
		# if x == y[u]: v = u   # Erro
		if x == y[u]: return u
		elif x < y[u]: v = u - 1
		else: w = u + 1
	return -1

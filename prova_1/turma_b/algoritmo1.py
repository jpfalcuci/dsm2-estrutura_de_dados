"""
	1) Identifique o algoritmo abaixo.
	RESPOSTA ~> Trata-se do algoritmo de ordenação Quick Sort.
	2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
	RESPOSTA ~>
	z ~> função quick_sort
	y ~> lista a ser ordenada
	x ~> posição inicial
	w ~> posição final
	v ~> pivô
	u ~> divisor
	t ~> posição do vetor no loop
	3) Há um erro no algoritmo. Identifique-o, descreva-o e corrija-o.
	RESPOSTA ~> havia um incremento sendo feito na variável w em dois pontos
				do código. O correto é incrementar a variável u.
"""

def z(y, x = 0, w = None):
	if w is None: w = len(y) - 1
	if w <= x: return
	v = w
	u = x - 1
	for t in range(x, w):
		if y[t] < y[v]:
			# w += 1    # Erro
			u += 1
			if t != u and y[t] < y[u]:
				y[t], y[u] = y[u], y[t]
	# w += 1    # Erro
	u += 1
	if v != u and y[v] < y[w]:
		y[v], y[u] = y[u], y[v]
	z(y, x, u - 1)
	z(y, u + 1, w)

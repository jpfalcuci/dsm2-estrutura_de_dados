"""
	1. Todas as questões deste arquivo referem-se à árvore binária de busca representada
		na imagem "abb.png".

	2. Caso seja necessário escrever algum código para responder às perguntas seguintes,
		importe a classe BinarySearchTree neste arquivo e faça os testes aqui.

	3. Qual a altura da subárvore à direita de 45?
		Altura 6 (72 -(1) 66 -(2) 60 -(3) 49 -(4) 54 -(5) 57 -(6) 63)

	4. Quais níveis da árvore estão completos, isto é, já contêm o número máximo de nodos
		permitidos?
		Níveis 0, 1, 2 e 3

	5. Qual a profundidade do nodo de valor 27, em relação à árvore como um todo?
		Produnfidade 4 (45 -(1) 24 -(2) 39 -(3) 36 -(4) 27)

	6. A árvore representada está equilibrada? Por quê? Justifique sua resposta.
		Não, porque o lado direito tem altura 7 e o lado esquerdo tem altura 5, a diferença é maior que 1

	7. Como ficaria o percurso pré-ordem desta árvore?
		PERCURSO PRÉ-ORDEM: 45, 24, 9, 3, 0, 6, 15, 12, 18, 39, 36, 27, 33, 42, 72, 66, 60, 49, 54, 51, 57, 63, 69, 84, 78, 75, 81, 96, 90, 87, 99.

	8. Se for removido o nodo raiz (de valor 45), qual(is) nodo(s) poderia(m) ocupar o seu lugar?
	   Justifique sua resposta.
		O nodo 42 por ser o maior do lado esquerdo ou o nodo 49 por ser o menor do lado direito.
"""

from lib.binary_search_tree import BinarySearchTree

arvore = BinarySearchTree()
nodos = [45, 24, 9, 39, 3, 15, 36, 42, 0, 6, 12, 18, 27, 33, 72, 66, 84, 60, 69, 78, 96, 49, 75, 81, 90, 99, 54, 87, 51, 57, 63]

for nodo in nodos:
	arvore.insert(nodo)

print("PERCURSO PRÉ-ORDEM:")
arvore.pre_order_traversal(print)

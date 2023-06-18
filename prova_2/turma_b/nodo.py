"""
	1. Observe a classe Nodo listada logo abaixo.

	2. Responda: para qual ou quais estruturas esse nodo pode ser utilizado?
	   RESPOSTA ~> A classe Node, conforme mostrada abaixo, poderia ser utilizada com as
				   estruturas lista duplamente encadeade (DoublyLinkedList) e árvore
				   binária de busca (BinarySearchTree);

	3. Qual seria o propósito dos atributos a, b e c?
	   RESPOSTA ~> O atributo a, para ambas as estruturas, representa a informação de
				   usuário armazenada no nodo.
				   O atributo b seria o prev para DoublyLinkedList ou o left para
				   BinarySearchTree.
				   O atributo c seria o next para DoublyLinkedList ou o right para
				   BinarySearchTree.

"""

class Node:
	def init(self, x):
		self.a = x
		self.b = None
		self.c = None

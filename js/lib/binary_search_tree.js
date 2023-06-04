/**
 * Classe que representa cada unidade de informação (nodo) da árvore binária de busca.
 *
 * Possui três atributos:
 * 1) Informação relevante para o usuário (data)
 * 2) Ponteiro para o nodo descendente à esquerda (left)
 * 3) Ponteiro para o nodo descendente à direita (right)
 */
class Node {

	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}

/**
 * ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
 *
 * * Árvore ~> é uma estrutura de dados não linear, considerada uma especialização do grafo, formada recursivamente por outras árvores (subárvores)
 * * Árvore binária ~> uma árvore na qual cada nodo tem grau máximo igual a 2. Em outras palavras, cada nodo pode ter até dois descendentes diretos
 * * Árvore binária de busca ~> é uma árvore binária em que as inserções são feitas de forma ordenada, de modo a otimizar a operação de busca binária
 */
class BinarySearchTree {

	constructor() {
		this._root = null;      // Raiz da árvore
	}

	/** Método PÚBLICO para a inserção de um VALOR na árvore */
	insert(val) {
		// Cria um novo nodo para armazenar o valor
		const newNode = new Node(val);

		if (this._root === null) {
			// 1º caso: a árvore está vazia.
			// O primeiro nodo inserido será a raiz
			this._root = newNode;
		} else {
			// 2º caso: a raiz já existe. É necessário procurar pela posição de inserção do novo nodo, o que é feito por um método privado
			this._insertNode(this._root, newNode);
		}
	}

	/** Método PRIVADO para inserção de um NODO na árvore */
	_insertNode(root, newNode) {
		if (newNode.data < root.data) {
			// 1º caso: o valor do novo nodo é MENOR que o valor na raiz
			if (root.left === null) {
				// Se a esquerda da raiz estiver desocupada, insere aí
				root.left = newNode;
			} else {
				// Senão, passa a considerar o nodo da esquerda como raiz
				this._insertNode(root.left, newNode);
			}
		} else if (newNode.data > root.data) {
			// 2º caso: o valor do novo nodo é MAIOR que o valor na raiz
			if (root.right === null) {
				// Se a direita da raiz estiver desocupada, insere aí
				root.right = newNode;
			} else {
				// Senão, passa a considerar o nodo da direita como raiz
				this._insertNode(root.right, newNode);
			}
		}
	}

	/**
	 * Método que percorre a árvore em-ordem
	 *
	 * 1º: percorre recursivamente a subárvore esquerda em-ordem
	 * 2º: visita a raiz
	 * 3º: percorre recursivamente a subárvore direita em-ordem
	 */
	inOrderTraversal(action, root = false) {
		if (root === false) {
			// Se root for False, começamos pela raiz da árvore
			root = this._root;
		}

		if (root !== null) {
			this.inOrderTraversal(action, root.left);   // 1º
			action(root.data);                          // 2º
			this.inOrderTraversal(action, root.right);  // 3º
		}
	}

	/**
	 * Método que percorre a árvore pré-ordem
	 *
	 * 1º: visita a raiz
	 * 2º: percorre recursivamente a subárvore esquerda pré-ordem
	 * 3º: percorre recursivamente a subárvore direita pré-ordem
	 */
	preOrderTraversal(action, root = this._root) {
		if (root !== null) {
			action(root.data);							// 1º
			this.preOrderTraversal(action, root.left);	// 2º
			this.preOrderTraversal(action, root.right);	// 3º
		}
	}

	/**
	 * Método que percorre a árvore pós-ordem
	 *
	 * 1º: percorre recursivamente a subárvore esquerda pós-ordem
	 * 2º: percorre recursivamente a subárvore direita pós-ordem
	 * 3º: visita a raiz
	 */
	postOrderTraversal(action, root = this._root) {
		if (root !== null) {		
			this.postOrderTraversal(action, root.left);		// 1º
			this.postOrderTraversal(action, root.right);	// 2º
			action(root.data);								// 3º
		}
	}

	/** Método PÚBLICO que verifica se um valor existe na ABB */
	exists(key) {
		const node = this._searchNode(this._root, key);
		return (node !== null);
	}

	/** Método PRIVADO que procura por um nodo que contém um valor fornecido (key) e retorna esse nodo, se ele existir, ou None, caso contrário */
	_searchNode(root, key) {
		if (root === null) {
			// 1º caso: árvore vazia
			return null;
		}

		if (key < root.data) {
			// 2º caso: o valor de key é MENOR que o valor na raiz
			// Continua a buscar recursivamente pela subárvore ESQUERDA
			return this._searchNode(root.left, key);
		} else if (key > root.data) {
			// 3º caso: o valor de key é MAIOR que o valor na raiz
			// Continua a buscar recursivamente pela subárvore DIREITA
			return this._searchNode(root.right, key);
		} else {
			// 4º caso: o valor de key é IGUAL que o valor na raiz
			// ENCONTROU O NODO, retorna o nodo root
			return root;
		}
	}

	/** Método PRIVADO que retorna o maior nodo de uma subárvore */
	_maxNode(root = this._root) {
		let node = root;
		// A partir da raiz, desce pela direita até onde der
		while (node !== null && node.right !== null) {
			node = node.right;
		}
		return node;
	}

	/** Método PRIVADO que retorna o menor nodo de uma subárvore */
	_minNode(root = this._root) {
		let node = root;
		// A partir da raiz, desce pela esquerda até onde der
		while (node !== null && node.left !== null) {
			node = node.left;
		}
		return node;
	}

	/** Método público para a remoção de um valor da árvore */
	remove(val) {
		this._root = this._removeNode(this._root, val);
	}

	/** Método PRIVADO para a remoção de um nodo da árvore */
	_removeNode(root, val) {

		// 1º caso: árvore vazia
		if (root === null) {
			return null;
		}

		// 2º caso: o valor a ser removida é MENOR que o valor da raiz
		// Continua procurando pelo nodo a ser removido pelo lado ESQUERDO
		if (val < root.data) {
			root.left = this._removeNode(root.left, val);
			return root;
		} 

		// 3º caso: o valor a ser removido é MAIOR que valor da raiz
		// Continua procurando pelo nodo a ser removida pelo lado DIREITO
		if (val > root.data) {
			root.right = this._removeNode(root.right, val);
			return root;
		}

		// 4º caso: o valor a ser removido é IGUAL ao valor da raiz
		// O NODO A SER REMOVIDO FOI ENCONTRADO
		// Agora, é necessário determinar o grau do novo para aplicar o algoritmo de remoção correto para cada caso

		// 4.1: remoção de nodo de grau 0
		if (root.left === null && root.right === null) {
			root = null;	 // Sobrescreve o nodo (root) com None
			return root;
		}

		// 4.2: remoção de nodo de grau 1 com subárvore à ESQUERDA
		if (root.left === null) {
			root = root.right;
			return root;
		}

		// 4.3: remoção de nodo de grau 1 com subárvore à DIREITA
		if (root.right === null) {
			root = root.left;
			return root;
		}

		// 4.4: remoção de nodo de grau 2

		// É necessário encontrar:
		// a) o MAIOR nodo da subárvore ESQUERDA; *OU*

		// Opção escolhida: usar o maior nodo da subárvore esquerda
		const newRoot = this._maxNode(root.left);

		// Copia o valor do nodo encontrado e sobrescreve o valor do nodo que está sendo "removido"
		root.data = newRoot.data;

		// Exclui o valor duplicado que está na subárvore esquerda (de onde veio o valor de new_root)
		root.left = this._removeNode(root.left, newRoot.data);

		return root;
	}
}

module.exports = BinarySearchTree;


////////////////////////////////////////////////////////////////////////////////////////////////////

// let arvore = new BinarySearchTree();

// arvore.insert(23);
// arvore.insert(39);
// arvore.insert(11);
// arvore.insert(31);
// arvore.insert(17);

// console.log("PERCURSO EM-ORDEM");
// arvore.inOrderTraversal(console.log);

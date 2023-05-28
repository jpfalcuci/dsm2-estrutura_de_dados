class BinarySearchTree:
    """ ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA

    * Árvore ~> é uma estrutura de dados não linear, considerada uma especialização do grafo, formada recursivamente por outras árvores (subárvores)
    * Árvore binária ~> uma árvore na qual cada nodo tem grau máximo igual a 2. Em outras palavras, cada nodo pode ter até dois descendentes diretos
    * Árvore binária de busca ~> é uma árvore binária em que as inserções são feitas de forma ordenada, de modo a otimizar a operação de busca binária """

    class Node:
        """ Classe que representa cada unidade de informação (nodo) da árvore binária de busca.

        Possui três atributos:
        1) Informação relevante para o usuário (data)
        2) Ponteiro para o nodo descendente à esquerda (left)
        3) Ponteiro para o nodo descendente à direita (right) """

        def __init__(self, val):
            self.data = val
            self.left = None
            self.right = None

    def __init__(self):
        self.__root = None      # Raiz da árvore

    def insert(self, val):
        """ Método PÚBLICO para a inserção de um VALOR na árvore """
        
        # Cria um novo nodo para armazenar o valor
        new = self.Node(val)

        # 1º caso: a árvore está vazia.
        # O primeiro nodo inserido será a raiz
        if self.__root is None: self.__root = new

        # 2º caso: a raiz já existe. É necessário procurar pela posição de inserção do novo nodo, o que é feito por um método privado
        else: self.__insert_node(self.__root, new)

    def __insert_node(self, root, new):
        """ Método PRIVADO para inserção de um NODO na árvore """

        # 1º caso: o valor do novo nodo é MENOR que o valor na raiz
        if new.data < root.data:
            # Se a esquerda da raiz estiver desocupada, insere aí
            if root.left is None: root.left = new
            # Senão, passa a considerar o nodo da esquerda como raiz
            else: self.__insert_node(root.left, new)

        # 2º caso: o valor do novo nodo é MAIOR que o valor na raiz
        elif new.data > root.data:
            # Se a direita da raiz estiver desocupada, insere aí
            if root.right is None: root.right = new
            # Senão, passa a considerar o nodo da direita como raiz
            else: self.__insert_node(root.right, new)

    def in_order_traversal(self, action, root = False):
        """ Método que percorre a árvore em-ordem
        
        1º: percorre recursivamente a subárvore esquerda em-ordem
        2º: visita a raiz
        3º: percorre recursivamente a subárvore direita em-ordem """

        # Se root for False, começamos pela raiz da árvore
        if root is False: root = self.__root

        if root is not None:
            self.in_order_traversal(action, root.left)  # 1º
            action(root.data)                           # 2º
            self.in_order_traversal(action, root.right) # 3º
    
    def exists(self, key):
        """ Método PÚBLICO que verifica se um valor existe na ABB """

        node = self.__search_node(self.__root, key)
        return (node is not None)
    
    def __search_node(self, root, key):
        """ Método PRIVADO que procura por um nodo que contém um valor fornecido (key) e retorna esse nodo, se ele existir, ou None, caso contrário """

        # 1º caso: árvore vazia
        if root is None: return None

        # 2º caso: o valor de key é MENOR que o valor na raiz
        # Continua a buscar recursivamente pela subárvore ESQUERDA
        if key < root.data: return self.__search_node(root.left, key)

        # 3º caso: o valor de key é MAIOR que o valor na raiz
        # Continua a buscar recursivamente pela subárvore DIREITA
        if key > root.data: return self.__search_node(root.right, key)

        # 4º caso: o valor de key é IGUAL que o valor na raiz
        # ENCONTROU O NODO, retorna o nodo root
        return root

####################################################################################################

arvore = BinarySearchTree()

arvore.insert(23)
arvore.insert(39)
arvore.insert(11)
arvore.insert(31)
arvore.insert(17)

print("PERCURSO EM-ORDEM")
arvore.in_order_traversal(print)

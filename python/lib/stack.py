class Stack:
    """ ESTRUTURA DE DADOS PILHA

    É uma estrutura de dados linear de acesso restrito na qual tanto a operação de inserção (tradicionalmente chamada "push"), 
    quanto a operação de remoção ("pop") acontecem no final (ou topo). 
    Em consequência, o funcionamento da pilha obedece ao princípio LIFO (Last In, First Out): o último elemento a entrar deve ser o primeiro a sair. """

    def __init__(self):
        """ Método construtor """
        # Cria uma lista privada e vazia para armazenar os dados da pilha
        self.__data = []

    def push(self, val):
        """ Método para inserção
        Em pilhas, tem nome padronizado: push """
        self.__data.append(val)

    def is_empty(self):
        """ Método que verifica se pilha está ou não vazia """
        return len(self.__data) == 0

    def pop(self):
        """ Método para remoção
        Em pilha, tem nome padronizado: pop """
        if self.is_empty():
            raise Exception("ERRO: impossível remover de uma pilha vazia")
        
        # Se chegou até aqui, a pilha NÃO está vazia e a remoção pode ser feita
        return self.__data.pop()

    def peek(self):
        """ Método que permite consultar o valor que está no topo da pilha, sem removê-lo
        Em pilhas, tem nome padronizado: peek
        ("Peek" significa "dar uma espiadinha" em inglês) """
        if self.is_empty():
            raise Exception("ERRO: impossível consultar uma pilha vazia")
        
        return self.__data[-1]  # Último elemento da lista

    def __str__ (self):
        """ Método que permite imprimir a lista como string """
        return str(self.__data)

########################################################################

# pilha = Stack()     # Cria uma pilha

# pilha.push('Primeiro')
# pilha.push('Segundo')
# pilha.push('Terceiro')

# print(pilha)

# removido = pilha.pop()
# print(f'Removido: {removido}')

# print(pilha)

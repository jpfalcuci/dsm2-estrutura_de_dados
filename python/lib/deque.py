class Deque:
    """ ESTRUTURA DE DADOS DEQUE

    Deque (Double-Ended QUEue) é uma estrutura de dados derivada da fila que permite inserções e remoções em qualquer uma de suas extremidades.
    Com isso, o deque pode se comportar tanto como uma fila comum quanto como uma fila em que são admitidas inserções prioritários e a possibilidade de desistência (remoção) do último item. """

    def __init__(self):
        """ Método construtor """
        self.__data = []    # Lista vazia

    def insert_front(self, val):
        """ Método para inserção no início """
        self.__data.insert(0, val)

    def insert_back(self, val):
        """ Método para inserção no final """
        self.__data.append(val)

    def is_empty(self):
        """ Método que retorna se o deque está vazio (True) ou não (False) """
        return len(self.__data) == 0

    def remove_front(self):
        """ Método para remoção do início """
        if self.is_empty():
            raise Exception("ERRO: Impossível remover de um deque vazio.")
        return self.__data.pop(0)

    def remove_back(self):
        """ Método para remoção do final """
        if self.is_empty():
            raise Exception("ERRO: Impossível remover de um deque vazio.")
        return self.__data.pop()

    def peek_front(self):
        """ Método para consultar do início """
        if self.is_empty():
            raise Exception("ERRO: Impossível consultar um deque vazio")
        return self.__data[0]

    def peek_back(self):
        """ Método para consultar do final """
        if self.is_empty():
            raise Exception("ERRO: Impossível consultar um deque vazio")
        return self.__data[-1]

    def __str__(self):
        """ Método que retorna uma representação do deque como string """
        return str(self.__data)

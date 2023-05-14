class Queue:
    """ ESTRUTURA DE DADOS FILA

    É uma estrutura de dados linear em que a operação de inserção (enqueue) acontece no final (ou cauda) da estrutura,
    enquanto a operação de remoção (dequeue) ocorre no início (ou cabeça).
    Em consequência, o funcionamento da fila pode ser descrito como FIFO (First In, First Out): o primeiro a entrar é o primeiro a sair """

    def __init__(self):
        """ Método construtor """
        self.__data = []    # Lista vazia
    
    def enqueue(self, val):
        """ Método de inserção. Em filas, tem nome padronizado: enqueue """
        self.__data.append(val)

    def is_empty(self):
        """ Método que retorna se a fila está vazia (true) ou não (false) """
        return len(self.__data) == 0
    
    def dequeue(self):
        """ Método de remoção. Em filas, tem nome padronizado: dequeue """
        if self.is_empty():
            raise Exception("ERRO: Impossível remover de uma fila vazia.")
        return self.__data.pop(0)   # Remove o primeiro item
    
    def peek(self):
        """ Método para consultar o primeiro item da fila, sem removê-lo """
        if self.is_empty():
            raise Exception("Erro: Impossível consultar uma fila vazia.")
        return self.__data[0]
    
    def __str__(self):
        """ Método que retorna uma representação da fila como string """
        return str(self.__data)

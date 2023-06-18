"""
	1. Veja, na imagem "torres-hanoi.png", como funciona o jogo das Torres de Hanoi.

	2. Cada uma das torres do jogo se comporta como uma certa estrutura de dados.
		Importe a classe apropriada e crie três instâncias dessa estrutura, representando as três torres.

	3. Use os valores 1, 2 e 3 para representar os discos. Coloque-os na primeira estrutura.

	4. Retire um dos discos da primeira torre e coloque-o na terceira.

	5. Retire o disco remanescente da primeira torre e coloque-o na segunda.

	6. Retire o disco da terceira torre e coloque-o sobre o disco da segunda torre.

	7. Retire o disco da primeira torre e coloque-o na terceira torre.

	8. Retire um dos discos da segunda torre e coloque-o na primeira torre.

	9. Retire o disco da segunda torre e coloque-o sobre o disco da terceira torre.

	10.Finalmente, Retire o disco da primeira torre e coloque-o na terceira torre.

	11.Use a função print() para exibir as três estruturas.
		As duas primeiras devem estar vazias e a terceira deve conter os três discos, na ordem (3 na base, 1 no topo).
"""

# 2)
from lib.stack import Stack

torre_a = Stack()
torre_b = Stack()
torre_c = Stack()

# 11)
def exibe_torres():
	print("Torre A:", torre_a, "Torre B:", torre_b, "Torre C:", torre_c)

# 3)
torre_a.push(3)
torre_a.push(2)
torre_a.push(1)
exibe_torres()

# 4)
torre_c.push(torre_a.pop())
exibe_torres()

# 5)
torre_b.push(torre_a.pop())
exibe_torres()

# 6)
torre_b.push(torre_c.pop())
exibe_torres()

# 7)
torre_c.push(torre_a.pop())
exibe_torres()

# 8)
torre_a.push(torre_b.pop())
exibe_torres()

# 9)
torre_c.push(torre_b.pop())
exibe_torres()

# 10)
torre_c.push(torre_a.pop())
exibe_torres()

// Lista
const frutas = ['laranja', 'maçã', 'uva', 'pêra', 'mamão', 'abacate', 'amora'];

// Para percorrer uma lista e exibir apenas seus elementos, usamos um loop for..of
for (const f of frutas) {
    console.log(f);
}

console.log("\n" + "-".repeat(80) + "\n");


// Para percorrer a lista em ordem inversa para exibir apenas seus elementos, usamos um loop for..of em conjunto com o método reverse()
// for (const f of frutas.reverse()) { console.log(f); }
// Porém, o método reverse() modifica o array original

// Para percorrer a lista em ordem inversa para exibir apenas seus elementos sem modificar o array original, podemos fazer uma cópia do array e inverter a cópia
const frutasInvertidas = frutas.slice().reverse();
for (const f of frutasInvertidas) {
    console.log(f);
}

console.log("\n" + "-".repeat(80) + "\n");


// Para percorrer a lista e exibir tanto o elemento quanto sua posição, usamos o método forEach()
frutas.forEach((f, pos) => {
    console.log(`A fruta ${f} está na posição ${pos}.`);
});

console.log("\n" + "-".repeat(80) + "\n");


// Percurso em ordem inversa usando um loop for com 3 parâmetros
for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(`A fruta ${frutas[i]} está na posição ${i}.`);
}

console.log("\n" + "-".repeat(80) + "\n");
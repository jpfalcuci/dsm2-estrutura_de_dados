// Um objeto (object) em JavaScript é equivalente a um dicionário em Python.
// Diferente das listas em Python, em JavaScript os objetos não possuem posições nomeadas, mas sim propriedades com nomes definidos pelo usuário.

// Um dicionário é delimitado por chaves {}
// Diferente das listas, que têm posições numeradas, os dicionários possuem posições NOMEADAS.
// Cada uma das posições nomeadas de um dicionário é chamada PROPRIEDADE

let pessoa = {
    nome: "Orozimbo Oliveira Osório",
    sexo: "M",
    idade: 71,
    peso: 76,
    altura: 1.66,
    aposentado: true,
    filhos: ["Zeferina", "Asdrúbal", "Gercina"],
};

// Acessando os valores armazenados no objeto
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Aposentado?", pessoa.aposentado);

// Calculando o IMC (Índice de Massa Corporal) da pessoa
let imc = pessoa.peso / pessoa.altura ** 2;
console.log(`O IMC de ${pessoa.nome} é ${imc}.`);

////////////////////////////////////////////////////////////////////////

// Representando formas geométricas planas por meio de objetos

let forma1 = {
    base: 7.5,
    altura: 12,
    tipo: "R", // Retângulo
};

let forma2 = {
    base: 6,
    altura: 2.5,
    tipo: "T", // Triângulo
};

let forma3 = {
    base: 5,
    altura: 3,
    tipo: "E", // Elipse
};

const pi = Math.PI;

function calcularArea(forma) {
    switch (forma.tipo) {
        case "R":
            return forma.base * forma.altura;
            break;
        case "T":
            return (forma.base * forma.altura) / 2;
            break;
        case "E":
            return (forma.base / 2) * (forma.altura / 2) * pi;
            break;
        default:
            return null;
    }
}

////////////////////////////////////////////////////////////////////////

// Calculando a área das formas
console.log(`Base: ${forma1.base}; altura: ${forma1.altura}; tipo: ${forma1.tipo}; ÁREA: ${calcularArea(forma1)}`);
console.log(`Base: ${forma2.base}; altura: ${forma2.altura}; tipo: ${forma2.tipo}; ÁREA: ${calcularArea(forma2)}`);
console.log(`Base: ${forma3.base}; altura: ${forma3.altura}; tipo: ${forma3.tipo}; ÁREA: ${calcularArea(forma3)}`);

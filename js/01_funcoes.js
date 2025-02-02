/**
 * Função para calcular o Índice de Massa Corpórea de uma pessoa, dados o seu peso e a sua altura
 */
function imc(peso, altura) {
    return peso / altura ** 2; // Peso dividido pela altura elevada ao quadrado
}

const resultado = imc(81, 1.72);
console.log('O IMC calculado é ', resultado.toFixed(2));
// O IMC calculado é  27.38

console.log("\n" + "-".repeat(80) + "\n");

/**********/

const pi = Math.PI;

/**
 * Função para calcular a área de figuras geométricas planas
 */
function calcularArea(base, altura, tipo) {
  if (tipo === 'R') {           // Retângulo
    return (base * altura).toFixed(2);
  } else if (tipo === 'T') {    // Triângulo
    return ((base * altura) / 2).toFixed(2);
  } else if (tipo === 'E') {    // Elipse
    return ((base / 2) * (altura / 2) * pi).toFixed(2);
  } else {
    return null;
  }
}

// Execução da função anteriormente declarada
console.log('Área retângulo 10x25:', calcularArea(10, 25, 'R'));
// Área retângulo 10x25: 250.00
console.log('Área triângulo 12x7:', calcularArea(12, 7, 'T'));
// Área triângulo 12x7: 42.00
console.log('Área elipse 10x10:', calcularArea(10, 10, 'E'));
// Área elipse 10x10: 78.54

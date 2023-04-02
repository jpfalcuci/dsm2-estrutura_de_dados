/* 
    Classe é uma estrutura que representa conjuntamente dados e algoritmos.
    Uma classe pode ser comparada a uma "assadeira" com a qual se pode produzir diferentes "assados" (objetos),
    variando os "ingredientes" (dados) e o "modo de fazer" (algoritmos).
    Apesar dessa variação, todos os objetos criados a partir de uma classe terão sempre o mesmo formato determinado por esta.
*/

const pi = Math.PI;

// Por convenção, nomes de classe seguem a convenção PascalCase
class FormaGeometrica {
    
    /* 
        Uma classe pode ter, dentro de si, tanto dados quanto funções (estas, representando os algoritmos).
        Uma função especial, chamada __init__, é chamada sempre que um novo objeto é criado a partir de uma classe.
        Essa função especial é chamada de CONSTRUTOR.

        Quando aparecem dentro de uma classe:
        ~> funções passam a ser chamados de MÉTODOS, é seu primeiro parâmetro é sempre self, que representa o próprio objeto
        ~> variáveis passam a ser chamadas ATRIBUTOS
    */

    constructor(base, altura, tipo) {
        // Armazenando os dados recebidos DENTRO do objeto, com this
        this.set_base(base);
        this.set_altura(altura);
        this.set_tipo(tipo);
    }

    // Métodos setter
    set_base(val) {
        if (typeof val !== "number" || val <= 0) {
            throw new Error(
                `ERRO: a base (${val}) deve ser numérica e maior que zero.`
            );
        }
        this.base = val;
    }

    set_altura(val) {
        if (typeof val !== "number" || val <= 0) {
            throw new Error(
                `ERRO: a altura (${val}) deve ser numérica e maior que zero.`
            );
        }
        this.altura = val;
    }

    set_tipo(val) {
        if (!["R", "T", "E"].includes(val)) {
            throw new Error(
                `ERRO: o tipo ("${val}") deve ser "R", "T" ou "E".`
            );
        }
        this.tipo = val;
    }

    // Métodos getter
    get_base() {
        return this.base;
    }

    get_altura() {
        return this.altura;
    }

    get_tipo() {
        return this.tipo;
    }

    // Converte o objeto para uma representação personalizada em string
    toString() {
        return `< Base: ${this.base}; Altura: ${this.altura}; Tipo: ${this.tipo} >`;
    }

    calc_area() {
        switch (this.tipo) {
            case "R":
                return this.base * this.altura;
                break;
            case "T":
                return (this.base * this.altura) / 2;
                break;
            case "E":
                return (this.base / 2) * (this.altura / 2) * pi;
                break;
            default:
                return null;
        }
    }
}

// Criando um objeto chamado forma1 a partir da classe FormaGeometrica
const forma1 = new FormaGeometrica(10, 7.2, "T");
const forma2 = new FormaGeometrica(7, 4.5, "R");
const forma3 = new FormaGeometrica(12, 12, "E");

console.log(forma1.toString(), `Área: ${forma1.calc_area().toFixed(2)}`);
console.log(forma2.toString(), `Área: ${forma2.calc_area().toFixed(2)}`);
console.log(forma3.toString(), `Área: ${forma3.calc_area().toFixed(2)}`);

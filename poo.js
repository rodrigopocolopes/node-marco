// caneta bic

class Caneta {

    // atributos -> adjetivos
    cor;
    quantTinta = 100;

    constructor(cor = "Azul") {

        this.cor = cor;

    }

    // metodo -> função -> ação
    escrever(palavra) {

        if (this.quantTinta > 0) {

            console.log("Escreveu: " + palavra);
            this.quantTinta = this.quantTinta - palavra.length;

        } else {

            console.log("Acabou a tinta");

        }

    }

}

// Herança
class CanetaQuadro extends Caneta
{
    // sobreescrita
    quantTinta = 1000;
}

class CanetaLaser extends CanetaQuadro
{
    laseLigado = false;
}

// instancia
let bic1 = new Caneta("Verde");
let bic2 = new Caneta("Preto");
let bic3 = new Caneta();

let caneta1 = new CanetaQuadro();
let caneta2 = new CanetaLaser();

console.log(caneta1);
console.log(caneta2);

/* bic1.cor = "Preto";
bic2.cor = "Verde"; */

bic1.escrever("Oi turma!, tudoooooooo bem?");
bic1.escrever("Oi turma!, tudoooooooo bem?");
bic1.escrever("Oi turma!, tudoooooooo bem?");
bic1.escrever("Oi turma!, tudoooooooo bem?");
bic1.escrever("Oi turma!, tudoooooooo bem?");
bic1.escrever("Oi turma!, tudoooooooo bem?");
bic1.escrever("Oi turma!, tudoooooooo bem?");
bic1.escrever("Oi turma!, tudoooooooo bem?");


console.log(bic1);
console.log(bic2);
console.log(bic3);


if (bic1 == bic2) {

    console.log("Verdade");

} else {

    console.log("Falso");

}
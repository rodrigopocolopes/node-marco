/* 
let input = "M";

let per = input;

if (per == "M") {
    console.log("Bom dia")
} else if (per == "V") {
    console.log("Boa tarde")
    } else if (per == "N") {
        console.log("Boa noite")
        } else {
            console.log("Valor inválido!")
    } */


console.log("Digite o n1:");

process.stdin.on('data', function (dados) {

    let n1 = dados.toString().trim();
    console.log("O valor de 'a' é " + n1);
    console.log("Digite o n2:");
});

process.stdin.on('data', function (dados) {
    let n2 = dados.toString().trim();
    console.log("O valor de 'b' é " + n2);
    console.log("Digite o n3:");

});

process.stdin.on('data', function (dados) {
    let n3 = dados.toString().trim();
    console.log("O valor de 'c' é " + n3);
});

let a = n1;
let b = n2;
let c = n3;
let delta = (b * b) - ((4 * a) * c);

function raiz(a, b, c) {

    console.log("O delta é: " + delta);

    if (a == 0) {
        console.log("Não é equação do segundo grau")
    } else if (delta < 0) {
        console.log("A equação não possui raizes reais")
    } else if (delta == 0) {
        console.log("A equação possui apenas uma raiz")
        let resultado0 = -b / (2 * a);
        return resultado0;
        console.log(resultado0);
        //informar qual raiz
    } else {

        let resultado1 = ((-b) + Math.sqrt(delta)) / (2 * a);
        let resultado2 = ((-b) - Math.sqrt(delta)) / (2 * a);
        let raizes = resultado1.toFixed(2) + " e " + resultado2.toFixed(2);
        return raizes;
        console.log(raizes);
    }
}

console.log(raiz(a, b, c))
process.exit();




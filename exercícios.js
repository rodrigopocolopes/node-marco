
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
}

let a = 5;
let b = 4;
let c = 3;
let delta = (4*a)*c;

// -b +- v(4*a)*c
//      2a

function raiz (a, b, c) {
    
    if (a == 0) {
        console.log("Não é equação do segundo grau")
    } else if (delta < 0) {
        console.log("A equação não possui raizes reais")
    } else if (delta == 0) {
        console.log("A equação possui apenas uma raiz")
        //informar qual raiz
    }

    let resultado1 = (-b + Math.sqrt((4*a)*c))/2*a;
    let resultado2 = (-b - Math.sqrt((4*a)*c))/2*a;
    let raizes = resultado1.toFixed(2) + " e " + resultado2.toFixed(2);
    return raizes;
    console.log(raizes);
}

console.log(raiz(a, b, c))
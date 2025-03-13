// criar um arquivo

// modulo node
const fs = require("fs");

// modulo nosso
const soma = require("./funcao");

/* console.log(fs); */
console.log(soma);

let res = soma(3, 4);
console.log(res);


let conteudo = "arquivo criado pelo nodejs.\n";
let options = { flag: "a" };

/* console.log("Antes de gravar");

fs.writeFile("texto.txt", conteudo, options, function (erro) {
    console.log(erro);
    console.log("Gravou");
})

console.log("Depois de gravar");

fs.readFile("texto.txt", "utf8", function (erro, dados) {
    console.log(erro);
    console.log(dados);
}) */

console.log("Digite o n1: ");

process.stdin.on('data', function (dados) {
    /* console.log(dados.toString()); */
    let n1 = dados.toString().trim();

    if (n1 == "s") {

        process.exit();

    }

});
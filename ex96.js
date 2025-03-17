console.log("Digite 20 números");

let impar = [];
let par = [];

process.stdin.on("data", function (valor) {

    let numero = valor.toString().trim();
    let resto = numero % 2;

    if (resto == 0) {

        par.push(numero);

    } else {

        impar.push(numero);

    }

    if ((par.length + impar.length) == 20) {

        process.exit
        console.log("Números ímpares: " + impar);
        console.log("Números pares: " + par)

    }
})
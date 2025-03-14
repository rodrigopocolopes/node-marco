console.log("Digite um número inteiro")

process.stdin.on("data", function (valor) {

    let numero = valor.toString().trim();

    
    process.exit();
});
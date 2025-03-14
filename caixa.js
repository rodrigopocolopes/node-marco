console.log("Digite o valor que queira retirar")

// Notas = 1, 5, 10, 50, 100

process.stdin.on("data", function (valor) {

    let quant = valor.toString().trim();
    let cent = quant.charAt(0);
    let dez = quant.charAt(1);
    let un = quant.charAt(2);

    // se 0 acusa erro
    if (quant == 0) {
        console.log("Digite um valor maior do que 0")
    }

    // se maior que 600 acusa erro
    if (quant > 600) {
        console.log("O valor não pode ser maior do que 600")
    } else {

        // se menor que 100 e maior que 10, muda a variável das casas
        if (quant < 100 && quant >= 10) {
            dez = quant.charAt(0);
            un = quant.charAt(1);
        }

        // se menor que 10, muda a variável das casas de novo
        if (quant < 10 && quant > 0) {
            dez = 0;
            un = quant.charAt(0);
        }

        // quantas notas de cem
        if (quant >= 100) {
            console.log(cent + " notas de cem")
        }

        // quantas nodas de 50 e 10
        if (dez > 5) {
            console.log("Uma nota de 50");
            let deze = dez - 5;
            console.log(deze + " nota(s) de dez");
        } else if (dez == 5) {
            console.log("Uma nota de 50");
        } else if (dez < 5 && dez > 0) {
            console.log(dez + " nota(s) de dez");
        }

        //quantas notas de 5 e 1
        if (un > 5) {
            console.log("Uma nota de 5");
            let uni = un - 5;
            console.log(uni + " nota(s) de 1");
        } else if (un == 5) {
            console.log("Uma nota de 5");
        } else if (un < 5 && un > 0) {
            console.log(un + " nota(s) de um");
        }
    }
    process.exit();
});
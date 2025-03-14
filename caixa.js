console.log("Digite o valor que queira retirar")

// Notas = 1, 5, 10, 50, 100

process.stdin.on("data", function (valor) {

    let quant = valor.toString().trim();
    let cent = quant.charAt(0);
    let dez = quant.charAt(1);
    let un = quant.charAt(2);

    if (quant > 600) {
        console.log("O valor não pode ser maior do que 600")
    } else {

        if (quant < 100) {
            dez = cent;
            un = dez;
        }

        if (quant < 10) {
            un = cent;
        }

        if (quant > 100) {
            console.log("Você receberá " + cent + " notas de cem")

            if (dez > 5) {
                console.log("Uma nota de 50")
                let deze = dez - 5
                console.log(deze + " nota(s) de dez")
            } else if (dez == 5) {
                console.log("Uma nota de 50")
            } else if (dez < 5 || dez > 0) {
                console.log(dez + " nota(s) de dez")
            }

            if (un > 5) {
                console.log("Uma nota de 5")
                let uni = un - 5
                console.log(uni + " nota(s) de 1")
            } else if (un == 5) {
                console.log("Uma nota de 5")
            } else if (un > 0 || un < 5) {
                console.log(un + " nota(s) de um")
            }
        }
    }
    process.exit();
});
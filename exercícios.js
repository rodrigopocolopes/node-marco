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

let n1 = null;
let n2 = null;
let n3 = null;

process.stdin.on('data', function (dados) {

    // atribuir o input ao n1
    if (n1 == null) {

        n1 = dados.toString().trim();
        console.log("O valor de 'a' é " + n1);
        console.log("Digite o n2:");

    // atribuir o input ao n2
    } else if (n2 == null) {

        n2 = dados.toString().trim();
        console.log("O valor de 'b' é " + n2);
        console.log("Digite o n3:");

    // atribuir o input ao n3
    } else if (n3 == null) {

        n3 = dados.toString().trim();
        console.log("O valor de 'c' é " + n3);

    } else {

    // executar a formula de bhaskara com os 3 inputs
        function raiz(n1, n2, n3) {

            let delta = (n2 * n2) - ((4 * n1) * n3);

            console.log("O delta é: " + delta);

            // validações da fórmula
            if (n1 == 0) {
                console.log("Não é equação do segundo grau")
            } else if (delta < 0) {
                console.log("A equação não possui raizes reais")
            } else if (delta == 0) {
                console.log("A equação possui apenas uma raiz")
                let resultado0 = -n2 / (2 * n1);
                return resultado0;
                console.log(resultado0);

            } else {

                let resultado1 = ((-n2) + Math.sqrt(delta)) / (2 * n1);
                let resultado2 = ((-n2) - Math.sqrt(delta)) / (2 * n1);
                let raizes = resultado1.toFixed(2) + " e " + resultado2.toFixed(2);
                return raizes;
                console.log(raizes);
            }
        }

        // chamar a função de bhaskara
        console.log(raiz(n1, n2, n3))

        // encerrar o terminal
        process.exit();

    };
});

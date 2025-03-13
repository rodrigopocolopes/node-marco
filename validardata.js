console.log("Digite uma data no formato dd/mm/aaaa")

process.stdin.on("data", function(valor){

    let data = valor.toString().trim();
    let dia = data.slice(0,1);
    let mes = data.slice(3,4);
    

    if (data.length != 10){

        console.log("A data está no formato errado")
    } else if (data.charAt(2) != "/" || data.charAt(5) != "/"){

        console.log("A data está no formato inválidoo")
    } else if (dia > 31){

        console.log("O dia é inválido")
    } else if (mes > 12){

        console.log("O mês é inválido")
    } else {

        console.log("A data está no formato correto")
        process.exit();
    }

})
$(document).ready(function () {

    $.getJSON("http://localhost:3000/clientes", function (dados) {

        console.log(dados);

        dados.forEach((item) => {

            let html = '<tr>'
                + '<td scope="row">' + item.id + '</td>'
                + '<td scope="row">' + item.nome + '</td>'
                + '<td scope="row">' + item.email + '</td>'
                + '<td scope="row">' + item.telefone + '</td>'
                + '<td scope="row">' + item.cidade + '</td>'
                + '<td scope="row">' + item.idade + '</td>'
                + '</tr>'

            $("#lista").append(html);
        });
    }); // fim getJSON

    $("#bt-salvar").click(() => {

        let nome = $("#input-nome").val();
        let email = $("#input-email").val();
        let telefone = $("#input-telefone").val();
        let cidade = $("#input-cidade").val();
        let idade = $("#input-idade").val();
        let temErro = '';

        if (nome.trim() == '') {
            $("#input-nome").addClass("is-invalid");
            temErro = true;
        }

        if (email.trim() == '') {
            $("#input-email").addClass("is-invalid");
            temErro = true;
        }

        if (temErro == false) {
            //envia para o servidor

            let dados = {
                nome, email, telefone, cidade, idade
            }
            $.post("http://localhost:3000/clientes/novo", dados, (retorno) => {
                console.log("retorno");
            });

        }

    }); //fim do bt salvar

});
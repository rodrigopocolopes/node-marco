let usuario = sessionStorage.getItem("logado");

if (!usuario) {
    location.assign("login.html");
}

$(document).ready(function () {

    let backend = (location.hostname != 'localhost') ? 'https://backend-cadastro-g3la.onrender.com' : 'http://localhost:3000';


    function listarClientes(coluna, ord) {

        let dados = {
            coluna,
            ord
        }

        $.getJSON(backend + "/clientes", dados, function (dados) {

            $("#lista").empty();

            dados.forEach((item) => {

                let html = '<tr>'
                    + '<td scope="row">' + item.id + '</td>'
                    + '<td scope="row">' + item.nome + '</td>'
                    + '<td scope="row">' + item.email + '</td>'
                    + '<td scope="row">' + item.telefone + '</td>'
                    + '<td scope="row">' + item.cidade + '</td>'
                    + '<td scope="row">' + item.idade + '</td>'
                    + '<td scope="row"><button codigo="' + item.id + '" class="bt-del btn btn-danger"><i class="bi bi-x-circle-fill"></i></button></td>'
                    + '</tr>'

                $("#lista").append(html);
            });
        }); // fim getJSON
    }

    listarClientes();


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
            $.post(backend + "/clientes/novo", dados, (retorno) => {
                console.log("retorno");

                if (retorno == true) {

                    $("#form-cadastro").modal("hide");

                    let html = '<tr>'
                        + '<td scope="row">' + + '</td>'
                        + '<td scope="row">' + dados.nome + '</td>'
                        + '<td scope="row">' + dados.email + '</td>'
                        + '<td scope="row">' + dados.telefone + '</td>'
                        + '<td scope="row">' + dados.cidade + '</td>'
                        + '<td scope="row">' + dados.idade + '</td>'
                        + '</tr>'

                    $("#lista").append(html);

                    $("#toast-cadastro").toast("show");

                    $("input").val("");

                }

            }); // fim do post

        }

    }); //fim do bt salvar

    $(".ord").click(function () {


        let coluna = $(this).attr("coluna");
        let ord = $(this).attr("ord");

        ord = (ord == " ASC") ? " DESC" : " ASC";

        $(this).attr("ord", ord)


        $(".ord").addClass("link-light");
        $(this).removeClass("link-light");
        $(this).addClass("link-primary");

        listarClientes(coluna, ord);



    }); // fim do click ord

    $("#lista").on('click', '.bt-del', function () {

        let dados = {
            id: $(this).attr("codigo")
        }

        $.post(backend + "/clientes/delete", dados, (retorno) => {

            listarClientes();

        });

    }) // fim do bt-del

});
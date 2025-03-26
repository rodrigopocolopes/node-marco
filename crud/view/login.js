$(document).ready(function () {

    let backend = (location.hostname != 'localhost') ? 'https://backend-cadastro-g3la.onrender.com' : 'http://localhost:3000';

    $(".bt-logar").click(() => {

        let dados = {
            usuario: $("#usuario").val(),
            senha: $("#senha").val(),
        }

        $.post(backend + "/login", dados, function (retorno) {

            if (retorno != "false") {
                $("#msg-erro").addClass("d-none");
                let valor = JSON.stringify(retorno);
                sessionStorage.setItem("logado", valor);
                location.assign("/");
            } else {
                $("#msg-erro").removeClass("d-none");
            }
        }); // fim do post

    }); // fim do bt-logar

});
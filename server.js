// servidor
// http

const express = require("express");
const app = express();

app.get("/contato", function(req, res){
    res.send("Oi turma");
})

app.listen(3000, function(erro){
    console.log(erro);
    console.log("Servidor iniciado");
})
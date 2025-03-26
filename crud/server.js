// API
// Interface de acesso programático

import express from "express";
import cors from "cors";
import sha1 from "sha1";

import { add, del, update, list, search, logar } from "./model/index.js"

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let porta = (process.env.PROD == 'true') ? 80 : 3000;




// ROUTE -> ACTION
app.get("/clientes", async (req, res) => {

    let { coluna, ord } = req.query;

    try {
        let dados = await list(coluna, ord);
        res.json(dados);
    } catch (erro) {
        res.status("404").send("Coluna não existe")
    }

});

app.post("/clientes/novo", async (req, res) => {

    let dados = req.body;

    let retorno = await add(dados.nome,
        dados.email,
        dados.telefone,
        dados.cidade,
        dados.idade)

    res.json(retorno);

});

app.post("/clientes/delete", async (req, res) => {

    let { id } = req.body

    let retorno = await del(id);

    res.json(retorno);

});


app.post("/login", async function (req, res) {

    let { usuario, senha } = req.body;

    let hash = sha1(senha)

    let retorno = await logar(usuario, hash);

    retorno = (retorno) ? retorno : "false";

    res.json(retorno);



});

app.listen(porta, () => {
    console.log("Servidor iniciado")
});
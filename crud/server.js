// API
// Interface de acesso programático

import express from "express";
import cors from "cors";

import { add, del, update, list, search } from "./model/index.js"

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// ROUTE -> ACTION
app.get("/clientes", async (req, res) => {

    let dados = await list();
    res.json(dados);

});

app.post("/clientes/novo", async (req, res) => {

    let dados = req.body;

    let retorno = await add(dados.nome,
        dados.email,
        dados.telefone,
        dados.cidade,
        dados.idade)

    res.json(retorno);

})

// 
app.listen(3000, () => {
    console.log("Servidor iniciado")
})
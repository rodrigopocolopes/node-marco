//CRUD
// C -> Create -> Criar
// R -> Read -> Ler
// U -> Update -> Atualizar
// D -> Delete -> Apagar

// DB
// SQL   -> Relacional -> Estruturado -> Mysql, sqlserver, oracle, postgres
// NoSQL -> Mongodb, redis, cassandra, dinamo

import { open } from "sqlite";
import sqlite3 from "sqlite3";


/**
 * Criando conexão com o DB
 * @returns 
 */
async function conexao() {

    const db = await open({
        filename: "clientes.db",
        driver: sqlite3.Database
    });

    return db;

}

/**
 * Criando linha no DB
 * @param {string} nome 
 * @param {string} email 
 * @param {string} cidade 
 * @param {string} tel 
 * @param {number} idade 
 * @returns {JSON}
 */
export async function add(nome, email, tel, cidade, idade) {

    let sql = "INSERT INTO clientes"
        + "(nome, email, telefone, cidade, idade)"
        + "VALUES"
        + "(?, ?, ?, ?, ?)";

    try {

        const db = await conexao();

        let retorno = await db.run(sql, nome, email, tel, cidade, idade);

        return (retorno.changes == 1) ? true : false;

    } catch (erro) {
        console.log("Deu erro")
        return false;
    }

}

/**
 * Alterar linha do DB
 * @param {number} id 
 * @param {JSON} colunas 
 * @returns {JSON}
 */
export async function update(id, colunas) {


    let set = "SET ";

    if (colunas.nome) {
        set = set + "nome = '" + colunas.nome + "', ";
    }

    if (colunas.email) {
        set = set + "email = '" + colunas.email + "', ";
    }

    if (colunas.telefone) {
        set = set + "telefone = '" + colunas.telefone + "', ";
    }

    if (colunas.cidade) {
        set = set + "cidade = '" + colunas.cidade + "', ";
    }

    if (colunas.idade) {
        set = set + "idade = " + colunas.idade + ", ";
    }

    let setslice = set.slice(0, set.length - 2)

    let sql = "UPDATE clientes "
        + setslice
        + " WHERE id = " + id;

    const db = await conexao();
    const retorno = await db.run(sql);

    return (retorno.changes == 1) ? true : false;
}

/**
 * Deletar uma linha do DB a partir do id
 * @param {number} id 
 * @returns {JSON}
 */
export async function del(id) {

    let sql = "DELETE FROM clientes WHERE id = " + id;

    const db = await conexao();

    return await db.run(sql);

}

/**
 * Retorna um cliente pelo id
 * @param {number} id 
 * @returns {JSON}
 */
export async function search(id) {

    let sql = "SELECT * FROM clientes WHERE id = " + id;

    const db = await conexao();

    return await db.get(sql);

}

/**
 * Lista todos os clientes cadastrados ordenados pelo nome
 * @returns {JSON}
 */

export async function list(coluna = "id", ordem = " ASC") {
    let sql = "SELECT * FROM clientes ORDER BY " + coluna + " " + ordem;

    const db = await conexao();

    return await db.all(sql);

}


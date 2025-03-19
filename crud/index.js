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


export function add() {

}

export function update() {

}

export function del() {

}

/**
 * Retorna um cliente pelo id
 * @param {number} id 
 * @returns {JSON}
 */
export async function search(id) {

    let sql = "SELECT * FROM clientes WHERE id = " + id;

    const db = await open({
        filename: "clientes.db",
        driver: sqlite3.Database
    });

    return await db.get(sql);

}

/**
 * Lista todos os clientes cadastrados ordenados pelo nome
 * @returns {JSON}
 */

export async function list() {
    let sql = "SELECT * FROM clientes ORDER BY nome";

    const db = await open({
        filename: "clientes.db",
        driver: sqlite3.Database
    });

    return await db.all(sql);

}


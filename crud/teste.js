import { list, search, add, del, update } from "./index.js";

async function teste() {

    /*     let res = await add("Otávio", "otavio@gmail.com", "Curitiba", "41 9 8798 6598", 23); */

    /*     let res = await del(11); */

    /*     let res = await list(); */

    let valores = {
        nome: "Mario",
        telefone: "41 9 8796 6513",
        idade: 24
    }

    let res = await update(12, valores);

    console.log(res);

}

teste();



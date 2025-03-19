import {list} from "./index.js";

async function teste(){

    let res = await list();
    
    console.log(res);

}

teste();
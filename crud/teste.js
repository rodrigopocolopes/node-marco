import {list, search} from "./index.js";

async function teste(){

    let res = await search(5);
    
    console.log(res);

}

teste();


import axios from "axios";
import { serverUrl } from "../config";


const getFavoritos = async (responseFavoritos) => {

    let favoritos = [];

    for (let i = 0; i < responseFavoritos.length; i++) {
    
        let response = await axios.get(serverUrl + "/produtos/" + responseFavoritos[i])
        //.then((responseFavoritos) => {
    
        favoritos.push(response.data);
    
        //}).catch((error) => {
    
        //  console.log(error);
    
        //});
    }

    return favoritos
}

export default getFavoritos;
import navbarLogado from './logado/navbarLogado';
import axios from 'axios';
import { serverUrl, key } from '../config';

import CryptoJS from 'crypto-js';

import entrarUsuario from '../usuario/entrarUsuario';
import checkSessionTime from './checkSessionTime';
//import setRoute from './routes/setRoute';

const getSession = (navbar) => {

    let app = navbar.props.app;

    let usuario = "";
    let route = "";

    if (
        Storage === "undefined" || 
        localStorage.lojaVirtualSenha === "undefined"
    ) {
        return true;
    }

    if ( 
        localStorage.lojaVirtualEmail !== "undefined" &&  
        localStorage.lojaVirtualCodigo !== "undefined"
    ) {

        usuario = localStorage.lojaVirtualCodigo;
        route = '/parceiro';

    } else if ( localStorage.lojaVirtualEmail !== "undefined") {

        usuario = localStorage.lojaVirtualEmail;
        route = '/usuario';

    } else {
        return true;
    }

    axios.post(serverUrl + "/login" + route, {

        usuario: usuario,
        senha: localStorage.lojaVirtualSenha,
        autoLogin: true
    })
    .then((response) => {

        checkSessionTime(navbar);

        let bytes = null;

        bytes = CryptoJS.AES.decrypt(response.data.email, key);
        response.data.email = bytes.toString(CryptoJS.enc.Utf8);

        bytes = CryptoJS.AES.decrypt(response.data.senha, key);
        response.data.senha = bytes.toString(CryptoJS.enc.Utf8);

        bytes = CryptoJS.AES.decrypt(response.data.codigo, key);
        response.data.codigo = bytes.toString(CryptoJS.enc.Utf8);

        entrarUsuario(app, response);
        navbarLogado(navbar, route);

        return;
        
    })
    .catch((error) => {

        console.log(error);
        return;
    });
}

export default getSession;
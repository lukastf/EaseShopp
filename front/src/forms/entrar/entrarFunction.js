
import React from 'react';

import axios from 'axios';
import { serverUrl, key } from '../../config';

import CryptoJS from 'crypto-js';

import entrarUsuario from '../../usuario/entrarUsuario';
import navbarLogado from '../../navbar/logado/navbarLogado';
//import setRoute from '../../navbar/routes/setRoute';

const entrar = (entrar, usuario, senha, route) => {

    let navbar = entrar.props.navbar;
    let app = entrar.props.navbar.props.app;

    let usuarioCrypto = CryptoJS.AES.encrypt(usuario, key).toString();
    let senhaCrypto = CryptoJS.AES.encrypt(senha, key).toString();

    axios.post(serverUrl + "/login" + route, {

        usuario: usuarioCrypto,
        senha: senhaCrypto,
        autoLogin: false
    })
    .then((response) => {

        let bytes = null;

        bytes = CryptoJS.AES.decrypt(response.data.email, key);
        response.data.email = bytes.toString(CryptoJS.enc.Utf8);

        bytes = CryptoJS.AES.decrypt(response.data.senha, key);
        response.data.senha = bytes.toString(CryptoJS.enc.Utf8);

        bytes = CryptoJS.AES.decrypt(response.data.codigo, key);
        response.data.codigo = bytes.toString(CryptoJS.enc.Utf8);

        entrarUsuario(app, response);
        navbarLogado(navbar, route);

    })
    .catch((error) => {

        console.log("error");
        console.log(error);

        entrar.setState({

            emailError: "",
            senhaError: "",
            codigoError: "",
            senha2Error: ""
        });

        if (route === "/usuario") {

            entrar.setState({

                loginError: 
                <p className="mt-2" style={{color:"red"}}>
                    Usuario ou senha invalidos. Tente colocar o email em entras maiusculas 
                    ex: EXEMPLO@GMAIL.COM
                </p>
            });

            if (error.response) {

                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

                if (error.response.status === 401)
                entrar.setState({
                    loginError: <p className="mt-2" style={{color:"red"}}>Valide seu email antes de entrar</p>
                });
            }
        }

        if (route === "/parceiro") {

            entrar.setState({
                loginParceiroError: <p className="mt-2" style={{color:"red"}}>Codigo ou senha invalidos</p>
            });
        }
    });

    setTimeout(() => {
        entrar.setState({ loginError: "", loginParceiroError: "" });
    }, 9000);

}

export default entrar;
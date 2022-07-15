

import React from 'react';
import axios from 'axios';
import { serverUrl } from '../../config';

const cadastrarMultiplos = async (layoutNome, _idParceiro, senha, file, fileValue, route) => {

    if(
        file === null || 
        fileValue === ""
    ) { return null; }

    let formData = new FormData();

    formData.append("_idParceiro", _idParceiro);
    formData.append("senha", senha);
    formData.append("multi"+layoutNome, file, fileValue);

    return await axios.post(serverUrl + route , formData, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
    })
    .then((response) => {

        console.log("ok");

        let objsComErro = [
            <div className="row col-12">
                <p style={{color:"red"}}>{layoutNome} com erro:</p>
            </div>
        ];
        let objsJaCadastrados = [
            <div className="row col-12">
                <p style={{color:"orange"}}>{layoutNome} que já foram cadastrados:</p>
            </div>
        ];
        let objsCadastrados = [
            <div className="row col-12">
                <p style={{color:"green"}}>{layoutNome} cadastrados com sucesso:</p>
            </div>
        ];

       for(let i = 0; i < response.data.objsComErro.length; i++) {

            let nome = response.data.objsComErro[i].nome;

            objsComErro.push(
                <p className="row col-12">
                    { nome }
                </p>
            );

        }

        for(let i = 0; i < response.data.objsJaCadastrados.length; i++) {

            let nome = response.data.objsJaCadastrados[i].nome;

            objsJaCadastrados.push(
                <p className="row col-12">
                    { nome }
                </p>
            );

        }

        for(let i = 0; i < response.data.objsCadastrados.length; i++) {

            let nome = response.data.objsCadastrados[i].nome;

            objsCadastrados.push(
                <p className="row col-12">
                    { nome }
                </p>
            );
        }

        let cadastroResult = 
        <div className="row justify-content-center col-12">
            {objsComErro}
            {objsJaCadastrados}
            {objsCadastrados}
        </div>

        return cadastroResult;
    })
    .catch((error) => {

        console.log(error);
        return null;
    });
}

export default cadastrarMultiplos;
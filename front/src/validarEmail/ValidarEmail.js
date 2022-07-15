
import axios from 'axios';
import React, { useState } from 'react';
import { serverUrl } from '../config';

const ValidarEmail = (props) => {

    const [didMount, setDidMount] = useState(false);
    const [result, setResult] = useState("checando...");
    const [color, setColor] = useState("red");

    if (!didMount) {

        setDidMount(true);

        window.history.replaceState(null, "Validar Email",
        "/validarEmail/"+props.props.email+"/"+props.props.codigoVerificacao);

        axios.post(serverUrl + "/usuarios/validarEmail",
        {
            email: props.props.email,
            codigo: props.props.codigoVerificacao

        }).then((response) => {

            //sucessoEnviado(this);

            setResult("Email verificado");
            setColor("green");

            //console.log("deu certo");
        })
        .catch((error) => {

            console.log(error);

            setResult("Link de verificação incorreto");

            //erroEnviado(this, error);
        });

        console.log(props);
    }

    return (
        <div className="row col-12 mx-auto mt-4">
            <div className="col-12 text-center">
                <h1>Validar Email</h1>
            </div>
            <div className="col-12 text-center">
                <p style={{color}}>{result}</p>
            </div>
        </div>
    );
}

export default ValidarEmail;
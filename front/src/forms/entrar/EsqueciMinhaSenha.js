import React, { useState } from 'react';
import InputEmail from '../inputs/Email';
import InputCelular from '../inputs/Celular';
import Axios from 'axios';
import { serverUrl } from '../../config';

const EsqueciMinhaSenha = (props) => {

    const [hideEmail, setHideEmail] = useState("");
    const [hideCelular, setHideCelular] = useState("d-none");
    const [hideBtnEnviar, setHideBtnEnviar] = useState("");

    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");

    const [cadastroResult, setCadastroResult] = useState("");

    const enviar = () => {

        let obj = {
            email: email,
            celular: celular
        }

        Axios.post(serverUrl + "/usuarios/esqueciMinhaSenha", obj)
        .then(() => {

            setCadastroResult(<p className="mt-2" style={{color:"green"}}>Entraremos em contato em ate 45 minutos</p>);

            setHideEmail("d-none");
            setHideCelular("d-none");
            setHideBtnEnviar("d-none");
        })
        .catch(() => {

            setCadastroResult(<p className="mt-2" style={{color:"red"}}>Usuario não cadastrado</p>);

        })

    }

    const setState = (obj) => {

        if (typeof obj.email !== "undefined")
        setEmail(obj.email);

        if (typeof obj.celular !== "undefined")
        setCelular(obj.celular);
    }
    
    let context = {

        state: {
            email: email,
            celular: celular
        },
        setState: setState
    }

    return(
        <form className="row col-12 justify-content-center" id="form">

            <div className="row justify-content-center col-12 mt-5">

                <div className="col-12 text-center">
                    <h1>Esqueci Minha Senha</h1>
                </div>
            </div>

            <div className={"row justify-content-center col-12 " + hideEmail}>

                <InputEmail context={context} />
                <div className="row col-12 justify-content-center">
                    <button 
                        className="btn btn-primary mt-3" 
                        type="button" 

                        onClick={()=>{ 
                            setEmail("");
                            setHideEmail("d-none");
                            setHideCelular("");
                        }}
                    > 
                        Checar por Celular 
                    </button>
                </div>

            </div>
            <div className={"row justify-content-center col-12 " + hideCelular}>

                <InputCelular context={context} />
                <div className="row col-12 justify-content-center">
                    <button 
                        className="btn btn-primary mt-3" 
                        type="button"

                        onClick={()=>{ 
                            setCelular("");
                            setHideEmail("");
                            setHideCelular("d-none");
                        }}
                    > 
                        Checar por Email 
                    </button>
                </div>

            </div>
            
            <div className={"row justify-content-center col-12 mt-3 " + hideBtnEnviar}>
                <button className="btn btn-primary" type="button" onClick={enviar} >
                    Enviar
                </button>
            </div>
            {cadastroResult}
        </form>     
    );
}

export default EsqueciMinhaSenha;
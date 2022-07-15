import React from 'react';
import axios from 'axios';
import {celularMask, estadosCidades} from '../utilidades/masks';
import { serverUrl } from '../../config';

import $ from 'jquery';
import { sucessoEnviado, erroEnviado } from '../cadastroResult';

class PreCadastroErro extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cpf: "",
            rg: "",
            dataNasc: "",
            nome: "",
            celular: "",
            estado: "",
            cidade: "",

            nomeClassNameInput: "form-control col-12 col-md-3",
            celularClassNameInput: "form-control col-12 col-md-3",
            estadoClassNameInput: "form-control col-12 col-md-3",
            cidadeClassNameInput: "form-control col-12 col-md-3",

            nomeError: "",
            celularError: "",
            estadoError: "",
            cidadeError: "",

            cadastroResult: "",
            hide:""
        }
    }

    componentDidMount() {
        estadosCidades();

        this.setState({
            estado: "São Paulo",
            cidade: "Adamantina"
        });

        if (typeof(Storage) !== "undefined") {

            this.setState({

                cpf: localStorage.getItem("cpf"),
                rg: localStorage.getItem("rg"),
                dataNasc: localStorage.getItem("dataNasc")
            });
        }
    }

    changeHandler = (e) => {
    
        switch(e.target.id) {

            case "nome":

                this.setState({
                    nome: e.target.value,
                    nomeError: "",
                    nomeClassNameInput: "form-control col-12 col-md-3"
                });

                if(e.target.value.length > 50) {

                    this.setState({
                        nomeError: <p style={{color:"red"}}>Nome muito grande! Maximo de 50 caracteres.</p>,
                        buttonDisabled: "disabled",
                        nomeClassNameInput: "form-control col-12 col-md-3 error"
                    });
                }

                break;

            case "celular":

            let val = celularMask(e.target.value);

                this.setState({
                    celular: val,
                    celularError: "",
                    celularClassNameInput: "form-control col-12 col-md-3"
                });

                break;

            case "estado":

                let cidade = $("#cidade").val();
            
                this.setState({
                    estado: e.target.value,
                    cidade: cidade
                });

                break;

            case "cidade":
                
                this.setState({
                    cidade: e.target.value
                });

                break;

            default:
        }
    }

    sendForm = (e) => {

        e.preventDefault();

        axios.post(serverUrl + "/usuarios/solicitarConvenio", {

            cpf: this.state.cpf,
            rg: this.state.rg,
            dataNasc: this.state.dataNasc,
            nomeEmpresa: this.state.nome,
            celular: this.state.celular,
            estado: this.state.estado,
            cidade: this.state.cidade
        })
        .then((response) => {

            sucessoEnviado(this);
        })
        .catch((error) => {

            erroEnviado(this, error);
        });
    }


    render() {
        return (

            
            <div className="row col-12 justify-content-center ">
                <div className="row justify-content-center col-12 mt-5">
                    <h1 className="row justify-content-center col-12">
                        Sua empresa não possui convenio
                    </h1>
                    <p className="row justify-content-center col-12">
                        por favor informe o nome da sua empresa e a cidade nos campos abaixo e clique em enviar
                    </p>
                </div>
                <form className={"col-12 " + this.state.hide}>
                    <div className="row form-group justify-content-center col-12 mt-3">
                        <label htmlFor="nome" className="col-12 col-md-12 text-center">Nome da empresa:</label>
                        <input type="text" className={this.state.nomeClassNameInput} id="nome" placeholder="Nome da empresa" name="nome"
                        onChange={this.changeHandler} value={this.state.nome} required/>
                        {this.state.nomeError}
                    </div>
                    <div className="row form-group justify-content-center col-12 mt-3">
                        <label htmlFor="celular" className="col-12 col-md-12 text-center">Celular</label>
                        <input type="text" className={this.state.celularClassNameInput} id="celular" placeholder="Seu Celular" maxLength="15" name="celular"
                        onChange={this.changeHandler} value={this.state.celular} required/>
                        {this.state.celularError}
                    </div>
                    <div className="row form-group justify-content-center col-12 mt-3">
                        <label htmlFor="estado" className="col-12 col-md-12 text-center">Estado:</label>
                        <select className={this.state.estadoClassNameInput} id="estado" onChange={this.changeHandler}></select>
                        {this.state.estadoError}
                    </div>
                    <div className="row form-group justify-content-center col-12 mt-3">
                        <label htmlFor="cidade" className="col-12 col-md-12 text-center">Cidade:</label>
                        <select className={this.state.cidadeClassNameInput} id="cidade" onChange={this.changeHandler}></select>
                        {this.state.cidadeError}
                    </div>
                    <div className="row form-group justify-content-center col-12 mt-3">
                        <div className="col-12 col-md-4">
                            <button type="button" onClick={this.sendForm} className="btn btn-primary float-right mr-5">Enviar</button>
                        </div>
                    </div>
                </form>
                {this.state.cadastroResult}
            </div>
        );
    }

}

export default PreCadastroErro;
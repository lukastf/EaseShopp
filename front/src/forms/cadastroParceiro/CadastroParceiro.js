import React from 'react';
import sendForm from './sendForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import InputNome from '../inputs/Nome';
import InputCnpj from '../inputs/Cnpj';
import InputEmail from '../inputs/Email';
import InputCodigo from '../inputs/Codigo';
import InputSenha from '../inputs/Senha';
import InputRepetirSenha from '../inputs/RepetirSenha';
import InputTelefone from '../inputs/Telefone';
import InputCep from '../inputs/Cep';
import InputEstado from '../inputs/Estado';
import InputCidade from '../inputs/Cidade';
import InputEndereco from '../inputs/Endereco';
import InputNumeroEndereco from '../inputs/NumeroEndereco';
import InputSituacao from '../inputs/Situacao';
import InputAdministrador from '../inputs/Administrador';
import objParceiro from '../../usuario/objParceiro';

class CadastroParceiro extends React.Component {

    constructor(props) {

        super(props);

        this.obj = objParceiro(false);

        if (props.editar) 
            this.obj = objParceiro(props.parceiro);
        
            
        this.state = {

            _id: this.obj._id,
            nome: this.obj.nome,
            cnpj: this.obj.cnpj,
            email: this.obj.email,
            codigo: this.obj.codigo,
            senha: this.obj.senha,
            repetirSenha: this.obj.repetirSenha,
            telefone: this.obj.telefone,
            cep: this.obj.cep,
            estado: this.obj.estado,
            cidade: this.obj.cidade,
            endereco: this.obj.endereco,
            numeroEndereco: this.obj.numeroEndereco,

            usuarioSession: this.obj.usuarioSession,
            situacao: this.obj.situacao,
            admin: this.obj.admin,

            buttonDisabled: "",
            cadastroResult: "",

            repetirSenhaError: "",
            repetirSenhaclassError: "",

            cidadeError: "",
            cidadeClassError: "",

            enderecoError: "",
            enderecoClassError: "",

            editar: props.editar
        };
    }

    componentDidMount = () => {

        window.scrollTo(0, 0);
    }
    
    sendForm = (e) => {
        sendForm(this, e);
    }

    admin = () => {

        let adminCheck = this.props.navbar.props.app.state.admin;

        if (adminCheck === 1) {

            let admin = [];

            admin.push(

                <InputSituacao key="0" context={this} />,
                <InputAdministrador key="1" context={this} />
            );

            return admin;
        }

    }

    render() {

        return (

            <form className="row col-12 mt-4 mx-auto" id="form">

                <div className="row mx-auto col-12">
                    
                    <div className="col-12 text-center">
                        <h1>Cadastro de Parceiro</h1>
                    </div>

                    <InputNome context={this} />
                    <InputCnpj context={this} />
                    <InputEmail context={this} />
                    <InputCodigo context={this} />
                    <InputSenha context={this} />
                    <InputRepetirSenha context={this} />
                    <InputTelefone context={this} />
                    <InputCep context={this} />
                    <InputEstado context={this} />
                    <InputCidade context={this} />
                    <InputEndereco context={this} />
                    <InputNumeroEndereco context={this} />

                    {this.admin()}
                </div>
                
                <div className="row justify-content-end col-12 mt-3">
                    <button className="btn btn-success btn-lg" type="button" onClick={this.sendForm} 
                    disabled={this.state.buttonDisabled} >Enviar <FontAwesomeIcon icon={faPaperPlane} /> </button>
                </div>
                {this.state.cadastroResult}
            </form>
        );
    }
}

export default CadastroParceiro;
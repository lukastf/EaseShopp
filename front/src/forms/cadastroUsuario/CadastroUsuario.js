import React from 'react';
import sendForm from './sendForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import termosCondicoes from './termosCondicoes';

import InputNome from '../inputs/Nome';
import InputCpf from '../inputs/Cpf';
import InputRg from '../inputs/Rg';
import InputEmail from '../inputs/Email';
import InputSenha from '../inputs/Senha';
import InputRepetirSenha from '../inputs/RepetirSenha';
import InputCelular from '../inputs/Celular';
import InputWhatsapp from '../inputs/Whatsapp';
import InputDataNascimento from '../inputs/DataNascimento';
import InputCep from '../inputs/Cep';
import InputEstado from '../inputs/Estado';
import InputCidade from '../inputs/Cidade';
import InputEndereco from '../inputs/Endereco';
import InputNumeroEndereco from '../inputs/NumeroEndereco';
import InputSituacao from '../inputs/Situacao';
import InputIdOrg from '../inputs/IdOrg';
import InputRedeCredenciada from '../inputs/RedeCredenciada';
import InputDataInclusao from '../inputs/DataInclusao';
import objUsuario from '../../usuario/objUsuario';
import InputReceberStatusWhats from '../inputs/ReceberStatusWhats';
import InputCodigoIndicacao from '../inputs/CodigoIndicacao';

class CadastroUsuario extends React.Component {

    constructor(props) {

        super(props);
        
        this.obj = objUsuario(false);

        if (props.editar || props.usuario.veioDoPreCadastro) 
            this.obj = objUsuario(props.usuario);
            
           
        this.state = {

            _id: this.obj._id,
            nome: this.obj.nome,
            cpf: this.obj.cpf,
            rg: this.obj.rg,
            email: this.obj.email,
            senha: this.obj.senha,
            repetirSenha: this.obj.repetirSenha,
            celular: this.obj.celular,
            whatsapp: this.obj.whatsapp,
            dataNasc: this.obj.dataNasc,
            cep: this.obj.cep,
            estado: this.obj.estado,
            cidade: this.obj.cidade,
            endereco: this.obj.endereco,
            numeroEndereco: this.obj.numeroEndereco,
            receberStatusWhats: this.obj.receberStatusWhats,
            codigoIndicacao: this.obj.codigoIndicacao,

            carrinhoSession: this.obj.carrinhoSession,
            usuarioSession: this.obj.usuarioSession,

            idOrg: this.obj.idOrg,
            dataInclusao: this.obj.dataInclusao,
            situacao: this.obj.situacao,
            redeCredenciada: this.obj.redeCredenciada,

            //admin: 0,

            buttonDisabled: "disabled",
            cadastroResult: "",

            repetirSenhaError: "",
            repetirSenhaclassError: "",

            cidadeError: "",
            cidadeClassError: "",

            enderecoError: "",
            enderecoClassError: "",

            //classError:"",

            editar: props.editar

        };
    }

    componentDidMount = () => {

        window.scrollTo(0, 0);

        if (this.state.editar) {

            this.setState({
                buttonDisabled: ""
            });
        }
    }

    sendForm = (e) => {
        sendForm(this,e);
    }

    admin = () => {

        let adminCheck = this.props.navbar.props.app.state.admin;

        if (adminCheck === 1) {

            let admin = [];

            admin.push(

                <InputSituacao key="0" context={this} />,
                <InputIdOrg key="1" context={this} />,
                <InputRedeCredenciada key="2" context={this} />,
                <InputDataInclusao key="3" context={this} />
            );

            return admin;
        }

    }

    codIndicacao = () => {

        if (!this.state.editar)
        return <InputCodigoIndicacao context={this} />
    }

    render() {

        return (

            <form className="row col-12 mt-4 mx-auto" id="form">
                <div className="row mx-auto col-12">

                    <div className="col-12 text-center">
                        <h1>Cadastro de Usuario</h1>
                    </div>

                    <InputNome context={this} />
                    <InputCpf context={this} />
                    <InputRg context={this} />
                    <InputEmail context={this} />
                    <InputSenha context={this} />
                    <InputRepetirSenha context={this} />
                    <InputCelular context={this} />
                    <InputWhatsapp context={this} />
                    <InputDataNascimento context={this} />
                    <InputCep context={this} />
                    <InputEstado context={this} />
                    <InputCidade context={this} />
                    <InputEndereco context={this} />
                    <InputNumeroEndereco context={this} />
                    <InputReceberStatusWhats context={this} />
                    {this.codIndicacao()}

                    {this.admin()}
                    
                </div>

                {termosCondicoes(this)}

                
                <div className="row justify-content-end col-12 mt-3">
                    <button 
                        className="btn btn-success btn-lg" 
                        type="button" 
                        onClick={this.sendForm} 
                        disabled={this.state.buttonDisabled} > Enviar <FontAwesomeIcon icon={faPaperPlane} /> 
                    </button>
                </div>
                {this.state.cadastroResult}
            </form>
        );
    }
}

export default CadastroUsuario;
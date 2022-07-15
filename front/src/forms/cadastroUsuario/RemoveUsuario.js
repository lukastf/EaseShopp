import React from 'react';
import axios from 'axios';
import { serverUrl } from '../../config';
import { sucessoExcluir, erroExcluir } from '../cadastroResult';

class RemoveUsuario extends React.Component {

    constructor(props){

        super(props);

        this.state = {

            cadastroResult: 
            <div className="row justify-content-center col-12">
                <label className="col-12 col-md-12 text-center">Deseja realmente remover o usuario {this.props.usuario.nome} ?</label>
            </div>,

            hide: ""
        }
    }

    remover = (e) => {

        e.preventDefault();

        let _id = this.props.navbar.props.app.state._id;
        let senha = this.props.navbar.props.app.state.senha;

        axios.delete(serverUrl + "/usuarios/" + this.props.usuario._id + "/" + _id + "/" + senha)
        .then((response) => {

            sucessoExcluir(this);

        })
        .catch((error) => {

            erroExcluir(this, error);

        });
    }

    componentDidMount() {

        window.scrollTo(0, 0);
    }

    atributo = (nome, prop) => {

        return(
            <div className="col-12">
                <label>{nome} {prop} </label>
            </div>
        );
    }

    todosAtributos = () => {
        
        let todosAtributos = [];

        todosAtributos.push(

        this.atributo("Nome:", this.props.usuario.nome),
        this.atributo("Cpf:", this.props.usuario.cpf),
        this.atributo("Rg:", this.props.usuario.rg),
        this.atributo("Email:", this.props.usuario.email),
        this.atributo("Senha:", this.props.usuario.senha),
        this.atributo("Celular:", this.props.usuario.celular),
        this.atributo("Whatsapp:", this.props.usuario.whatsapp),
        this.atributo("Data de Nascimento:", this.props.usuario.dataNasc),
        this.atributo("Cep:", this.props.usuario.cep),
        this.atributo("Estado:", this.props.usuario.estado),
        this.atributo("Cidade:", this.props.usuario.cidade),
        this.atributo("Endereco:", this.props.usuario.endereco),
        this.atributo("Numero do endereço:", this.props.usuario.numeroEndereco),
        this.atributo("idOrg:", this.props.usuario.idOrg),
        this.atributo("Rede Credenciada:", this.props.usuario.redeCredenciada),
        this.atributo("Data Inclusao:", this.props.usuario.dataInclusao),
        this.atributo("Situação:", this.props.usuario.situacao)
        );

        return todosAtributos;
    }


    render() {
        return (
            <form className="row col-12 mt-4">

                <div className="row justify-content-center col-12">

                    <div className={"col-12 text-center " + this.state.hide } >
                        <h1>Remover Usuario {this.props.usuario.nome} </h1>
                    </div>

                    <div className={"row form-group justify-content-center col-12 text-center mt-4 " + this.state.hide } >

                        {this.todosAtributos()}
                        
                    </div>

                    {this.state.cadastroResult}
                    
                    <div className={"row form-group justify-content-center col-12 " + this.state.hide }>
                        <button type="button" onClick={this.remover} className="btn btn-primary">Sim</button>
                    </div>

                </div>
            </form>
        );
    }
}

export default RemoveUsuario;
import React from 'react';
import axios from 'axios';
import { serverUrl } from '../../config';
import { erroExcluir, sucessoExcluir } from '../cadastroResult';

class RemoveParceiro extends React.Component {

    constructor(props){

        super(props);

        this.state = {

            cadastroResult: 
            <div className="row justify-content-center col-12">
                <label className="col-12 col-md-12 text-center">Deseja realmente remover o produto {this.props.parceiro.nome} ?</label>
            </div>,

            hide: ""
        }
    }

    remover = (e) => {

        e.preventDefault();

        let _id = this.props.navbar.props.app.state._id;
        let senha = this.props.navbar.props.app.state.senha;

        axios.delete(serverUrl + "/parceiros/" + this.props.parceiro._id + "/" + _id + "/" + senha)
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

        let admin = this.props.parceiro.admin === 1 ? "Sim" : "Não";


        todosAtributos.push(

        this.atributo("Nome:", this.props.parceiro.nome),
        this.atributo("Cnpj:", this.props.parceiro.cnpj),
        this.atributo("Email:", this.props.parceiro.email),
        this.atributo("Codigo:", this.props.parceiro.codigo),
        this.atributo("Senha:", this.props.parceiro.senha),
        this.atributo("Telefone:", this.props.parceiro.telefone),
        this.atributo("Cep:", this.props.parceiro.cep),
        this.atributo("Estado:", this.props.parceiro.estado),
        this.atributo("Cidade:", this.props.parceiro.cidade),
        this.atributo("Endereco:", this.props.parceiro.endereco),
        this.atributo("Numero do endereço:", this.props.parceiro.numeroEndereco),
        this.atributo("Administrador:", admin),
        this.atributo("Situação:", this.props.parceiro.situacao)
        );

        return todosAtributos;
    }


    render() {
        return (
            <form className="row col-12 mt-4">

                <div className="row justify-content-center col-12">

                    <div className={"col-12 text-center " + this.state.hide } >
                        <h1>Remover Parceiro {this.props.parceiro.nome} </h1>
                    </div>

                    <div className={"row form-group justify-content-center col-12 text-center " + this.state.hide } >
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

export default RemoveParceiro;
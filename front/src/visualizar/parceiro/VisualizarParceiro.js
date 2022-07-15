

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTshirt
} from '@fortawesome/free-solid-svg-icons';

import styles from './VisualizarParceiro.module.css';
import routes from '../../navbar/routes/routes';
import setRoute from '../../navbar/routes/setRoute';

class VisualizarParceiro extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            
        }
    }

    visualizarProdutos = () => {

        setRoute(this.props.navbar, "/parceiroProdutos/"+this.props.parceiro._id);
        routes(this.props.navbar, this.props.parceiro, "/parceiroProdutos");
    }

    render(){
        return(
            <div className="row col-12 justify-content-center mx-auto">
                <h1 className="col-12 text-center mt-5"> Visualizar Parceiro </h1>
                <h3 className="col-12 text-center"> Nome: {this.props.parceiro.nome}</h3>
                <div className={"col-12 col-md-3 " + styles.border}>
                    <h3>Contato</h3>
                    <p className="m-0">Telefone: {this.props.parceiro.telefone}</p>
                    <p className="m-0">Email: {this.props.parceiro.email}</p>
                </div>
                <div className={"col-12 col-md-3 "+ styles.border}>
                    <h3>Endereço</h3>
                    <p className="m-0">Estado: {this.props.parceiro.estado}</p>
                    <p className="m-0">Cidade: {this.props.parceiro.cidade}</p>
                    <p className="m-0">Endereco: {this.props.parceiro.endereco}</p>
                    <p className="m-0">Numero: {this.props.parceiro.numeroEndereco}</p>
                </div>
                <div className="row col-12">
                    <button 
                        type="button" 
                        onClick={this.visualizarProdutos} 
                        className="btn btn-primary btn-lg btn-block col-md-3 mx-auto">
                            Produtos de {this.props.parceiro.nome} <FontAwesomeIcon icon={faTshirt} />
                    </button>
                </div>
            </div>
        );
    }
}

export default VisualizarParceiro;
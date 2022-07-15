import React from 'react';
import axios from 'axios';
import { serverUrl } from '../../config';

import routes from '../../navbar/routes/routes';
import { sucessoExcluir, erroExcluir } from '../cadastroResult';

class RemoveProduto extends React.Component {

    constructor(props){

        super(props);

        this.state = {

            cadastroResult: 
            <div className="row justify-content-center col-12">
                <label className="col-12 col-md-12 text-center">Deseja realmente remover o produto {this.props.produto.nome} ?</label>
            </div>,

            hide: "",

            imgSrc: ["","","","",""]
        }
    }

    remover = (e) => {

        e.preventDefault();

        let _id = this.props.navbar.props.app.state._id;
        let senha = this.props.navbar.props.app.state.senha;

        axios.delete(serverUrl + "/produtos/" + this.props.produto._id + "/" + _id + "/" + senha)
        .then((response) => {

            sucessoExcluir(this);

        })
        .catch((error) => {

            erroExcluir(this, error);
        });
    }

    componentDidMount() {

        window.scrollTo(0, 0);

        if (this.props.navbar.props.app.state._id !== this.props.produto._idParceiro) {

            routes(this.props.navbar, "", "/loja");
        }

        this.ImgLinkType();
    }

    ImgLinkType = () => {

        let imgSrc = [];

        for (let i = 0; i < this.props.produto.imagens.length; i++) {

            if(this.props.produto.imagensLinkExterno[i]) {

                imgSrc.push(this.props.produto.imagens[i]);

            } else {

                imgSrc.push(serverUrl + "/images/" + this.props.produto.imagens[i]);
            }
        }

        this.setState({
            imgSrc: imgSrc
        });
    }


    render() {
        return (
            <form className="row col-12 mt-4">

                <div className="row justify-content-center col-12">

                    <div className={"col-12 text-center " + this.state.hide } >
                        <h1>Remover Produto {this.props.produto.nome} </h1>
                    </div>

                    <div className={"row form-group justify-content-center col-12 text-center " + this.state.hide } >
                        <div className="col-12 mt-3">
                            <label>Nome: {this.props.produto.nome} </label>
                        </div>
                        <div className="col-12 mt-3">
                            <label>valor: {this.props.produto.valor} </label>
                        </div>
                        <div className="col-12 mt-3">
                            <label>Quantidade: {this.props.produto.quantidadeTotal} </label>
                        </div>
                        <div className="col-12 mt-3">
                            <label>Categoria: {this.props.produto.categoria} </label>
                        </div>
                        <div className="col-12 mt-3">
                            <label>Descrição: {this.props.produto.descricao} </label>
                        </div>
                    </div>

                    <div className={"row form-group justify-content-center col-12 " + this.state.hide }>
                        <div htmlFor="col-12 text-center">
                            <h3>Imagens</h3>
                        </div>
                    </div>

                    <div className={"row form-group justify-content-center col-12 " + this.state.hide }>

                        <div className="col-md-2 mt-3">
                            <img className="img-fluid"
                            src={ this.state.imgSrc[0] }
                            alt="" width="256" height="256"/>
                        </div>
                        <div className="col-md-2 mt-3">
                            <img className="img-fluid"
                            src={ this.state.imgSrc[1] } 
                            alt="" width="256" height="256"/>
                        </div>
                        <div className="col-md-2 mt-3">
                            <img className="img-fluid"
                            src={ this.state.imgSrc[2] }
                            alt="" width="256" height="256"/>
                        </div>
                        <div className="row form-group justify-content-center col-12">
                            <div className="col-md-2 mt-3">
                                <img className="img-fluid"
                                src={ this.state.imgSrc[3] }
                                alt="" width="256" height="256"/>
                            </div>
                            <div className="col-md-2 mt-3">
                                <img className="img-fluid"
                                src={ this.state.imgSrc[4] }
                                alt="" width="256" height="256"/>
                            </div>
                        </div>
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

export default RemoveProduto;
import React from 'react';

import btnFinalizarCompra  from './btnFinalizarCompra/btnFinalizarCompra';
import getValues from './getValues';
import listarProdutos from './listarProdutos';
import { resetCarrinhoCount } from '../navbar/btns/btnCarrinho';
import getCarrinho from '../usuario/getCarrinho';
//import setRoute from '../navbar/routes/setRoute';

class Carrinho extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            produtos: [],
            produtosMobile: [],
            btnFinalizarCompra: "",
            qtds: [],
            valoresTotais: [],
            errors: [],

            cidadeError: "",
            cidadeClassError: "",

            enderecoError: "",
            enderecoClassError: "",

            tipoFrete: "Sedex",
            fretePac: [],
            freteSedex: [],

            prazoEntregaPac: [],
            prazoEntregaSedex: []
        }
    }

    checar = async (values) => {

        let carrinho = this.props.navbar.props.app.state.carrinho;
        let responseCarrinho = this.props.navbar.props.app.state.responseCarrinho;

        if (carrinho.length < 1) {

            if (responseCarrinho.length > 0) {

                carrinho = await getCarrinho(responseCarrinho)
                this.props.navbar.props.app.setState({
                    carrinho: carrinho
                });

                listarProdutos(this, values);
                btnFinalizarCompra(this, values);

                getValues(this)
            }
            
        }
    }

    componentDidMount () {
        
        resetCarrinhoCount(this.props.navbar);
        
        let values = getValues(this);

        this.checar(values);

        listarProdutos(this, values);
        btnFinalizarCompra(this, values);
    }

    render() {

        return (
            <div className="col-12 mt-4">

                <div className="row justify-content-center mt-5 d-none d-md-block">
                    <div className="container">
                        <h2>Meu Carrinho</h2>
                        {/*<hr></hr>*/}
                        <table className="table">
                            <tbody>
                                {this.state.produtos}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row justify-content-center mt-5 d-block d-md-none">
                    {this.state.produtosMobile}
                </div>

                {/*<div className="col-12">
                    <h1 className="text-center">Carrinho</h1>
                    <p className="jumbotron text-center"> Aceito receber contato via WhatsApp para tratar assuntos relacionados a EaseShopp 
                    e acompanhar o status do meu pedido</p>
                </div>*/}

                {this.state.btnFinalizarCompra}
            </div>
        );
    }
}

export default Carrinho;
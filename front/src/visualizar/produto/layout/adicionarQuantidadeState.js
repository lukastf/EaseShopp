
import React from 'react';

import { numberMask } from '../../../forms/utilidades/masks';
import changeQtdsBase from '../../../carrinho/changeQtdsBase';

const adicionarQuantidadeState = (visualizarProduto) => {

    const changeQtd2 = (e) => {

        let quantidadeCarrinho = parseInt(numberMask(e.target.value));
        changeQtd(quantidadeCarrinho);
    }

    const changeQtd = (quantidadeCarrinho) => {

        let produto = visualizarProduto.props.produto;
        produto.quantidadeCarrinho = quantidadeCarrinho;

        let app = visualizarProduto.props.navbar.props.app;

        produto = changeQtdsBase(app, produto);

        visualizarProduto.setState({
            
            valor: produto.valorTotal,
            quantidadeCarrinho: produto.quantidadeCarrinho,
            error: produto.error
        });

        atualizarInput(produto.quantidadeCarrinho, produto.error);
    }

    const atualizarInput = (quantidadeCarrinho, error) => {

        visualizarProduto.setState({

            inputQtd: 
            <div className="col-12 col-md-5 mt-3 p-0">
                <label htmlFor="quantidade">Quantidade</label>
                <input type="text" 
                    className={"form-control "} 
                    id={"quantidade"} 
                    placeholder="Quantidade" maxLength="10"
                    onChange={changeQtd2} 
                    value={quantidadeCarrinho} 
                    required 
                />
                {error}
            </div>
        });
    }

    atualizarInput(visualizarProduto.state.quantidadeCarrinho, visualizarProduto.state.error);
    changeQtd(visualizarProduto.state.quantidadeCarrinho);
}

export default adicionarQuantidadeState;
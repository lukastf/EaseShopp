
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import adicionarCarrinho from '../../carrinho/adicionarCarrinho';
import { adicionarCarrinhoCount } from '../../navbar/btns/btnCarrinho';
import objProduto from '../../carrinho/objProduto';

import removerCarrinho from './removerCarrinho';

const adicionarCarrinhoF = (context) => {

    const adicionarCarrinhoHdl =  (e) => {
    
        e.preventDefault();
        e.stopPropagation();

        let app = context.props.navbar.props.app;
        let navbar = context.props.navbar;
        let produto = context.props.produto;

        let obj = objProduto(produto);

        obj.valorTotal = produto.valorTotal;
        obj.quantidadeTotal = produto.quantidadeTotal;
        obj.quantidadeCarrinho = produto.quantidadeCarrinho;
        obj.opcoesUsuario = produto.opcoes;

        obj.voltagemUsuario = produto.voltagemUsuario;
        obj.tamanhoRoupaUsuario = produto.tamanhoRoupaUsuario;
        obj.tamanhoCalcadoUsuario = produto.tamanhoCalcadoUsuario;

        if (obj.quantidadeCarrinho === "") 
        obj.quantidadeCarrinho = 1;

        adicionarCarrinho(app, obj);
        adicionarCarrinhoCount(navbar);

        removerCarrinho(context);
    }

    context.setState({

        btnAdicionarRemoverCarrinho: 
        <button 
            type="button" 
            onClick={adicionarCarrinhoHdl} 
            className={context.props.cardLink + " btn btn-success btn-lg btn-block"}>
                Adicionar <FontAwesomeIcon icon={faCartPlus} />
        </button>
    });
}

export default adicionarCarrinhoF;
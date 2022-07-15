
//import React from 'react';
import { serverUrl } from '../../config';
//import routes from '../../navbar/routes/routes';
//import objProduto from '../../carrinho/objProduto';
import setRoute from '../../navbar/routes/setRoute';

const produtoProps = (cadastroProduto) => {

    if (!cadastroProduto.props.editar) {
        return {
            imgUrl: [null, null, null, null, null],
            linkExterno: ["", "", "", "", ""]
        }
    }

    let _id = cadastroProduto.props.navbar.props.app.state._id;
    let admin = cadastroProduto.props.navbar.props.app.state.admin;
    let produto = cadastroProduto.props.produto;

    if (_id !== produto._idParceiro && admin !== 1) {

        setRoute(cadastroProduto.props.navbar, "/loja");
    }

    let imgSrc = [];
    let linkExterno = [];

    for (let i = 0; i < produto.imagens.length; i++) {

        if(produto.imagensLinkExterno[i]) {

            imgSrc.push(produto.imagens[i]);
            linkExterno.push(produto.imagens[i]);

        } else {

            imgSrc.push(serverUrl + "/images/" + produto.imagens[i]);
            linkExterno.push("");
        }
    }

    return {
        imgUrl: imgSrc,
        linkExterno: linkExterno
    }
}

export default produtoProps;
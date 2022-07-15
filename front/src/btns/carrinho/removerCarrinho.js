
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { subtrairCarrinhoCount } from '../../navbar/btns/btnCarrinho';
import routes from '../../navbar/routes/routes';
import setRoute from '../../navbar/routes/setRoute';
import removerCarrinho from '../../carrinho/removerCarrinho';

import adicionarCarrinho from './adicionarCarrinho';

const removerCarrinhoF = (context) => {

    const removerCarrinhoHdl = (e) => {

        e.preventDefault();
        e.stopPropagation();

        let app = context.props.navbar.props.app;
        let navbar = context.props.navbar;
        let produto = context.props.produto;

        removerCarrinho(app, produto._id);
        subtrairCarrinhoCount(navbar);

        if (context.props.remover) {
            
            setRoute(navbar, "/carrinho");
            routes(navbar,  "", "/carrinho");
        }

        adicionarCarrinho(context);
    }

    let btnSize = "btn-lg"

    if (context.props.btnSize === "btn-sm") btnSize = "btn-sm"
    if (context.props.btnSize === "btn-md") btnSize = "btn-md"

    context.setState({

        btnAdicionarRemoverCarrinho:
        <button 
            type="button" 
            onClick={removerCarrinhoHdl} 
            className={context.props.cardLink + " btn btn-danger "+btnSize+" btn-block"}>
                Remover <FontAwesomeIcon icon={faCartArrowDown} />
        </button>
    });
}

export default removerCarrinhoF;
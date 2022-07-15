
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import adicionarFavoritos from '../../favoritos/adicionarFavoritos';
import objProduto from '../../carrinho/objProduto';
import { adicionarFavoritosCount } from '../../navbar/btns/btnFavoritos';

import removerFavoritos from './removerFavoritos';

const adicionarFavoritosF = (context) => {

    const adicionarFavoritosHdl =  (e) => {
    
        e.preventDefault();
        e.stopPropagation();

        let app = context.props.navbar.props.app;
        let navbar = context.props.navbar;
        let produto = context.props.produto;

        let obj = objProduto(produto);

        obj.quantidadeTotal = produto.quantidadeTotal;
        //obj.quantidadeCarrinho = produto.quantidadeCarrinho;

        adicionarFavoritos(app, obj);
        adicionarFavoritosCount(navbar);

        removerFavoritos(context);
    }

    context.setState({

        btnAdicionarRemoverFavoritos: 
        //<div className="col-12 col-md-4 mb-3">
            <button 
            type="button" 
            onClick={adicionarFavoritosHdl} 
            className={context.props.cardLink + " btn btn-success btn-lg btn-block"}>
                Favoritar <FontAwesomeIcon icon={faHeart} />
            </button>
        //</div>
    });
}

export default adicionarFavoritosF;
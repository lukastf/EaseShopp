
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

import { subtrairFavoritosCount } from '../../navbar/btns/btnFavoritos';
import removerFavoritos from '../../favoritos/removerFavoritos';
import adicionarFavoritos from './adicionarFavoritos';
import routes from '../../navbar/routes/routes';
import setRoute from '../../navbar/routes/setRoute';

const removerFavoritosState = (context) => {

    const removerFavoritosHdl = (e) => {

        e.preventDefault();
        e.stopPropagation();

        let app = context.props.navbar.props.app;
        let navbar = context.props.navbar;
        let produto = context.props.produto;

        removerFavoritos(app, produto._id);
        subtrairFavoritosCount(navbar);

        //listarProdutos(context);

        if (context.props.remover) {

            setRoute(navbar, "/favoritos");
            routes(navbar,  "", "/favoritos");
        }

        adicionarFavoritos(context);
    }

    context.setState({

        btnAdicionarRemoverFavoritos:
        //<div className="col-12 col-md-4 mb-3">
            <button 
            type="button" 
            onClick={removerFavoritosHdl} 
            className={context.props.cardLink + " btn btn-danger btn-lg btn-block"}>
                Remover <FontAwesomeIcon icon={faHeartBroken} />
            </button>
        //</div>
    });
}

export default removerFavoritosState;
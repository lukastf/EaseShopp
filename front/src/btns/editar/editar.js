
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import setRoute from '../../navbar/routes/setRoute';
import objProduto from '../../carrinho/objProduto';
import routes from '../../navbar/routes/routes';
import { Link } from 'react-router-dom';

const editarF = (context) => {

    let produto = context.props.produto;

    const editarHdl =  (e) => {
    
        e.preventDefault();
        e.stopPropagation();

        let navbar = context.props.navbar;
        

        let obj = objProduto(produto);

        obj.quantidadeTotal = produto.quantidadeTotal;
        obj.quantidadeCarrinho =  produto.quantidadeCarrinho;

        setRoute(navbar, "/editarProduto/" + obj._id);
        routes(navbar, obj, "/editarProduto");

        //adicionarCarrinho(context.props.navbar.props.app, context.props.produto);
        //setRoute(context.props.navbar, "/carrinho");
    }

    context.setState({

        btnEditar: 
        <Link to={"/editarProduto/" + produto._id }
            type="button" 
            onClick={editarHdl} 
            className={context.props.cardLink + " btn btn-primary btn-lg btn-block"} >

            Editar <FontAwesomeIcon icon={faPencilAlt} />
        </Link>
    });
}

export default editarF;
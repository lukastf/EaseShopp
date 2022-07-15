
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import setRoute from '../../navbar/routes/setRoute';
import objProduto from '../../carrinho/objProduto';
import routes from '../../navbar/routes/routes';
import { Link } from 'react-router-dom';

const removerF = (context) => {

    let produto = context.props.produto;

    const removerHdl =  (e) => {
    
        e.preventDefault();
        e.stopPropagation();

        let navbar = context.props.navbar;
        

        let obj = objProduto(produto);

        obj.quantidadeTotal = produto.quantidadeTotal;
        obj.quantidadeCarrinho =  produto.quantidadeCarrinho;

        setRoute(navbar, "/removerProduto/" + obj._id);
        routes(navbar, obj, "/removerProduto");
    }

    context.setState({

        btnRemover: 
        <Link to={"/removerProduto/" + produto._id }
            type="button" 
            onClick={removerHdl} 
            className={context.props.cardLink + " btn btn-danger btn-lg btn-block"} >

            Remover <FontAwesomeIcon icon={faTrash} />
        </Link>
    });
}

export default removerF;
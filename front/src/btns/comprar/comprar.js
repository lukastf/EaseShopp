
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import adicionarCarrinho from '../../carrinho/adicionarCarrinho';
import setRoute from '../../navbar/routes/setRoute';

const comprarF = (context) => {

    const comprarHdl =  (e) => {
    
        e.preventDefault();
        e.stopPropagation();

        adicionarCarrinho(context.props.navbar.props.app, context.props.produto);
        setRoute(context.props.navbar, "/carrinho");
    }

    context.setState({

        btnComprar: 
        <button 
            type="button" 
            onClick={comprarHdl} 
            className={context.props.cardLink + " btn btn-warning btn-lg btn-block"}>
                Comprar <FontAwesomeIcon icon={faMoneyBillWave} />
        </button>
    });
}

export default comprarF;
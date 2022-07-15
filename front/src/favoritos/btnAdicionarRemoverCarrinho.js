import React from 'react';
import adicionarCarrinho from './adicionarCarrinho';
import removerCarrinho from './removerCarrinho';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const btnAdicionarRemoverCarrinhoF = (fav, favObj) => {

    const adicionarCarrinhoF = (e) => {
        adicionarCarrinho(fav, e);
    }

    const removerCarrinhoF = (e) => {
        removerCarrinho(fav, e);
    }

    //let btnAdicionarRemoverCarrinho = [];
    let carrinho = fav.props.navbar.props.app.state.carrinho;

    //btnAdicionarRemoverCarrinho.push(

    let btnAdicionarRemoverCarrinho = 
        <p className="card-text">
            <button 
                className="card-link btn btn-success btn-lg btn-block"
                onClick={adicionarCarrinhoF}
                id={favObj._id} 
            >
                Adicionar <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </p>
    //);
    
    for (let index=0; index < carrinho.length; index++) {

        if (favObj._id === carrinho[index]._id) {

            btnAdicionarRemoverCarrinho = 
            
            //[];

            //btnAdicionarRemoverCarrinho.push(

                <p className="card-text">
                    <button 
                        className="card-link btn btn-danger btn-lg btn-block"
                        onClick={removerCarrinhoF}
                        id={favObj._id} 
                    >
                        Remover <FontAwesomeIcon icon={faCartArrowDown} />
                    </button>
                </p>;
            //);

        }
    }

    return btnAdicionarRemoverCarrinho;
}

export default btnAdicionarRemoverCarrinhoF;
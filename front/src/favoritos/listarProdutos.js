import React from 'react';

import { serverUrl } from '../config';
import visualizarProduto from './visualizarProduto';

import BtnAdicionarRemoverCarrinho from '../btns/carrinho/BtnAdicionarRemoverCarrinho';
import BtnAdicionarRemoverFavoritos from '../btns/favoritos/BtnAdicionarRemoverFavoritos';
import BtnComprar from '../btns/comprar/BtnComprar';

const listarProdutos = (fav) => {

    const visualizarProdutoF = (e) => {
        visualizarProduto(fav, e);
    }

    let favoritos = fav.props.navbar.props.app.state.favoritos;
    let produtos = [];

    if (favoritos.length > 0) {

        for (let i=0; i < favoritos.length; i++) {

            if (parseInt(favoritos[i].quantidade) < 1) continue;

            favoritos[i].quantidadeCarrinho = 1;
            favoritos[i].valorTotal = favoritos[i].valor;

            let imgSrc = serverUrl + "/images/" + favoritos[i].imagens[0];

            if (favoritos[i].imagensLinkExterno[0]) {
                
                imgSrc = favoritos[i].imagens[0];

            } 

            produtos.push(
            <div key={i} className="card col-12 col-md-2 p-0 cardStyle1" onClick={visualizarProdutoF} id={favoritos[i]._id} >

                <img className="card-img-top" 
                src={ imgSrc } 
                alt={favoritos[i].imagens[0]} />

                <div className="card-body text-center">
                    <p className="card-text">Nome: {favoritos[i].nome}</p>
                    <p className="card-text">Valor: {favoritos[i].valor}</p>

                    <BtnComprar 
                        cardLink={"card-link"}
                        navbar={fav.props.navbar}
                        produto={favoritos[i]}
                    />

                    <BtnAdicionarRemoverCarrinho
                        cardLink={"card-link"}
                        navbar={fav.props.navbar}
                        produto={favoritos[i]} 
                        
                        remover={false}
                    />   

                    <BtnAdicionarRemoverFavoritos 
                        cardLink={"card-link"}
                        navbar={fav.props.navbar}
                        produto={favoritos[i]}

                        remover={true}
                    />
                </div>
            </div>);
        }
    }

    fav.setState({
        produtos: produtos
    });
}

export default listarProdutos;
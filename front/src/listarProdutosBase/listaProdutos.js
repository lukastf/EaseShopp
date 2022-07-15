
import React from 'react';
import { serverUrl } from '../config';
import visualizarProdutoClick from '../visualizar/produto/visualizarProdutoClick';

import propsAdicionais from './propsAdicionais';
//import setDisplayCodigoRastreio from './setDisplayCodigoRastreio';
//import setDisplayProduto from './setDisplayProduto';
import status from './status';

const listaProdutoss = (context) => {

    const visualizarProdutoHdl = (e) => {
        visualizarProdutoClick(context, e);
    }

    let listaProdutos = [];

    let produtos = context.state.produtos;

    if (context.state.sort === "-_id-a") {

        const shuffle = (array) => {
            let currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle...
            while (currentIndex !== 0) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
        }

        produtos = shuffle(produtos);

    }

    

    
    for (let i=0; i < produtos.length; i++) {
        
        let imgSrc = serverUrl + "/images/" + produtos[i].imagens[0];

        if (produtos[i].imagensLinkExterno[0]) imgSrc = produtos[i].imagens[0];
        if (produtos[i].quantidade < 1 && context.props.title !== "Meus Produtos") continue;
        if (typeof context.state.displayDetalhesProduto[i] === "undefined") context.state.displayDetalhesProduto[i] = "d-none";
        
        listaProdutos.push(
        <div key={i} className={"card col-12 "+ context.state.orderStyle +" p-0"} onClick={visualizarProdutoHdl} id={produtos[i]._id+"_visualizar"} >

            <img className={context.state.cardImgTopStyle}
            src={ imgSrc } 
            alt={produtos[i].imagens[0]} />

            <div className="card-body text-center">

                {status(context, i)}
                <p className="card-text">{produtos[i].nome}</p>
                <p className="card-text"><b>{produtos[i].valor}</b></p>
                {propsAdicionais(context, i)}

            </div>
        </div>);
    }

    context.setState({
        listaProdutos: listaProdutos
    });
}

export default listaProdutoss;
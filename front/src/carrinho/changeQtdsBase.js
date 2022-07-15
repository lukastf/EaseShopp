

import converterDinheiro from "./converterDinheiro";
import adicionarCarrinho from "./adicionarCarrinho";

import React from 'react';


const changeQtdsBase = (app, produto) => {

    if (typeof produto === "undefined") return;

    produto.quantidadeTotal = parseInt(produto.quantidadeTotal);

    let qtdInvalida = false;

    if (isNaN(produto.quantidadeCarrinho) || produto.quantidadeCarrinho <= 0) {

        qtdInvalida = true;
        produto.quantidadeCarrinho = 1;
    }
    
    produto.error = "";

    if (produto.quantidadeCarrinho > produto.quantidadeTotal) {

        produto.error = <p style={{color:"red"}}>Quantidade máxima em estoque</p>;
        produto.quantidadeCarrinho = produto.quantidadeTotal;
    }

    let valorFinal = converterDinheiro(produto.valor, produto.quantidadeCarrinho);
    produto.valorTotal = valorFinal;

    let carrinho = app.state.carrinho;

    for (let i = 0; i < carrinho.length; i++) {

        if (carrinho[i]._id === produto._id) {

            if (!qtdInvalida)
            adicionarCarrinho(app, produto);
        }
    }

    if (qtdInvalida) produto.quantidadeCarrinho = "";

    return produto;
}

export default changeQtdsBase;
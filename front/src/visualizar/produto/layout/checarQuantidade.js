

import checarUsuarioLogado from '../../../usuario/checarUsuarioLogado';
import adicionarQuantidadeState from './adicionarQuantidadeState';

const checarQuantidade = (visualizarProduto) => {

    if (checarUsuarioLogado(visualizarProduto)) {

        if (typeof visualizarProduto.state.quantidadeCarrinho === "undefined") 
        adicionarQuantidadeState(visualizarProduto);

        let carrinho = visualizarProduto.props.navbar.props.app.state.carrinho;

        for (let i = 0; i < carrinho.length; i++) {

            if (carrinho[i]._id === visualizarProduto.props.produto._id) {

                //response.data.quantidadeCarrinho = carrinho[i].quantidadeCarrinho;
                adicionarQuantidadeState(visualizarProduto);
            }
        }
    }
}

export default checarQuantidade;
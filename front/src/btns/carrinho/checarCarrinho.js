import checarUsuarioLogado from '../../usuario/checarUsuarioLogado';

import adicionarCarrinho from './adicionarCarrinho';
import removerCarrinho from './removerCarrinho';


const checarCarrinho = (context) => {

    if (checarUsuarioLogado(context)) {

        let carrinho = context.props.navbar.props.app.state.carrinho;
        let _id = context.props.produto._id;
    
        adicionarCarrinho(context);
        
        for (let i = 0; i < carrinho.length; i++) {
    
            if (carrinho[i]._id === _id) {
    
                removerCarrinho(context);
            }
        }
    }
}

export default checarCarrinho;
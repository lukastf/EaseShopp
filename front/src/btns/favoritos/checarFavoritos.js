
import checarUsuarioLogado from '../../usuario/checarUsuarioLogado';

import adicionarFavoritos from './adicionarFavoritos';
import removerFavoritos from './removerFavoritos';


const checarFavoritos = (context) => {

    if (checarUsuarioLogado(context)) {

        let favoritos = context.props.navbar.props.app.state.favoritos;
        let _id = context.props.produto._id;
    
        adicionarFavoritos(context);
        
        for (let i = 0; i < favoritos.length; i++) {
    
            if (favoritos[i]._id === _id) {
    
                removerFavoritos(context);
            }
        }
    }
}

export default checarFavoritos;
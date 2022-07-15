
//import checarUsuarioLogado from '../../usuario/checarUsuarioLogado';
import remover from './remover';

const checarRemover = (context) => {

    let _id = context.props.navbar.props.app.state._id;
    let admin = context.props.navbar.props.app.state.admin;
    let produto = context.props.produto;

    if (produto._idParceiro === _id || admin === 1) {
    
        remover(context);
    }
}

export default checarRemover;
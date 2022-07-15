
import checarUsuarioLogado from '../../usuario/checarUsuarioLogado';
import comprar from './comprar';

const checarComprar = (context) => {

    if (checarUsuarioLogado(context)) {
    
        comprar(context);
    }
}

export default checarComprar;
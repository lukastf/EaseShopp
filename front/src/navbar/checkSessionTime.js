
import { currentDateTime, carrinhoSessionTime, usuarioSessionTime } from '../config';

import sairUsuario from '../usuario/sairUsuario';
import navbarDeslogado from './deslogado/navbarDeslogado';
import routes from './routes/routes';
import { resetCarrinhoCount } from './btns/btnCarrinho';
import atualizarUsuario from '../usuario/atualizarUsuario';

const checkSessionTime = (navbar) => {

    let codigo = navbar.props.app.state.codigo;
    let usuarioSession  = navbar.props.app.state.usuarioSession;
    let carrinhoSession =  navbar.props.app.state.carrinhoSession;

    let dataAtual = currentDateTime();

    if (dataAtual > usuarioSession && usuarioSession !== "" && usuarioSession !== null && typeof usuarioSession !== "undefined") {

        navbar.state.btns = [];
        navbar.state.routes = [];

        sairUsuario(navbar.props.app);
        navbarDeslogado(navbar);

        return;
    }

    if (dataAtual > carrinhoSession && carrinhoSession !== "" && carrinhoSession !== null && typeof carrinhoSession !== "undefined") {

        if (codigo === "" || codigo === null || typeof codigo === "undefined") {

            navbar.props.app.state.carrinho = [];
            resetCarrinhoCount(navbar);
            routes(navbar, "" , "/carrinho");

            atualizarUsuario(navbar.props.app);
        }
    }

    navbar.props.app.setState({

        carrinhoSession: carrinhoSessionTime(), // 10 dias de sessao
        usuarioSession: usuarioSessionTime() // 5 horas de sessao
  
    });
}

export default checkSessionTime;
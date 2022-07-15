
import btnBase from './btnBase';

import { 
    faUsers,
    faCity,
    faUserPlus,
    faUserCircle,
    faBuilding,
    faStoreAlt,
    faQuestion,
    faDownload,
    faInfoCircle,
    faInbox,
    faUpload
} from '@fortawesome/free-solid-svg-icons';
import { adicionarBtnFavoritos } from './btnFavoritos';
import { adicionarBtnCarrinho } from './btnCarrinho';

const btns = (navbar, switchId) => {

    switch (switchId) {

        case "/loja":
            btnBase(navbar, "/loja", faStoreAlt, "Loja", "", true);
            break;
        case "/indicacoes":
            btnBase(navbar, "/indicacoes", faInbox, "Indicações");
            break;
        case "/usuarios":
            btnBase(navbar, "/usuarios", faUsers, "Usuarios");
            break;
        case "/parceiros":
            btnBase(navbar, "/parceiros", faCity, "Parceiros");
            break;
        case "/cadastroUsuario":
            btnBase(navbar, "/cadastroUsuario", faUserPlus, "Cadastre-se");
            break;
        case "/entrarUsuario":
            btnBase(navbar, "/entrarUsuario", faUserCircle, "Entrar");
            break;
        case "/cadastroParceiro":
            btnBase(navbar, "/cadastroParceiro", faBuilding, "Cadastro Parceiro");
            break;
        case "/entrarParceiro":
            btnBase(navbar, "/entrarParceiro", faBuilding, "Parceiros");
            break;
        case "/conta":
            btnBase(navbar, "/conta", faUserCircle, "Minha Conta");
            break;
        case "/comoComprar":
            btnBase(navbar, "/comoComprar", faQuestion, "Como Comprar");
            break;
        case "/favoritos":
            adicionarBtnFavoritos(navbar);
            break;
        case "/carrinho":
            adicionarBtnCarrinho(navbar);
            break;
        //case "/baixarApp":
        //    btnBase(navbar, "https://play.google.com/store/apps/details?id=br.com.easeshopp", faDownload, "Baixar App");
        //    break;
        case "/baixarApp":
            btnBase(navbar, "/baixarApp", faDownload, "Baixar App", "", false, "#c0ff00", "#c0ff00");
            break;
        case "/quemSomos":
            btnBase(navbar, "/quemSomos", faInfoCircle, "Quem Somos");
            break;
        case "/resgates":
            btnBase(navbar, "/resgates", faUpload, "Resgates");
            break;
        default:
    }
}

export default btns;
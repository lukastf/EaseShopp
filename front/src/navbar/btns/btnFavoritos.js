
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import routes from '../routes/routes';
import btnBase from './btnBase';

export const adicionarBtnFavoritos = (navbar) => {

    btnBase(navbar, "/favoritos", faHeart, "Favoritos");
    routes(navbar, "", "/favoritos");
}

const atualizarBtnFavoritos = (navbar, favoritosCount) => {

    btnBase(navbar, "/favoritos", faHeart, "Favoritos", favoritosCount);
}

export const resetFavoritosCount = (navbar) => {

    navbar.setState({

        favoritosCount: 0
    });

    atualizarBtnFavoritos(navbar, 0);
}

export const adicionarFavoritosCount = (navbar) => {

    let favoritosCount = navbar.state.favoritosCount + 1;

    navbar.setState({
        favoritosCount: favoritosCount
    });

    atualizarBtnFavoritos(navbar, favoritosCount);
}

export const subtrairFavoritosCount = (navbar) => {

    let favoritosCount = navbar.state.favoritosCount - 1;

    if (favoritosCount < 1) {
        favoritosCount = 0;
    }

    navbar.setState({
        favoritosCount: favoritosCount
    });

    atualizarBtnFavoritos(navbar, favoritosCount);
}
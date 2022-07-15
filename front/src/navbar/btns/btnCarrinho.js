
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import routes from '../routes/routes';
import btnBase from './btnBase';

export const adicionarBtnCarrinho = (navbar) => {

    btnBase(navbar, "/carrinho", faShoppingCart, "Carrinho");
    routes(navbar, "" , "/carrinho");
}

const atualizarBtnCarrinho = (navbar, carrinhoCount) => {

    btnBase(navbar, "/carrinho", faShoppingCart, "Carrinho", carrinhoCount);
}

export const resetCarrinhoCount = (navbar) => {

    navbar.setState({

        carrinhoCount: 0
    });

    atualizarBtnCarrinho(navbar, 0);
}

export const adicionarCarrinhoCount = (navbar) => {

    let carrinhoCount = navbar.state.carrinhoCount + 1;

    navbar.setState({
        carrinhoCount: carrinhoCount
    });

    atualizarBtnCarrinho(navbar, carrinhoCount);
}

export const subtrairCarrinhoCount = (navbar) => {

    let carrinhoCount = navbar.state.carrinhoCount - 1;

    if (carrinhoCount < 1) {
        carrinhoCount = 0;
    }

    navbar.setState({
        carrinhoCount: carrinhoCount
    });

    atualizarBtnCarrinho(navbar, carrinhoCount);
}
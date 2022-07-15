import axios from 'axios';
import { serverUrl } from '../config';
import removerCarrinho from '../carrinho/removerCarrinho';
import { subtrairCarrinhoCount } from '../navbar/btns/btnCarrinho';
import listarProdutos from './listarProdutos';

const removerCarrinhoFav = (fav, e) => {

  console.log("remover carrinho");

  e.preventDefault();
  e.stopPropagation();

  let _id = fav.props.navbar.props.app.state._id;
  let app = fav.props.navbar.props.app;
  let navbar = fav.props.navbar;

  axios.get(serverUrl + "/produtos/" + e.target.id)
  .then((response) => {

    response.data._idParceiroSession = _id;

    removerCarrinho(app, response.data._id);
    subtrairCarrinhoCount(navbar);

    listarProdutos(fav);

  }).catch((error) => {

    console.log(error);

  });
}

export default removerCarrinhoFav;
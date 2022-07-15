import axios from 'axios';
import listarProdutos from './listarProdutos';
import { serverUrl } from '../config';
import objProduto from '../carrinho/objProduto';
import { adicionarCarrinhoCount } from '../navbar/btns/btnCarrinho';
import adicionarCarrinho from '../carrinho/adicionarCarrinho';

const adicionarCarrinhoFav = (fav, e) => {

    console.log("adicionar carrinho");

    e.preventDefault();
    e.stopPropagation();

    let _id = fav.props.navbar.props.app.state._id;
    let app = fav.props.navbar.props.app;
    let navbar = fav.props.navbar;

    axios.get( serverUrl + "/produtos/" + e.target.id)
    .then((response) => {

        response.data._idParceiroSession = _id;

        let obj = objProduto(response.data);

        obj.quantidadeTotal = response.data.quantidade;
        obj.quantidadeCarrinho = 1;

        adicionarCarrinho(app, obj);
        adicionarCarrinhoCount(navbar);

        listarProdutos(fav);
  
    }).catch((error) => {
  
      console.log(error);
  
    });
}

export default adicionarCarrinhoFav;
import axios from 'axios';
import objProduto from '../carrinho/objProduto';
import { serverUrl } from '../config';
import routes from './routes/routes';
import setRoute from './routes/setRoute';

export const redirectProdutoBaseUrl = (navbar, urlStr) => {

  let arr = navbar.props.app.state.url.split("/");
  let _id = arr.slice(-1)[0];
  let urlName = arr[3];

  if (urlName === urlStr) {

    axios.get(serverUrl + "/produtos/" + _id)
    .then((response) => {

      let produto = objProduto(response.data);

      let carrinho = navbar.props.app.state.carrinho;
    
      produto._idParceiroSession = navbar.props.app.state._id;
      produto.quantidadeTotal = produto.quantidade;

      for (let i = 0; i < carrinho.length; i++) {

        if (carrinho[i]._id === _id) {

          produto.quantidadeCarrinho = carrinho[i].quantidadeCarrinho;
        }
      }
    
      setRoute(navbar, "/"+urlStr+"/"+_id);
      routes(navbar, produto, "/"+urlStr);
      
    }).catch((error) => {
      
      console.log(error);
      
    });
  }
}

export const redirectProdutoBaseId = (navbar, _id, urlStr) => {

  axios.get(serverUrl + "/produtos/" + _id)
  .then((response) => {

    let produto = objProduto(response.data);

    produto._idParceiroSession = navbar.props.app.state._id;
    produto.quantidadeTotal = produto.quantidade;

    setRoute(navbar, "/"+urlStr+"/"+_id);
    routes(navbar, produto, "/"+urlStr);

  }).catch((error) => {

    console.log(error);

  });
}
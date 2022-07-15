
import axios from 'axios';
import { serverUrl } from '../config';
import routes from '../navbar/routes/routes';
import setRoute from '../navbar/routes/setRoute';

const visualizarProduto = (context, e) => {

  e.preventDefault();

  let _id = context.props.navbar.props.app.state._id;
  let carrinho = context.props.navbar.props.app.state.carrinho;

  let id = e.currentTarget.id;

  if ( 
      (e.target.id === id) || 
      (id === "" || id === undefined || id == null) 
  ) {
      return;
  }

  axios.get( serverUrl + "/produtos/" + id)
  .then((response) => {

    response.data._idParceiroSession = _id;
    response.data.quantidadeTotal = response.data.quantidade;

    for (let i = 0; i < carrinho.length; i++) {

      if (carrinho[i]._id === id) {

        response.data.quantidadeCarrinho = context.state.qtds[i];
      }
    }

    setRoute(context.props.navbar, "/visualizarProduto/"+response.data._id);
    routes(context.props.navbar, response.data, "/visualizarProduto");

  }).catch((error) => {

    console.log(error);

  });
}

export default visualizarProduto;
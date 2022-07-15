import axios from 'axios';
import { serverUrl } from '../config';
import setRoute from '../navbar/routes/setRoute';
import routes from '../navbar/routes/routes';

const visualizarProduto = (fav, e) => {

    e.preventDefault();
    e.stopPropagation();

    let _id = fav.props.navbar.props.app.state._id;
    let carrinho = fav.props.navbar.props.app.state.carrinho;

    let id = e.currentTarget.id;

    if ( 
        (e.target.id === id) || 
        (id === "" || typeof id === "undefined" || id == null) 
    ) {
        return;
    }

    axios.get(serverUrl + "/produtos/" + id)
    .then((response) => {

        response.data._idParceiroSession = _id;
        response.data.quantidadeTotal = response.data.quantidade;

        for (let i = 0; i < carrinho.length; i++) {

            if (carrinho[i]._id === id) {

                response.data.quantidadeCarrinho = carrinho[i].quantidadeCarrinho;
            }
        }

        setRoute(fav.props.navbar, "/visualizarProduto/"+response.data._id);
        routes(fav.props.navbar, response.data, "/visualizarProduto");
  
    }).catch((error) => {
  
        console.log(error);
  
    });
}

export default visualizarProduto;
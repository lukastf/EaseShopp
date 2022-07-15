
import axios from 'axios';
import { serverUrl } from '../config';
import atualizarUsuario from '../usuario/atualizarUsuario';

const adicionarFavoritos = (app, obj) => {

  let favoritos = app.state.favoritos;

  favoritos.push(obj);

  app.setState({

    favoritos: favoritos
  });

  // enviar para o servidor

  atualizarUsuario(app);

  axios.put(serverUrl + "/produtos/favorito/"+ obj._id + "/" + app.state._id, {
    senha: app.state.senha, 
    status: "adicionar"
  }).then((response) => {}).catch((error) => {
    console.log(error);
  });
}

export default adicionarFavoritos;
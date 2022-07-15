
import axios from 'axios';
import { serverUrl } from '../config';
import atualizarUsuario from '../usuario/atualizarUsuario';

const removerFavoritos = (app, _id) => {

  let favoritos = app.state.favoritos;
  let removeu = false;

  for (let i = 0; i < app.state.favoritos.length; i++) {

    if (app.state.favoritos[i]._id === _id) {

      favoritos.splice(i, 1);
      removeu = true;
    }
  }

  if (!removeu) return;

  app.setState({
    favoritos: favoritos
  });

  // servidor

  atualizarUsuario(app);

  axios.put(serverUrl + "/produtos/favorito/"+ _id + "/" + app.state._id, {
    senha: app.state.senha, 
    status: "remover"
  }).then((response) => {}).catch((error) => {
    console.log(error);
  });
}

export default removerFavoritos;
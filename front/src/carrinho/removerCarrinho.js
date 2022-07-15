
import atualizarUsuario from '../usuario/atualizarUsuario';

const removerCarrinho = (app, _id) => {

  let carrinho = app.state.carrinho;
  let removeu = false;

  for (let i = 0; i < app.state.carrinho.length; i++) {

    if (app.state.carrinho[i]._id === _id) {

      carrinho.splice(i, 1);
      removeu = true;
    }
  }

  if (!removeu) return;

  app.setState({
    carrinho: carrinho,
    responseCarrinho: carrinho
  });

  atualizarUsuario(app);
}

export default removerCarrinho;

import atualizarUsuario from '../usuario/atualizarUsuario';

const adicionarCarrinho = (app, obj) => {

  //front

  let carrinho = app.state.carrinho;
  let adiciona = true;

  //checa se o produto ja existe no carrinho
  for (let i = 0; i < carrinho.length; i++) {
    if (obj._id === carrinho[i]._id) {

      //edita
      carrinho[i].quantidadeTotal = obj.quantidadeTotal;
      carrinho[i].quantidadeCarrinho = obj.quantidadeCarrinho;
      carrinho[i].valorTotal = obj.valorTotal;
      carrinho[i].opcoes = obj.opcoes;
      carrinho[i].opcoesUsuario = obj.opcoesUsuario;

      carrinho[i].voltagemUsuario = obj.voltagemUsuario;
      carrinho[i].tamanhoRoupaUsuario = obj.tamanhoRoupaUsuario;
      carrinho[i].tamanhoCalcadoUsuario = obj.tamanhoCalcadoUsuario;

      adiciona = false;
    }
  }
  
  //adiciona
  if (adiciona) carrinho.push(obj);

  app.setState({
    carrinho: carrinho,
    responseCarrinho: carrinho
  });

  //back

  atualizarUsuario(app);
}

export default adicionarCarrinho;
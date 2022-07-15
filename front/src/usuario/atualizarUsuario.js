

import axios from 'axios';

import objUsuario from '../usuario/objUsuario';
import { serverUrl } from '../config';

const atualizarUsuario = (app) => {

  //console.log(app.state.carrinho)

  const checkOpcoes = (op) => {

    if (typeof op === "undefined") return;

    let opcoesUsuario = {
      retirada: false,
      entrega: true
    }

    if (op.retirada && !op.entrega) {

      opcoesUsuario = {
        retirada: true,
        entrega: false
      }
    }

    return opcoesUsuario;
  }

  let favoritosIds = [];

  if (typeof app.state.favoritos != "undefined" && app.state.favoritos.length > 0) {
    for (let i = 0; i < app.state.favoritos.length; i++) {
      favoritosIds.push(app.state.favoritos[i]._id);
    }
  }

  let carrinhoIds = [];

  if (typeof app.state.carrinho != "undefined" && app.state.carrinho.length > 0) {
    for (let i = 0; i < app.state.carrinho.length; i++) {

      let carrinhoObj = {
        
        _id: app.state.carrinho[i]._id,
        quantidade: app.state.carrinho[i].quantidadeCarrinho,
        opcoesUsuario: checkOpcoes(app.state.carrinho[i].opcoesUsuario),
        voltagemUsuario: app.state.carrinho[i].voltagemUsuario,
        tamanhoRoupaUsuario: app.state.carrinho[i].tamanhoRoupaUsuario,
        tamanhoCalcadoUsuario: app.state.carrinho[i].tamanhoCalcadoUsuario
      }

      carrinhoIds.push(carrinhoObj);
    }
  }

  let obj = objUsuario(app.state);

  obj.carrinho = carrinhoIds;
  obj.favoritos = favoritosIds;
  obj.senhaAdm = app.state.senha;

  axios.put(serverUrl + "/usuarios/" + app.state._id, obj)
  .then((response) => {
  })
  .catch((error) => {
    console.log(error);
  });
}

export default atualizarUsuario;
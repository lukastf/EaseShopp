
const dm = require('./DirectMongo');
const Usuario = require('./Usuario');
const sendEmail = require('./sendEmail');
const sanitizeHtml = require('sanitize-html');

class FinalizarCompra {

  static get = async (req, resp) => {

    const validaUser = await Usuario.valida(req.params.id, req.params.senha);
    if(!validaUser) {resp.sendStatus(400); console.log("não é user!"); return;}

    req.params._idUsuario = req.params.id;
    req.params.id = undefined;
    req.params.senha = undefined;

    let response = await dm.getOne("finalizarCompra", req.params);

    if (!response) {

      resp.sendStatus(400);
      return
    }

    let obj = {

      _id: response._id,
      _idUsuario : response._idUsuario,
      numeroPedido : response.numeroPedido,
      dataPedido : response.dataPedido,
      status: null,
      errorMessage: null
    };
  
    await dm.putOne("finalizarCompra", obj);

    if (response) 
      resp.status(200).send(response);
  }

  static post = async (req, resp) => {

    const resultValidaUsuario = await Usuario.valida(req.body._idUsuario, req.body.senha);
    if(resultValidaUsuario) {
  
      await dm.deleteMany("finalizarCompra", { _idUsuario:req.body._idUsuario });
  
      let obj = {
        _idUsuario: sanitizeHtml(req.body._idUsuario),
        numeroPedido: sanitizeHtml(req.body.numeroPedido),
        dataPedido: sanitizeHtml(req.body.dataPedido),
        valorTotal: sanitizeHtml(req.body.valorTotal),
        saque: sanitizeHtml(req.body.saque)
      }
  
      let response = await dm.postOne("finalizarCompra", obj);
  
      if (response) 
        resp.sendStatus(200);
      else 
        resp.sendStatus(400);
        
    } else {
  
      if (typeof req.params.numeroPedido === "undefined") {resp.sendStatus(400); return;}
  
      let finalizarCompra = await dm.getOne("finalizarCompra", { numeroPedido:req.params.numeroPedido });
      if (!finalizarCompra) {resp.sendStatus(400); return;}
  
      if (req.body.status === 200) { //{resp.sendStatus(400); return;}
  
        let usuario = await dm.getOne("usuarios", { id: finalizarCompra._idUsuario });

        if (finalizarCompra.saque) {

          let saque = {
    
            nome: usuario.nome,
            dia: new Date().getTime(),
            //_idParceiro: parceiro._id.toString(),
            _idUsuario: usuario._id.toString(),
            valorTotal: finalizarCompra.valorTotal
          }

          await dm.postOne("saques", saque);

          finalizarCompra.status = 200;
          await dm.putOne("finalizarCompra", finalizarCompra);

        } else {

          for (let index = 0; index < usuario.carrinho.length; index++) {
    
            let produto = await dm.getOne("produtos", { id: usuario.carrinho[index]._id });
            let parceiro = await dm.getOne("parceiros", { id: produto._idParceiro });
    
    
            let produtosComprados = {
    
              dia: new Date().getTime(),
              _idParceiro: parceiro._id.toString(),
              _idUsuario: usuario._id.toString(),
              _idProduto: produto._id.toString(),
    
              status: "Aguardando Confirmação",
              parceiro: parceiro.nome,
              produto: produto.nome,
              quantidade: usuario.carrinho[index].quantidade,
              opcoesUsuario: usuario.carrinho[index].opcoesUsuario,
              valorUnitario: produto.valor,
              categoria: produto.categoria,
              
              usuario: {
    
                nome: usuario.nome,
                celular: usuario.celular,
                whatsapp: usuario.whatsapp,
                cep: usuario.cep,
                estado: usuario.estado,
                cidade: usuario.cidade,
                endereco: usuario.endereco,
                numeroEndereco: usuario.numeroEndereco
              },

              voltagem: usuario.carrinho[index].voltagemUsuario,
              tamanhoRoupa: usuario.carrinho[index].tamanhoRoupaUsuario,
              tamanhoCalcadoUsuario: usuario.carrinho[index].tamanhoCalcadoUsuarioUsuario
            }
    
            await dm.postOne("produtosComprados", produtosComprados);
    
            let quantidadeTotal = parseInt(produto.quantidade);
            let quantidadeCarrinho = parseInt(usuario.carrinho[index].quantidade);
    
            produto.quantidade = quantidadeTotal - quantidadeCarrinho;
            produto.quantidade = produto.quantidade.toString();

            produto.vendidos = produto.vendidos + 1;
            if (isNaN(produto.vendidos)) produto.vendidos = 1;
    
            await dm.putOne("produtos", produto);
  
            sendEmail(parceiro.email, 'Compra efetuada na Easeshopp', 'Alguém comprou seu produto na easeshopp.com.br!');
          }
    
          usuario.carrinho = [];
          
          await dm.putOne("usuarios", usuario);
          
          finalizarCompra.status = 200;
          await dm.putOne("finalizarCompra", finalizarCompra);
    
          sendEmail(usuario.email, 'Compra efetuada na Easeshopp', 'Compra realizada com sucesso na easeshopp.com.br!');
        }
  
      }
  
      if (req.body.status === 400) {
        
        finalizarCompra.status = 400;
        finalizarCompra.errorMessage = req.body.errorMessage;
  
        await dm.putOne("finalizarCompra", finalizarCompra);
  
      }
  
      //if (response) 
        resp.sendStatus(200);
      //else 
        //resp.sendStatus(400);
    }
  }
}

module.exports = FinalizarCompra;
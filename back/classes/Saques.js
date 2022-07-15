const dm = require('./DirectMongo');
const Parceiro = require('./Parceiro');
const formatarData = require('./formatarData');
const sanitizeHtml = require('sanitize-html');

class Saques {

  static getPagination = async (req, resp) => {

    const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}

    req.params._idParceiro = "";
    req.params.nome = req.params.pesquisaString;

    let response = await dm.getManyPagination("saques", req.params);

    if (response) 
      resp.status(200).send(response);
    else 
      resp.sendStatus(400);
  }

  static get = async (req, resp) => {

    const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}

    req.params._idParceiro = "";
    req.params.nome = req.params.pesquisaString;

    let response = await dm.getMany("saques", req.params);

    if (response != null) {

      for (let i = 0; i < response.length; i++) {
  
        //let usuario = await dm.getOne("usuarios", { id: response[i]._idUsuario});
        let contaResgate = await dm.getOne("contasResgate", { _idUsuario: response[i]._idUsuario});
  
        let d = new Date(response[i].dia);
  
        let dd = d.getDate();
        let mm = d.getMonth() + 1; //January is 0!
        let yyyy = d.getFullYear();
  
        response[i].dia = dd+ "/"+ mm + "/" + yyyy;
  
        let valorDesconto = response[i].valorTotal.replace(",", ".");
        valorDesconto = parseFloat(valorDesconto);
        valorDesconto = valorDesconto * 0.9;
        valorDesconto = valorDesconto.toFixed(2);
        valorDesconto = valorDesconto.toString();
        valorDesconto = valorDesconto.replace(".", ",");
  
        response[i].valorDesconto = valorDesconto;
        response[i].cpf = contaResgate.cpf;
        //response[i].nome = usuario.nome;
        response[i].tipoConta = contaResgate.tipoConta;
        response[i].banco = contaResgate.banco;
        response[i].agencia = contaResgate.agencia;
        response[i].numeroConta = contaResgate.numeroConta;
        response[i].digito = contaResgate.digito;
        response[i].nomeConta = contaResgate.nome;
  
      }
    }

    

    if (response) 
      resp.status(200).send(response);
    else 
      resp.sendStatus(400);
  }

  static delete = async (req, resp) => {

    const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
  
    let response = await dm.deleteOne("saques", req.params);
  
    if (response) 
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }
}

module.exports = Saques;
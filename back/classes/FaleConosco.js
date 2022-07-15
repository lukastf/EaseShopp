const dm = require('./DirectMongo');
const Parceiro = require('./Parceiro');
const formatarData = require('./formatarData');
const sanitizeHtml = require('sanitize-html');

class FaleConosco {

  static getPagination = async (req, resp) => {

    const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}

    req.params._idParceiro = "";
    req.params.nome = req.params.pesquisaString;

    let response = await dm.getManyPagination("faleConosco", req.params);

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

    let response = await dm.getMany("faleConosco", req.params);

    if (response) 
      resp.status(200).send(response);
    else 
      resp.sendStatus(400);
  }

  static post = async (req, resp) => {

    if ( req.body.duvida == "" || req.body.mensagem == "") { resp.sendStatus(400); return;}
  
    let obj = {
  
      nome: sanitizeHtml(req.body.nome),
      cidade: sanitizeHtml(req.body.cidade),
      email: sanitizeHtml(req.body.email),
      duvida: sanitizeHtml(req.body.duvida),
      mensagem: sanitizeHtml(req.body.mensagem),
      data: formatarData()
    }
  
    let response = await dm.postOne("faleConosco", obj);
  
    if (response) 
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }

  static delete = async (req, resp) => {

    const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
  
    let response = await dm.deleteOne("faleConosco", req.params);
  
    if (response) 
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }
}

module.exports = FaleConosco;

const dm = require('./DirectMongo');
const Parceiro = require('./Parceiro');
const formatarData = require('./formatarData');
const sanitizeHtml = require('sanitize-html');

class SolicitarConvenio {

  static getPagination = async (req, resp) => {

    const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}

    req.params._idParceiro = "";
    req.params.nomeEmpresa = req.params.pesquisaString;

    let response = await dm.getManyPagination("solicitarConvenio", req.params);

    if (response) 
      resp.status(200).send(response);
    else 
      resp.sendStatus(400);
  }

  static get = async (req, resp) => {

    const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}

    req.params._idParceiro = "";
    req.params.nomeEmpresa = req.params.pesquisaString;

    let response = await dm.getMany("solicitarConvenio", req.params);

    if (response) 
      resp.status(200).send(response);
    else 
      resp.sendStatus(400);
  }

  static post = async (req, resp) => {

    if (req.body.nomeEmpresa == "") { resp.sendStatus(400); return;}
  
    let obj = {

      cpf: sanitizeHtml(req.body.cpf),
      rg: sanitizeHtml(req.body.rg),
      dataNasc: sanitizeHtml(req.body.dataNasc),
      celular: sanitizeHtml(req.body.celular),
      nomeEmpresa: sanitizeHtml(req.body.nomeEmpresa),
      estado: sanitizeHtml(req.body.estado),
      cidade: sanitizeHtml(req.body.cidade),
      data: formatarData()
    }
  
    let response = await dm.postOne("solicitarConvenio", obj);
  
    if (response) 
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }

  static delete = async (req, resp) => {

    const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
  
    let response = await dm.deleteOne("solicitarConvenio", req.params);
  
    if (response) 
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }
}

module.exports = SolicitarConvenio;
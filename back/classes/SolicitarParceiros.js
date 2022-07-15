
const dm = require('./DirectMongo');
const Parceiro = require('./Parceiro');
const formatarData = require('./formatarData');
const sanitizeHtml = require('sanitize-html');

class SolicitarParceiros {

  static getPagination = async (req, resp) => {

    const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}

    req.params._idParceiro = "";
    req.params.nomeEmpresa = req.params.pesquisaString;

    let response = await dm.getManyPagination("solicitarParceiros", req.params);

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

    let response = await dm.getMany("solicitarParceiros", req.params);

    if (response) 
      resp.status(200).send(response);
    else 
      resp.sendStatus(400);
  }

  static post = async (req, resp) => {

    //const resultValidaParceiroAdmin = await this.validaAdmin(req.body._idSession, req.body.senhaAdm);
    //if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
    //let obj = this.objParceiro(req.body);
    
    let obj = {
      nome: sanitizeHtml(req.body.nome),
      cnpj: sanitizeHtml(req.body.cnpj),
      email: sanitizeHtml(req.body.email),
      telefone: sanitizeHtml(req.body.telefone),
      estado: sanitizeHtml(req.body.estado),
      cidade: sanitizeHtml(req.body.cidade)
    }

    //console.log(obj);

    if (
      obj.nome.length > 50 || 
      obj.cnpj.length > 18 ||
      obj.email.length > 50 || 
      !obj.email.includes("@") ||
      obj.telefone.length > 15 || 
      obj.estado.length > 50 ||
      obj.cidade.length > 50
    ) {
      resp.sendStatus(400); return;
    }


    //if(!this.validaForm(obj, req.body.repetirSenha)) {resp.sendStatus(400); return;}

    let response = await dm.postOne("solicitarParceiros", obj);

    if (response)
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }

  static delete = async (req, resp) => {

    const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
  
    let response = await dm.deleteOne("solicitarParceiros", req.params);
  
    if (response) 
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }
}

module.exports = SolicitarParceiros;
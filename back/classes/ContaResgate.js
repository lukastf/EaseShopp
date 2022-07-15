const dm = require('./DirectMongo');
const Parceiro = require('./Parceiro');
const Usuario = require('./Usuario');
const sanitizeHtml = require('sanitize-html');

class FaleConosco {

  static objContaResgate = (c) => {

    let obj = {

      _id: sanitizeHtml(c._id),
      tipoConta: sanitizeHtml(c.tipoConta),
      banco: sanitizeHtml(c.banco),
      agencia: sanitizeHtml(c.agencia),
      numeroConta: sanitizeHtml(c.numeroConta),
      digito: sanitizeHtml(c.digito),
      nome: sanitizeHtml(c.nome),
      cpf: sanitizeHtml(c.cpf),
      _idUsuario: sanitizeHtml(c._idUsuario)
    }

    return obj;
  }

  static checkContaResgate = (obj) => {

    if (
      obj.tipoConta.length > 10 || 
      obj.tipoConta == "" || 
      typeof obj.tipoConta == "undefined" ||

      obj.banco.length > 50 ||
      obj.banco == "" ||
      typeof obj.banco == "undefined" ||

      obj.agencia.length > 5 || 
      obj.agencia == "" || 
      typeof obj.agencia == "undefined" ||

      obj.numeroConta.length > 20 || 
      obj.numeroConta == "" || 
      typeof obj.numeroConta == "undefined" ||

      obj.digito.length > 1 ||
      obj.digito == "" ||
      typeof obj.digito == "undefined" ||

      obj.nome.length > 50 ||
      obj.nome == "" ||
      typeof obj.nome == "undefined" ||

      obj.cpf.length > 50 ||
      obj.cpf == "" ||
      typeof obj.cpf == "undefined" ||

      obj._idUsuario.length > 50 ||
      obj._idUsuario == "" ||
      typeof obj._idUsuario == "undefined"
    ) {
      return false;
    }

    return true;
  }

  static getOne = async (req, resp) => {

    const validaUser = await Usuario.valida(req.params._idUsuario, req.params.senha);
    if(!validaUser) {resp.sendStatus(400); console.log("não é user!"); return;}

    let obj = {_idUsuario: req.params._idUsuario}
  
    let response = await dm.getOne("contasResgate", obj);
  
    if (response) 
      resp.status(200).send(response);
    else 
      resp.sendStatus(400);
  }

  static post = async (req, resp) => {

    const validaUser = await Usuario.valida(req.body._idUsuario, req.body.senha);
    if(!validaUser) {resp.sendStatus(400); console.log("não é user!"); return;}

    let objCheck = {_idUsuario: req.body._idUsuario}
  
    let checkConta = await dm.getOne("contasResgate", objCheck);

    if (checkConta != null){ resp.sendStatus(200); return;}

    let obj = this.objContaResgate(req.body);
    if(!this.checkContaResgate(obj)) {resp.sendStatus(400); return;}
  
    let response = await dm.postOne("contasResgate", obj);
  
    if (response) 
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }

  static put = async (req, resp) => {

    const validaUser = await Usuario.valida(req.body._idUsuario, req.body.senha);
    if(!validaUser) {resp.sendStatus(400); console.log("não é user!"); return;}

    let obj = this.objContaResgate(req.body);
    if(!this.checkContaResgate(obj)) {resp.sendStatus(400); return;}
  
    let response = await dm.putOne("contasResgate", obj);
  
    if (response) 
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }

  static delete = async (req, resp) => {

    const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
    if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
  
    let response = await dm.deleteOne("contasResgate", req.params);
  
    if (response) 
      resp.sendStatus(200);
    else 
      resp.sendStatus(400);
  }
}

module.exports = FaleConosco;
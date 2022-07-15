
const dm = require('./DirectMongo');
const Parceiro = require('./Parceiro');
const formatarData = require('./formatarData');
const sendEmail = require('./sendEmail');
const sanitizeHtml = require('sanitize-html');

class EsqueciMinhaSenha {

    static getPagination = async (req, resp) => {

        const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}
    
        req.params._idParceiro = "";
        req.params.nome = req.params.pesquisaString;
    
        let response = await dm.getManyPagination("esqueciMinhaSenha", req.params);
    
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
    
        let response = await dm.getMany("esqueciMinhaSenha", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static post = async (req, resp) => {

        let objCheck = { 
            email: sanitizeHtml(req.body.email), 
            celular: sanitizeHtml(req.body.celular),
            manterSenha: true
        };
    
        if (objCheck.email == '' && objCheck.celular == '') resp.sendStatus(400);
        if (objCheck.email == '') delete objCheck.email;
        if (objCheck.celular == '') delete objCheck.celular;
    
        let res1 = await dm.getOne("usuarios", objCheck);
    
        if (!res1) {
    
            resp.sendStatus(400);
            return;
        }
    
        let obj = {
    
            nome: res1.nome,
            email: res1.email,
            celular: res1.celular,
            data: formatarData()
        }
    
        await dm.postOne("esqueciMinhaSenha", obj);

        sendEmail(res1.email, 'Senha Easeshopp', 'Sua senha na Easeshopp é: '+ res1.senha);

        resp.sendStatus(200);
    }

    static delete = async (req, resp) => {

        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
      
        let response = await dm.deleteOne("esqueciMinhaSenha", req.params);
      
        if (response) 
          resp.sendStatus(200);
        else 
          resp.sendStatus(400);
    }
}

module.exports = EsqueciMinhaSenha;
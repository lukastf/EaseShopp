
const dm = require('./DirectMongo');
const Parceiro = require('./Parceiro');
const sanitizeHtml = require('sanitize-html');

class Categoria {

    static getArray = async () => {

        let obj = {
            itensPage: 0
        }
        let response = await dm.getMany("categorias", obj);
      
        return response;
    }

    static get = async (req, resp) => {

        req.params.itensPage = 0;
      
        let response = await dm.getMany("categorias", req.params);
      
        if (response) 
          resp.status(200).send(response);
        else 
          resp.sendStatus(400);
    }

    static getAdmin = async (req, resp) => {

        const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaAdmin) {res.sendStatus(400); console.log("não é admin!"); return;}
    
        req.params._idParceiro = "";
        req.params.nome = req.params.pesquisaString;
    
        let response = await dm.getMany("categorias", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static getAdminPagination = async (req, resp) => {

        const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaAdmin) {res.sendStatus(400); console.log("não é admin!"); return;}
    
        req.params._idParceiro = "";
    
        let response = await dm.getManyPagination("categorias", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static post = async (req, resp) => {

        /*const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.body._idParceiro);
        if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}*/

        const resultValidaParceiro = await Parceiro.valida(req.body._idParceiro, req.body.senha);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}
    
        let obj = {
            nome: sanitizeHtml(req.body.nome),
            icone: sanitizeHtml(req.body.icone)
        }
    
        let response = await dm.postOne("categorias", obj);
    
        if (response) 
            resp.sendStatus(200);
        else 
            resp.sendStatus(400);
    }

    static put = async (req, resp) => {

        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.body._idParceiro, req.body.senha);
        if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
    
        let obj = {
            _id: sanitizeHtml(req.body._id),
            nome: sanitizeHtml(req.body.nome),
            icone: sanitizeHtml(req.body.icone)
        }
    
        let response = await dm.putOne("categorias", obj);
    
        if (response) 
            resp.sendStatus(200);
        else 
            resp.sendStatus(400);
    }

    static delete = async (req, resp) => {

        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
    
        let response = await dm.deleteOne("categorias", req.params);
    
        if (response) 
            resp.sendStatus(200);
        else 
            resp.sendStatus(400);
    }
}

module.exports = Categoria; 
const dm = require('./DirectMongo');
const sanitizeHtml = require('sanitize-html');

class Parceiro {

    static objParceiro = (context) => {

        let obj = { 
    
            _id: sanitizeHtml(context._id),
            nome: sanitizeHtml(context.nome),
            cnpj: sanitizeHtml(context.cnpj),
            email: sanitizeHtml(context.email),
            codigo: sanitizeHtml(context.codigo),
            senha: sanitizeHtml(context.senha),
            telefone: sanitizeHtml(context.telefone),
            cep: sanitizeHtml(context.cep), 
            estado: sanitizeHtml(context.estado),
            cidade: sanitizeHtml(context.cidade),
            endereco: sanitizeHtml(context.endereco),
            numeroEndereco: sanitizeHtml(context.numeroEndereco),
            usuarioSession: sanitizeHtml(context.usuarioSession),
            situacao: sanitizeHtml(context.situacao),
            admin: parseInt(context.admin)
        };
    
        return obj;
    }

    static valida = async (_idParceiro, senha) => {

        if (typeof _idParceiro === "undefined") return false;

        let obj = { 
            id: _idParceiro,
            senha: senha
        }

        const result = await dm.getOne("parceiros", obj);
    
        if (result) return true;
        return false;
    }

    static validaAdmin = async (_idParceiro, senha) => {

        if (typeof _idParceiro === "undefined") return false;

        let obj = { 
            id: _idParceiro,
            senha: senha
        }

        const result = await dm.getOne("parceiros", obj);
    
        if(result && result.admin === 1) return true;
        return false;
    }

    static validaForm = (obj, repetirSenha) => {

        if (
            typeof obj == "undefined" ||
            obj == null ||
    
            typeof obj.nome == "undefined" ||
            obj.nome == null ||
    
            typeof obj.senha == "undefined" ||
            obj.senha == null ||
    
            typeof repetirSenha == "undefined" ||
            repetirSenha == null ||
    
            typeof obj.cnpj == "undefined" ||
            obj.cnpj == null ||
    
            typeof obj.email == "undefined" ||
            obj.email == null ||
    
            typeof obj.codigo == "undefined" ||
            obj.codigo == null ||
    
            typeof obj.telefone == "undefined" ||
            obj.telefone == null ||
    
            typeof obj.cep == "undefined" ||
            obj.cep == null ||
    
            typeof obj.estado == "undefined" ||
            obj.estado == null ||
    
            typeof obj.cidade == "undefined" ||
            obj.cidade == null ||
    
            typeof obj.endereco == "undefined" ||
            obj.endereco == null ||
    
            typeof obj.numeroEndereco == "undefined" ||
            obj.numeroEndereco == null ||
    
            typeof obj.situacao == "undefined" ||
            obj.situacao == null ||
    
            typeof obj.admin == "undefined" ||
            obj.admin == null
    
        ) {
            return false;
        }
    
        if (obj.senha != repetirSenha) {console.log("senha não corresponde a repetir senha"); return false;}
    
        if (obj.nome.length > 50) {console.log("nome muito grande"); return false;}
        if (obj.cnpj.length > 18) {console.log("cnpj muito grande"); return false;}
        if (obj.email.length > 50 || !obj.email.includes("@")) {console.log("email invalido"); return false;}
        if (obj.codigo.length > 50) {console.log("codigo muito grande"); return false;}
        if (obj.senha.length > 100) {console.log("senha muito grande"); return false;}
        if (obj.telefone.length > 15) {console.log("telefone muito grande"); return false;}
        if (obj.cep.length > 9) {console.log("cep invalido"); return false;}
        if (obj.estado == "" || obj.estado == null) {console.log("estado invalido"); return false;}
        if (obj.cidade == "" || obj.cidade == null) {console.log("cidade invalida"); return false;}
        if (obj.estado.length > 50) {console.log("estado invalido"); return false;}
        if (obj.cidade.length > 50) {console.log("cidade invalida"); return false;}
        if (obj.endereco.length > 100) {console.log("endereco muito grande"); return false;}
        if (obj.numeroEndereco.length > 10) {console.log("numero muito grande"); return false;}
        if (
            obj.situacao.length > 10 || 
            !obj.situacao.includes("Ativo") &&
            !obj.situacao.includes("Inativo")) {console.log("situacao invalida"); return false;}
        if (obj.admin.length > 5 ||
            obj.admin != 0 &&
            obj.admin != 1) {console.log("numero invalido"); return false;}
    
        return true;
    }

    static getPagination = async (req, resp) => {

        const resultValidaAdmin = await this.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}
    
        req.params._idParceiro = "";
    
        let response = await dm.getManyPagination("parceiros", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static get = async (req, resp) => {

        const resultValidaAdmin = await this.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}
    
        req.params._idParceiro = "";
        req.params.nome = req.params.pesquisaString;
    
        let response = await dm.getMany("parceiros", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static getOne = async (req, resp) => {

        let response = await dm.getOne("parceiros", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static post = async (req, resp) => {

        const resultValidaParceiroAdmin = await this.validaAdmin(req.body._idSession, req.body.senhaAdm);
        if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
    
        let obj = this.objParceiro(req.body);
    
        if(!this.validaForm(obj, req.body.repetirSenha)) {resp.sendStatus(400); return;}
    
        let response = await dm.postOne("parceiros", obj);
    
        if (response) 
            resp.sendStatus(200);
        else 
            resp.sendStatus(400);
    }

    static put = async (req, resp) => {

        const resultValidaParceiro = await this.valida(req.body._idSession, req.body.senhaAdm);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}
    
        const resultValidaParceiroAdmin = await this.validaAdmin(req.body._idSession, req.body.senhaAdm);
    
        let obj = this.objParceiro(req.body);
    
        if(!this.validaForm(obj, req.body.repetirSenha)){resp.sendStatus(400); return;}
    
        if(!resultValidaParceiroAdmin) {
    
            delete obj.situacao;
            delete obj.admin;
        }
    
        let response = await dm.putOne("parceiros", obj);
    
        if (response) 
            resp.sendStatus(200);
        else 
            resp.sendStatus(400);
    }

    static delete = async (req, resp) => {

        const resultValidaParceiroAdmin = await this.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
    
        let response = await dm.deleteOne("parceiros", req.params);
    
        if (response) 
            resp.sendStatus(200);
        else 
            resp.sendStatus(400);
    }

    static getContador = async (req, resp) => {


        const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaAdmin) {res.sendStatus(400); console.log("não é admin!"); return;}
    
        req.params._idParceiro = "";
        //req.params.nome = req.params.pesquisaString;
    
        //let response = await dm.getMany("usuarios", req.params);

        let response = await dm.count("parceiros");

        response = {contador: response}
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }
}

module.exports = Parceiro;
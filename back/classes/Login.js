const CryptoJS = require("crypto-js");
const keyAutoLoginTrue = "autoLoginTrueFrankZappaSoftMachineYesRush";
const keyAutoLoginFalse = "autoLoginFalseGentleGiantBBKing";
const dm = require('./DirectMongo');
const Usuario = require('./Usuario');
const Parceiro = require('./Parceiro');
const sanitizeHtml = require('sanitize-html');

class Login {

    static post = async (req, resp, collection) => {

        let key = "";
        let bytes = null;
        let usuario = "";
        let senha = "";
        
        key = keyAutoLoginFalse;
        if (req.body.autoLogin) key = keyAutoLoginTrue;
    
        try {
    
            bytes = CryptoJS.AES.decrypt(req.body.usuario, key);
            usuario = bytes.toString(CryptoJS.enc.Utf8);
            usuario = sanitizeHtml(usuario);
    
            bytes = CryptoJS.AES.decrypt(req.body.senha, key);
            senha = bytes.toString(CryptoJS.enc.Utf8);
            senha = sanitizeHtml(senha);

            let objLogin = {
                senha: senha,
                manterSenha: true
            };

            if (collection === "usuarios") objLogin.email = usuario;
            else if (collection === "parceiros") objLogin.codigo = usuario;

            const res = await dm.getOne(collection, objLogin);
        
            if (!res) { resp.sendStatus(400); return; }

            let obj = {};
        
            if (collection === "usuarios") obj = Usuario.objUsuario(res);
            else if (collection === "parceiros") obj = Parceiro.objParceiro(res);

            if (obj.situacao == "Inativo") { resp.sendStatus(401); return; }
        
            //console.log("Parceiro Logado " + obj.nome);
        
            obj.emailCrypto = CryptoJS.AES.encrypt(obj.email, keyAutoLoginTrue).toString();
            obj.senhaCrypto = CryptoJS.AES.encrypt(obj.senha, keyAutoLoginTrue).toString();
            if (collection === "parceiros") obj.codigoCrypto = CryptoJS.AES.encrypt(obj.codigo, keyAutoLoginTrue).toString();
            else obj.codigoCrypto = "undefined";
            
            obj.email = CryptoJS.AES.encrypt(obj.email, keyAutoLoginFalse).toString();
            obj.senha = CryptoJS.AES.encrypt(obj.senha, keyAutoLoginFalse).toString();
            //if (collection === "parceiros") 
            obj.codigo = CryptoJS.AES.encrypt(obj.codigo, keyAutoLoginFalse).toString();
        
            resp.status(200).send(obj);
    
        } catch  (e) {
    
            //console.log(e);
            resp.sendStatus(400);
            return;
    
        }
    }
}

module.exports = Login;
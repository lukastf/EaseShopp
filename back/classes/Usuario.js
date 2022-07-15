
const dm = require('./DirectMongo');
const Parceiro = require('./Parceiro');
const Client = require('ftp');
const fs = require('fs');
const masks = require('./masks');
const sanitizeHtml = require('sanitize-html');
const sendEmail = require('./sendEmail');
const sendEmailBemVindo = require('./sendEmailBemVindo');
const formatarData = require('./formatarData');

class Usuario {

    static objUsuario = (context) => {

        let obj = {
      
            _id: sanitizeHtml(context._id),
            nome: sanitizeHtml(context.nome),
            cpf: sanitizeHtml(context.cpf),
            rg: sanitizeHtml(context.rg),
            email: sanitizeHtml(context.email),
            senha: sanitizeHtml(context.senha),
            celular: sanitizeHtml(context.celular), 
            whatsapp: sanitizeHtml(context.whatsapp),
            dataNasc: sanitizeHtml(context.dataNasc),
            cep: sanitizeHtml(context.cep),
            estado: sanitizeHtml(context.estado),
            cidade: sanitizeHtml(context.cidade),
            endereco: sanitizeHtml(context.endereco),
            numeroEndereco: parseInt(context.numeroEndereco),
            receberStatusWhats: context.receberStatusWhats,

            favoritos: context.favoritos,
            carrinho: context.carrinho,
    
            carrinhoSession: sanitizeHtml(context.carrinhoSession),
            usuarioSession: sanitizeHtml(context.usuarioSession),
      
            // pre cadastro org
      
            idOrg: sanitizeHtml(context.idOrg),
            dataInclusao: sanitizeHtml(context.dataInclusao),
            situacao: sanitizeHtml(context.situacao),
            redeCredenciada: sanitizeHtml(context.redeCredenciada)
        };

        //console.log(obj);

        if (typeof obj.favoritos != "undefined" && obj.favoritos.length > 0) {

            for (let i = 0; i < obj.favoritos.length; i++) {

                obj.favoritos[i] = sanitizeHtml(obj.favoritos[i]);
            }
        }

        if (typeof obj.carrinho != "undefined" && obj.carrinho.length > 0) {

            for (let i = 0; i < obj.carrinho.length; i++) {

                obj.carrinho[i]._id = sanitizeHtml(obj.carrinho[i]._id);
                obj.carrinho[i].quantidade = sanitizeHtml(obj.carrinho[i].quantidade);
                obj.carrinho[i].quantidade = parseInt(obj.carrinho[i].quantidade);

                if (typeof obj.carrinho[i].opcoesUsuario != "undefined") {

                    obj.carrinho[i].opcoesUsuario.retirada = sanitizeHtml(obj.carrinho[i].opcoesUsuario.retirada);
                    obj.carrinho[i].opcoesUsuario.retirada = (obj.carrinho[i].opcoesUsuario.retirada == 'true');
    
                    obj.carrinho[i].opcoesUsuario.entrega = sanitizeHtml(obj.carrinho[i].opcoesUsuario.entrega);
                    obj.carrinho[i].opcoesUsuario.entrega = (obj.carrinho[i].opcoesUsuario.entrega == 'true');
                }
            }
        }
    
        return obj;
    }

    static objUsuarioPreCadastrado = (context) => {

        let dataNasc = context.DATA_NASCIMENTO.split(" ");
                
        dataNasc = dataNasc[0];
    
        let obj = {
    
            idOrg: context.ID_AC_USUARIO,
            dataInclusao: context.DATA_INCLUSAO,
            situacao: context.SITUACAO,
            nome: context.NOME,
            cpf: masks.cpfMask(context.CPF),
            rg: masks.rgMask(context.RG),
            celular: masks.celularMask(context.CELULAR),
            email: context.EMAIL,
            dataNasc: masks.dataNascMask(dataNasc),
            redeCredenciada: context.REDE_CREDENCIADA,
    
            cep: masks.cepMask(context.ENDERECO_COMPLETO.CEP),
            numeroEndereco: context.ENDERECO_COMPLETO.NUMERO,

            senhaCartao: context.SENHA
        }
    
        return obj;
    
    }

    static valida = async (_idUsuario, senha) => {

        if (typeof _idUsuario === "undefined") return false;

        let obj = { 
            id: _idUsuario,
            senha: senha
        }

        const result = await dm.getOne("usuarios", obj);
    
        if (result) return true;
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
    
            typeof obj.cpf == "undefined" ||
            obj.cpf == null ||
    
            typeof obj.rg == "undefined" ||
            obj.rg == null ||
    
            typeof obj.email == "undefined" ||
            obj.email == null ||
    
            typeof obj.celular == "undefined" ||
            obj.celular == null ||
    
            typeof obj.whatsapp == "undefined" ||
            obj.whatsapp == null ||
    
            typeof obj.dataNasc == "undefined" ||
            obj.dataNasc == null ||
    
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
    
            typeof obj.favoritos == "undefined" ||
            obj.favoritos == null ||
    
            typeof obj.carrinho == "undefined" ||
            obj.carrinho == null ||
    
            typeof obj.carrinhoSession == "undefined" ||
            obj.carrinhoSession == null ||
    
            typeof obj.usuarioSession == "undefined" ||
            obj.usuarioSession == null ||
    
            typeof obj.idOrg == "undefined" ||
            obj.idOrg == null ||
    
            typeof obj.dataInclusao == "undefined" ||
            obj.dataInclusao == null ||
    
            typeof obj.situacao == "undefined" ||
            obj.situacao == null ||
    
            typeof obj.redeCredenciada == "undefined" ||
            obj.redeCredenciada == null 
    
        ) {
            return false;
        }
    
        if (obj.senha != repetirSenha) {console.log("senha não corresponde a repetir senha"); return false;}
    
        if (obj.nome.length > 50) {console.log("nome muito grande"); return false;}
        if (obj.cpf.length > 14) {console.log("cpf muito grande"); return false;}
        if (obj.rg.length > 20) {console.log("rg muito grande"); return false;}
        if (obj.email.length > 50 || !obj.email.includes("@")) {console.log("email invalido"); return false;}
        if (obj.senha.length > 100) {console.log("senha muito grande"); return false;}
        if (obj.senha.length < 4) {console.log("senha muito pequena"); return false;}
        if (obj.celular.length > 15) {console.log("celular muito grande"); return false;}
        if (obj.whatsapp.length > 15) {console.log("celular muito grande"); return false;}
        if (obj.dataNasc.length > 10) {console.log("data de nascimento muito grande"); return false;}
        if (obj.cep.length > 9) {console.log("cep invalido"); return false;}
        if (obj.estado == "" || obj.estado == null || obj.estado.length > 50) {console.log("estado invalido"); return false;}
        if (obj.cidade == "" || obj.cidade == null || obj.cidade.length > 50) {console.log("cidade invalida"); return false;}
        if (obj.endereco.length > 100) {console.log("endereco muito grande"); return false;}
        if (obj.numeroEndereco.length > 10) {console.log("numero endereco muito grande"); return false;}
    
        if (obj.favoritos.length > 20) {console.log("favoritos muito grande"); return false;}
        if (obj.carrinho.length > 20) {console.log("favoritos muito grande"); return false;}
    
        if (obj.carrinhoSession.length > 13) {console.log("sessao carrinho muito grande"); return false;}
        if (obj.usuarioSession.length > 13) {console.log("sessao carrinho muito grande"); return false;}
    
        if (obj.idOrg.length > 50) {console.log("id org muito grande"); return false;}
        if (obj.dataInclusao.length > 20) {console.log("data inclusao muito grande"); return false;}
        if (
            obj.situacao.length > 10 || 
            !obj.situacao.includes("Ativo") &&
            !obj.situacao.includes("Inativo")) {console.log("situacao invalida"); return false;}
        if (obj.redeCredenciada.length > 50) {console.log("rede credenciada invaldia"); return false;}
    
        return true;
    }

    static validaPreCadastradoForm = async (obj) => {

        if (
            typeof obj == "undefined" ||
            obj == null ||
    
            typeof obj.idOrg == "undefined" ||
            obj.idOrg == null ||
            obj.idOrg == "" ||
    
            typeof obj.dataInclusao == "undefined" ||
            obj.dataInclusao == null ||
            obj.dataInclusao == "" ||
    
            typeof obj.situacao == "undefined" ||
            obj.situacao == null ||
            obj.situacao == "" ||
    
            typeof obj.nome == "undefined" ||
            obj.nome == null ||
            obj.nome == "" ||
            
            typeof obj.cpf == "undefined" ||
            obj.cpf == null ||
            obj.cpf == "" ||
            
            typeof obj.rg == "undefined" ||
            obj.rg == null ||
            //obj.rg == "" ||
    
            typeof obj.celular == "undefined" ||
            obj.celular == null ||
    
            typeof obj.email == "undefined" ||
            obj.email == null ||
    
            typeof obj.dataNasc == "undefined" ||
            obj.dataNasc == null ||
            //obj.dataNasc == "" ||
    
            typeof obj.redeCredenciada == "undefined" ||
            obj.redeCredenciada == null ||
            obj.redeCredenciada == ""
        ) {
            return false;
        }
    
        if (obj.idOrg.length > 50) {console.log("id muito grande"); return false;}
        if (obj.dataInclusao.length > 16) {console.log("data inclusao muito grande"); return false;}
        if (obj.situacao.length > 10) {console.log("situacao grande"); return false;}
        if (obj.nome.length > 50) {console.log("nome muito grande"); return false;}
        if (obj.cpf.length > 20) {console.log("cpf errado"); return false;}
        if (obj.rg.length > 20) {console.log("rg muito grande"); return false;}
        if (obj.dataNasc.length != 10) {console.log("data de nascimento errada"); return false;}
        if (obj.redeCredenciada.length > 50) {console.log("rede credenciada muito grande"); return false;}
    
        return true;
    }

    static codAleatorio = async (email) => {

        let codAleatorio = [];

        for (let i = 0; i < 7; i++) {
            
            codAleatorio[i] = Math.floor(Math.random() * 9) + 1;
        }

        let codAleatorioStr = "";

        for (let i = 0; i < codAleatorio.length; i++) {

            codAleatorioStr += codAleatorio[i];
        }

        let verificarCod = await dm.getOne("codigosVerificacao", codAleatorioStr);
        let verificarEmail = await dm.getOne("codigosVerificacao", email);

        if (verificarCod || verificarEmail) return this.codAleatorio;
        else return codAleatorioStr;
    }

    static getPagination = async (req, resp) => {

        const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaAdmin) {resp.sendStatus(400); console.log("não é admin!"); return;}
    
        req.params._idParceiro = "";
        req.params.nome = req.params.pesquisaString;
    
        let response = await dm.getManyPagination("usuarios", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static get = async (req, resp) => {


        const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaAdmin) {res.sendStatus(400); console.log("não é admin!"); return;}
    
        req.params._idParceiro = "";
        req.params.nome = req.params.pesquisaString;
    
        let response = await dm.getMany("usuarios", req.params);

        for (let i = 0; i < response.length; i++) {

            if (response[i].receberStatusWhats) response[i].receberStatusWhats = "Sim";
            else response[i].receberStatusWhats = "Não";
        }
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static getCarrinho = async (req, resp) => {

        const validaUser = await this.valida(req.params.id, req.params.senha);
        if(!validaUser) {resp.sendStatus(400); console.log("não é user!"); return;}
    
        //req.params._idParceiro = "";
        //req.params.nome = req.params.pesquisaString;
    
        let response = await dm.getOne("usuarios", req.params);
    
        response = response.carrinho;
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static getSaque = async (req, resp) => {

        const validaUser = await this.valida(req.params.id, req.params.senha);
        if(!validaUser) {resp.sendStatus(400); console.log("não é user!"); return;}
    
        //req.params._idParceiro = "";
        //req.params.nome = req.params.pesquisaString;

        //console.log("jaba");
        //console.log(req.params);

        let obj = { _idUsuario:req.params.id }
    
        let response = await dm.getOne("saques", obj);
    
        //response = response.carrinho;
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static postCheck = async (req, resp) => {

        let objCheck = { 
            cpf: sanitizeHtml(req.body.cpf), 
            rg: sanitizeHtml(req.body.rg),
            dataNasc: sanitizeHtml(req.body.dataNasc)
        };
    
        if (objCheck.cpf == '' && objCheck.rg == '') resp.sendStatus(400);
        if (objCheck.cpf == '') delete objCheck.cpf;
        if (objCheck.rg == '') delete objCheck.rg;
    
        let res1 = await dm.getOne("usuarios", objCheck);
        let res2 = await dm.getOne("usuariosPreCadastrados", objCheck);
    
        if (res1) {
    
            resp.sendStatus(401);
            return;
        }
    
        if (!res2) {
    
            resp.sendStatus(400);
            return;
        }
    
        let objRes = this.objUsuario(res2);
        console.log("Usuario Checado " + objRes.nome);
        resp.status(200).send(objRes);
    }

    static post = async (req, resp) => {

        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.body._idSession, req.body.senhaAdm);
      
        let obj = this.objUsuario(req.body);
      
        if(!resultValidaParceiroAdmin) {
      
          obj.situacao = "Inativo";
        }
      
        if(!this.validaForm(obj, req.body.repetirSenha)) {resp.sendStatus(400); return;}
      
        let response = await dm.postOne("usuarios", obj);

        let codAleatorio = await this.codAleatorio(obj.email);

        let codigoVerificacao = {
            email: obj.email,
            codigo: codAleatorio,
            verificado: false,
            vezesIndicado: 0
        }

        await dm.postOne("codigosVerificacao", codigoVerificacao);

        let link = "https://easeshopp.com.br/validarEmail/" + obj.email +"/"+ codAleatorio;

        let usuariosPreCadastrado = await dm.getOne("usuariosPreCadastrados", {cpf: obj.cpf});
        
        if (usuariosPreCadastrado == null) {

            usuariosPreCadastrado = {
                senhaCartao: "desculpe nenhuma senha encontrada entre em contato com o suporte"
            }

        } else {

            usuariosPreCadastrado.senhaCartao = usuariosPreCadastrado.senhaCartao.substr(0, 6);

        }
       // usuariosPreCadastrado.senhaCartao = "000"

        /*sendEmail(obj.email, 'Easeshopp - Validar Email',
        'Sua senha do aplicativo é '+ usuariosPreCadastrado.senhaCartao +' Clique no link para validar o cadastro '+ link + ' seu codigo de indicação é ' + codAleatorio + 
        ' passe para seus amigos quando eles forem se cadastrar, para você ganhar vantagens na loja');*/

        let dadosCliente = {

            nome: obj.nome,
            email: obj.email,
            senha: obj.senha,
            senhaCartao: usuariosPreCadastrado.senhaCartao,
            link: link,
            codAleatorio: codAleatorio
        }

        sendEmailBemVindo(obj.email, 'Easeshopp - Validar Email', dadosCliente);

        let codigoIndicacao = await dm.getOne("codigosVerificacao", {codigo: req.body.codigoIndicacao});
        if (codigoIndicacao) {

            codigoIndicacao.vezesIndicado += 1;

            if (
                isNaN(codigoIndicacao.vezesIndicado) || 
                typeof codigoIndicacao.vezesIndicado == "undefined" ||
                codigoIndicacao.vezesIndicado == null
            ) 
            codigoIndicacao.vezesIndicado = 1;

            await dm.putOne("codigosVerificacao", codigoIndicacao);

            await dm.postOne("indicacoes", {

                codigoIndicado: req.body.codigoIndicacao,
                codigoGerado: codAleatorio,
                emailIndicado: codigoIndicacao.email,
                emailCriado: obj.email,
                data: formatarData()
            });
        }
      
        if (response) 
          resp.sendStatus(200);
        else 
          resp.sendStatus(400);
    }

    static postMulti = async (req, res) => {

        if (typeof req.body._idParceiro == "undefined") {
            console.log("id invalido");
            return res.sendStatus(400);
        }
          
        const resultValidaAdmin = await Parceiro.validaAdmin(req.body._idParceiro, req.body.senha);
        if(!resultValidaAdmin) {res.sendStatus(400); console.log("não é admin!"); return;}
          
        if ((!req.files || Object.keys(req.files).length === 0) && typeof req.body.multiUsuarios == "undefined") {
          
            console.log("No files were uploaded");
            return res.sendStatus(400);
        }
      
        await dm.postMulti(
            res,
            "usuariosPreCadastrados",
            req.files.multiUsuarios,
            this.validaPreCadastradoForm,
            this.objUsuarioPreCadastrado
        );
    }

    static postMulti2 = async (req, res) => {

        if (typeof req.body._idParceiro == "undefined") {
            console.log("id invalido");
            return res.sendStatus(400);
        }
          
        const resultValidaAdmin = await Parceiro.validaAdmin(req.body._idParceiro, req.body.senha);
        if(!resultValidaAdmin) {res.sendStatus(400); console.log("não é admin!"); return;}

        await dm.postMulti2(this.objUsuarioPreCadastrado, this.validaPreCadastradoForm);
        res.sendStatus(200);
          
        /*if ((!req.files || Object.keys(req.files).length === 0) && typeof req.body.multiUsuarios == "undefined") {
          
            console.log("No files were uploaded");
            return res.sendStatus(400);
        }*/

        /*let file = fs.readFileSync('../back/usuarios/Arquivododia22042021_0000000005.json');
      
        await dm.postMulti(
            res,
            "usuariosPreCadastrados",
            file,
            this.validaPreCadastradoForm,
            this.objUsuarioPreCadastrado
        );*/

        //var fs = require('fs');

        //function readFiles("../back/usuarios/", onFileContent, onError) {
        
        
        //}
    }

    static put = async (req, resp) => {

        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.body._idSession, req.body.senhaAdm);
        if (!resultValidaParceiroAdmin) {

            const validaUser = await this.valida(req.params.id, req.body.senhaAdm);
            if(!validaUser) {resp.sendStatus(400); console.log("não é user!"); return;}
        }
      
        let obj = this.objUsuario(req.body);
        if(!this.validaForm(obj, req.body.repetirSenha)) {resp.sendStatus(400); return;}

        if (!resultValidaParceiroAdmin) {

            delete obj.idOrg;
            delete obj.dataInclusao;
            delete obj.situacao;
            delete obj.redeCredenciada;
        }
      
        let response = await dm.putOne("usuarios", obj);
      
        if (response) 
          resp.sendStatus(200);
        else 
          resp.sendStatus(400);
    }

    static delete = async (req, resp) => {

        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaParceiroAdmin) {resp.sendStatus(400); return;}
    
        let response = await dm.deleteOne("usuarios", req.params);
    
        if (response) 
            resp.sendStatus(200);
        else 
            resp.sendStatus(400);
    }

    static postMultiAuto = () => {

        const f = () => {
    
            console.log("Hello");
      
            let c = new Client();
    
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1; //January is 0!
    
            let yyyy = today.getFullYear();
    
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
    
            today =  dd + mm + yyyy;
    
            c.on('ready', () => {

                c.get('/USUARIOS/Arquivodia'+ today +'.json', async (err, stream) => {
                    //if (err) throw err;
                    if(err) console.log(err);
                    stream.once('close', () => { c.end(); });
                    stream.pipe(fs.createWriteStream('./public/tmp/ArquivoDia.json'));

                    stream.on('end',  async () => {

                        try {

                            fs.readFile('./public/tmp/ArquivoDia.json', async (err, data) => {
                                //if (err) throw err;

                                let objs = JSON.parse(data);
                
                                for (let i = 0; i < objs.length; i++) {
                
                                    let objValido = true;
                                    let obj = this.objUsuarioPreCadastrado(objs[i]);
                                    //delete obj._id;
                
                                    if(!await this.validaPreCadastradoForm(obj)) objValido = false;

                                    let check = dm.getOne("usuariosPreCadastrados", obj);
                                    let check2 = dm.getOne("usuariosPreCadastrados", {cpf: obj.cpf});
                                    let check3 = dm.getOne("usuariosPreCadastrados", {rg: obj.rg});
                                    
                                    //let check = await dbo.collection("usuariosPreCadastrados").findOne(obj);
                                    //let check2 = await dbo.collection("usuariosPreCadastrados").findOne({cpf: obj.cpf});
                                    //let check3 = await dbo.collection("usuariosPreCadastrados").findOne({rg: obj.rg});
                                    //let check4 = await dbo.collection("usuariosPreCadastrados").findOne({cpf: obj.dataNasc});

                                    if (check || check2 || check3) objValido = false;
                                    if (objValido) dm.postOne("usuariosPreCadastrados", obj);
                                    
                                    //await dbo.collection("usuariosPreCadastrados").insertOne(obj);
                                }

                                /*fs.access(file, fs.F_OK, (err) => {
                                    if (err) {
                                        console.error(err);
                                        return;
                                    }
                        
                                    //remove
                                    fs.unlink(file, (err) => {
                                        //if (err) throw err;
                                    });
                                });*/
                            });

                        } catch(e) {
                            console.log(e);
                        }
                    });
                });
            });
    
            c.connect({host: "177.70.106.26", user: "sindplus", password: ""});
        }

        setInterval(f, 60000 * 60 * 6);
    }

    static validarEmail = async (req, resp) => {

        console.log(req.body);

        let check = await dm.getOne("codigosVerificacao", req.body);

        if (!check) {resp.sendStatus(400); return;}

        check.verificado = true;

        await dm.putOne("codigosVerificacao", check);

        let usuario = await dm.getOne("usuarios", {email: check.email});

        usuario.situacao = "Ativo";
        await dm.putOne("usuarios", usuario);


        resp.sendStatus(200);
    }

    static getContador = async (req, resp) => {


        const resultValidaAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaAdmin) {res.sendStatus(400); console.log("não é admin!"); return;}
    
        req.params._idParceiro = "";
        //req.params.nome = req.params.pesquisaString;
    
        //let response = await dm.getMany("usuarios", req.params);

        let response = await dm.count("usuarios");

        response = {contador: response}
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }
}

module.exports = Usuario;
const dm = require('./DirectMongo');
const Parceiro = require('./Parceiro');
const Usuario = require('./Usuario');
const Categoria = require('./Categoria');
const ProdutoImagem = require('./ProdutoImagem');
const sanitizeHtml = require('sanitize-html');

class Produto {

    static converter = (v) =>{
        v = String(v);
        if (v.includes("R$")) v = v.replace("R$", "");
        if (v.includes(",")) v = v.replace(",", ".");
        v = parseFloat(v);
        return v;
    }

    static objProduto = (context) => {

        let obj = {
    
            _id: sanitizeHtml(context._id),
            nome: sanitizeHtml(context.nome),
            marca: sanitizeHtml(context.marca),
            valor: sanitizeHtml(context.valor),
            quantidade: parseInt(context.quantidade),
            descricao: sanitizeHtml(context.descricao),
            imagens: context.imagens,
            categoria: sanitizeHtml(context.categoria),
            cor: sanitizeHtml(context.cor),
            tipoTamanho: sanitizeHtml(context.tipoTamanho),
            comprimento: this.converter(context.comprimento),
            largura: this.converter(context.largura),
            altura: this.converter(context.altura),
            peso: this.converter(context.peso),
            diametro: this.converter(context.diametro),
            formato: parseInt(context.formato),
            numero: parseInt(context.numero),
            letra: sanitizeHtml(context.letra),
            _idParceiro: sanitizeHtml(context._idParceiro),
            imagensLinkExterno : context.imagensLinkExterno,
            opcoes: context.opcoes,
            opcoesMedida: sanitizeHtml(context.opcoesMedida),
            voltagem: context.voltagem,
            tamanhoRoupas: context.tamanhoRoupas,
            tamanhoCalcados: context.tamanhoCalcados,
        };

        if (obj.imagens.length > 0) {

            for (let i = 0; i < obj.imagens.length; i++) {
                obj.imagens[i] = sanitizeHtml(obj.imagens[i]);
            }
        }

        if (obj.imagensLinkExterno.length > 0) {

            for (let i = 0; i < obj.imagensLinkExterno.length; i++) {
                obj.imagensLinkExterno[i] = sanitizeHtml(obj.imagensLinkExterno[i]);
                obj.imagensLinkExterno[i] = (obj.imagensLinkExterno[i] == 'true');
            }
        }

        obj.opcoes.retirada = sanitizeHtml(obj.opcoes.retirada);
        obj.opcoes.retirada = (obj.opcoes.retirada == 'true');

        obj.opcoes.entrega = sanitizeHtml(obj.opcoes.entrega);
        obj.opcoes.entrega = (obj.opcoes.entrega == 'true');

        if (!obj.valor.includes("R$")) obj.valor = "R$"+obj.valor;

        //obj.valorNum = obj.valor.split("R$")[1].split(",");
        //obj.valorNum = obj.valorNum[0] + "." + obj.valorNum[1];
        //obj.valorNum = parseFloat(obj.valorNum);

        obj.valorNum = this.converter(obj.valor);
        /*obj.comprimento = this.converter(obj.comprimento);
        obj.largura = this.converter(obj.largura);
        obj.altura = this.converter(obj.altura);
        obj.peso = this.converter(obj.peso);
        obj.diametro = this.converter(obj.diametro);*/

        //console.log(obj);
    
        return obj;
    }

    static valida = async (_idProduto, _idParceiro) => {

        if (typeof _idProduto === "undefined") return false;
        if (typeof _idParceiro === "undefined") return false;

        let obj = { 
            id: _idProduto,
            _idParceiro: _idParceiro
        }

        const result = await dm.getOne("produtos", obj);
    
        if (result) return true;
        return false;
    }

    static checkArrLeng = (array, maxLength) => {

        if (array.length < 1) return false;

        for (let i = 0; i < array.length; i++) {

            if (typeof array[i] == "number") 
                if(array[i] > maxLength || array[i] < 14)
                    return true;

            if (typeof array[i] == "string") 
                if (array[i].length > maxLength) 
                    return true;
            
            if (typeof array[i] != "number" && typeof array[i] != "string") 
                return true
        }

        return false;
    }

    static validaForm = async (obj) => {

        const getCategorias = async () => {
            
            let categorias = await Categoria.getArray();
            let categoriaValida = false;
    
            for (let i = 0; i < categorias.length; i++) {
                
                if (obj.categoria.includes(categorias[i].nome)) {
                    categoriaValida = true;
                }
            }
    
            return !categoriaValida;
        }
    
        if (
            typeof obj == "undefined" ||
            obj == null ||
    
            typeof obj.nome == "undefined" ||
            obj.nome == null ||

            typeof obj.marca == "undefined" ||
            obj.marca == null ||
    
            typeof obj.valor == "undefined" ||
            obj.valor == null ||

            typeof obj.quantidade == "undefined" ||
            obj.quantidade == null ||
    
            typeof obj.descricao == "undefined" ||
            obj.descricao == null ||
    
            typeof obj.imagens == "undefined" ||
            obj.imagens == null ||
    
            typeof obj.categoria == "undefined" ||
            obj.categoria == null ||

            typeof obj.cor == "undefined" ||
            obj.cor == null ||

            typeof obj.tipoTamanho == "undefined" ||
            obj.tipoTamanho == null ||

            typeof obj.comprimento == "undefined" ||
            obj.comprimento == null ||

            typeof obj.largura == "undefined" ||
            obj.largura == null ||

            typeof obj.altura == "undefined" ||
            obj.altura == null ||

            typeof obj.peso == "undefined" ||
            obj.peso == null ||

            typeof obj.diametro == "undefined" ||
            obj.diametro == null ||

            typeof obj.formato == "undefined" ||
            obj.formato == null ||

            typeof obj.opcoesMedida == "undefined" ||
            obj.opcoesMedida == null ||

            typeof obj.voltagem == "undefined" ||
            obj.voltagem == null ||

            typeof obj.tamanhoRoupas == "undefined" ||
            obj.tamanhoRoupas == null ||

            typeof obj.tamanhoCalcados == "undefined" ||
            obj.tamanhoCalcados == null ||

            typeof obj.opcoes == "undefined" ||
            obj.opcoes == null ||
            typeof obj.opcoes.retirada != "boolean" ||
            typeof obj.opcoes.entrega != "boolean"
        ) {
            return false;
        }
    
        if (obj.nome.length > 50 || obj.nome.length < 4) {console.log("invalido"); return false;}
        if (obj.marca.length > 50) {console.log("invalido"); return false;}
        if (!obj.valor.includes(",")) {console.log("valor sem ,"); return false;}
        if (obj.valor.length > 10) {console.log("valor muito grande"); return false;}
        if (obj.quantidade.length > 10) {console.log("quantidade muito grande"); return false;}
        if (obj.descricao.length > 10000) {console.log("descricao muito grande"); return false;}
        if (obj.imagens.length > 5) {console.log("muitas imagens"); return false;}
        if (
            (obj.imagens[0].length || 
            obj.imagens[1].length || 
            obj.imagens[2].length ||
            obj.imagens[3].length ||
            obj.imagens[4].length ) > 10000) {console.log("link da imagem muito longo"); return false;}
        if (await getCategorias()) 
        {console.log("categoria invalida"); return false;}
        if (obj.cor.length > 25) {console.log("cor muito grande"); return false;}
        if (
            !obj.tipoTamanho.includes("Centimetros") &&
            !obj.tipoTamanho.includes("Metros") 
        ) {console.log("tipo tamanho invalido"); return false;}
        if (obj.comprimento.length > 6) {console.log("comprimento muito grande"); return false;}
        if (obj.largura.length > 6) {console.log("largura muito grande"); return false;}
        if (obj.altura.length > 6) {console.log("altura muito grande"); return false;}
        if (obj.peso.length > 6) {console.log("peso muito grande"); return false;}
        if (obj.diametro.length > 6) {console.log("diametro muito grande"); return false;}
        if (obj.formato.length > 2) {console.log("formato muito grande"); return false;}
        if (
            obj.formato != 1 &&
            !obj.formato != 2 &&
            !obj.formato != 3
        ) {console.log("formato invalido"); return false;}
        if (obj.opcoesMedida.length > 20) {console.log("opcoes medida muito grande"); return false;}

        if (obj.voltagem.length > 4) {console.log("voltagem errada"); return false;}
        if (this.checkArrLeng(obj.voltagem, 25)) {console.log("voltagem errada"); return false;}

        if (obj.tamanhoRoupas.length > 10) {console.log("tamanho roupa errada"); return false;}
        if (this.checkArrLeng(obj.tamanhoRoupas, 3)) {console.log("tamanho roupa errada"); return false;}

        if (obj.tamanhoCalcados.length > 50) {console.log("tamanho calçados errada"); return false;}
        if (this.checkArrLeng(obj.tamanhoCalcados, 50)) {console.log("tamanho calçados errada"); return false;}

        if (obj.opcoes.retirada == false && obj.opcoes.entrega == false) { return false; }
    
        return true;
    }

    static getOne = async (req, resp) => {

        let response = await dm.getOne("produtos", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static getPagination = async (req, resp) => {

        req.params.nome = req.params.pesquisaString;
    
        let response = await dm.getManyPagination("produtos", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static get = async (req, resp) => {

        req.params.nome = req.params.pesquisaString;
      
        let response = await dm.getMany("produtos", req.params);
      
        if (response) 
          resp.status(200).send(response);
        else 
          resp.sendStatus(400);
    }

    static getParceiroVendasPagination = async (req, resp) => {

        const resultValidaParceiro = await Parceiro.valida(req.params._idParceiro, req.params.senha);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}

        req.params.nome = req.params.pesquisaString;
        let produtosCompradosPagination = await dm.getManyPagination("produtosComprados", req.params);
    
        if (produtosCompradosPagination) 
            resp.status(200).send(produtosCompradosPagination);
        else 
            resp.sendStatus(400);
        return;
    }

    static getParceiroVendas = async (req, resp) => {

        const resultValidaParceiro = await Parceiro.valida(req.params._idParceiro, req.params.senha);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}

        req.params.nome = req.params.pesquisaString;
      
        let produtosComprados = await dm.getMany("produtosComprados", req.params);
        let produtos = [];
      
        if(!produtosComprados) { resp.sendStatus(400); return;}
      
        for (let i = 0; i < produtosComprados.length; i++) {
      
          req.params.id = produtosComprados[i]._idProduto;
          let produto = await dm.getOne("produtos", req.params);
      
          if(produto) {
      
            produto._idProdutoComprado = produtosComprados[i]._id;
            produto.status = produtosComprados[i].status;
            produto.codigoRastreio = produtosComprados[i].codigoRastreio;
            produto.enderecoRetirada = produtosComprados[i].enderecoRetirada;

            produto.quantidadeVendida = produtosComprados[i].quantidade;
            produto.dia = produtosComprados[i].dia;
            produto.opcoesUsuario = produtosComprados[i].opcoesUsuario;
      
            produto.usuario = {
      
              nome: produtosComprados[i].usuario.nome,
              celular: produtosComprados[i].usuario.celular,
              whatsapp: produtosComprados[i].usuario.whatsapp,
              cep: produtosComprados[i].usuario.cep,
              estado: produtosComprados[i].usuario.estado,
              cidade: produtosComprados[i].usuario.cidade,
              endereco: produtosComprados[i].usuario.endereco,
              numeroEndereco: produtosComprados[i].usuario.numeroEndereco
            }
      
      
            produtos.push(produto);
          }
        }
      
        resp.status(200).send(produtos);
        //if (produtos) 
        //else 
          //resp.sendStatus(400);
    }

    static getUsuarioComprasPagination = async (req, resp) => {

        const resultValidaUsuario = await Usuario.valida(req.params._idUsuario, req.params.senha);
        if(!resultValidaUsuario) {resp.sendStatus(400); return;}

        req.params.nome = req.params.pesquisaString;
        req.params.removerStatusFinalizado = true;

        let produtosCompradosPagination = await dm.getManyPagination("produtosComprados", req.params);
    
        if (produtosCompradosPagination) 
            resp.status(200).send(produtosCompradosPagination);
        else 
            resp.sendStatus(400);
        return;
    }

    static getUsuarioCompras = async (req, resp) => {

        const resultValidaUsuario = await Usuario.valida(req.params._idUsuario, req.params.senha);
        if(!resultValidaUsuario) {resp.sendStatus(400); return;}

        req.params.nome = req.params.pesquisaString;
      
        let produtosComprados = await dm.getMany("produtosComprados", req.params);
        let produtos = [];
      
        if(!produtosComprados) { resp.sendStatus(400); return;}
      
        for (let i = 0; i < produtosComprados.length; i++) {

            if (produtosComprados[i].status === "Finalizado") continue;

            req.params.id = produtosComprados[i]._idProduto;
            let produto = await dm.getOne("produtos", req.params);
        
            if(produto) {
        
                produto._idProdutoComprado = produtosComprados[i]._id;
                produto.status = produtosComprados[i].status;
                produto.codigoRastreio = produtosComprados[i].codigoRastreio;
                produto.enderecoRetirada = produtosComprados[i].enderecoRetirada;

                produto.quantidadeVendida = produtosComprados[i].quantidade;
                produto.dia = produtosComprados[i].dia;
                produto.opcoesUsuario = produtosComprados[i].opcoesUsuario;
            
                produtos.push(produto);
            }
        }
      
        resp.status(200).send(produtos);
        //if (produtos) 
        //else 
          //resp.sendStatus(400);
    }

    static getExtratoPagination = async (req, resp) => {

        const resultValida = await Usuario.valida(req.params._idUsuario, req.params.senha);
        if(!resultValida) {resp.sendStatus(400); return;}

        let response = await dm.getManyPagination("produtosComprados", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static getExtrato = async (req, resp) => {

        const resultValida = await Usuario.valida(req.params._idUsuario, req.params.senha);
        if(!resultValida) {resp.sendStatus(400); return;}

        let response = await dm.getMany("produtosComprados", req.params);
      
        if (response) 
          resp.status(200).send(response);
        else 
          resp.sendStatus(400);
    }

    static getExtratoSaquesPagination = async (req, resp) => {

        const resultValida = await Usuario.valida(req.params._idUsuario, req.params.senha);
        if(!resultValida) {resp.sendStatus(400); return;}

        let response = await dm.getManyPagination("saques", req.params);
    
        if (response) 
            resp.status(200).send(response);
        else 
            resp.sendStatus(400);
    }

    static getExtratoSaques = async (req, resp) => {

        const resultValida = await Usuario.valida(req.params._idUsuario, req.params.senha);
        if(!resultValida) {resp.sendStatus(400); return;}

        let response = await dm.getMany("saques", req.params);
      
        if (response) 
          resp.status(200).send(response);
        else 
          resp.sendStatus(400);
    }

    static post = async (req, resp) => {

        const resultValidaParceiro = await Parceiro.valida(req.body._idParceiro, req.body.senha);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}
    
        let obj = this.objProduto(req.body);
    
        if(!await this.validaForm(obj)) {resp.sendStatus(400); return;}
    
        let response = await dm.postOne("produtos", obj);
    
        if (response) 
            resp.sendStatus(200);
        else 
            resp.sendStatus(400);
    }

    static putStatus = async (req, resp) => {

        const resultValidaParceiro = await Parceiro.valida(req.params._idParceiro, req.body.senha);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}

        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.body.senha);
        if(!resultValidaParceiroAdmin) {
      
          const resultValidaProduto = await this.valida(req.params.id, req.params._idParceiro);
          if(!resultValidaProduto) {resp.sendStatus(400); return;}
        }

        if (
            !req.body.status.includes("Aguardando Confirmação") &&
            !req.body.status.includes("Confirmado") &&
            !req.body.status.includes("Enviado") &&
            !req.body.status.includes("Aguardando Retirada") &&
            !req.body.status.includes("Finalizado")
        ) {console.log("status invalido"); resp.sendStatus(400); return;}

        let obj = {
            _id: req.params.id,
            status: req.body.status
        }

        let response = await dm.putOne("produtosComprados", obj);
      
        if (response) 
          resp.sendStatus(200);
        else 
          resp.sendStatus(400);
    }

    static putCodigoRastreio = async (req, resp) => {

        const resultValidaParceiro = await Parceiro.valida(req.params._idParceiro, req.body.senha);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}

        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.body.senha);
        if(!resultValidaParceiroAdmin) {
      
          const resultValidaProduto = await this.valida(req.params.id, req.params._idParceiro);
          if(!resultValidaProduto) {resp.sendStatus(400); return;}
        }

        if (req.body.codigoRastreio.length > 100) {console.log("codigo muito grande"); 
        resp.sendStatus(400); return;}

        let obj = {
            _id: sanitizeHtml(req.params.id),
            codigoRastreio: sanitizeHtml(req.body.codigoRastreio)
        }

        let response = await dm.putOne("produtosComprados", obj);
      
        if (response) 
          resp.sendStatus(200);
        else 
          resp.sendStatus(400);
    }

    static putEnderecoRetirada = async (req, resp) => {

        const resultValidaParceiro = await Parceiro.valida(req.params._idParceiro, req.body.senha);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}

        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.body.senha);
        if(!resultValidaParceiroAdmin) {
      
          const resultValidaProduto = await this.valida(req.params.id, req.params._idParceiro);
          if(!resultValidaProduto) {resp.sendStatus(400); return;}
        }

        if (req.body.enderecoRetirada.length > 100) {console.log("endereco muito grande"); 
        resp.sendStatus(400); return;}

        let obj = {
            _id: sanitizeHtml(req.params.id),
            enderecoRetirada: sanitizeHtml(req.body.enderecoRetirada)
        }

        let response = await dm.putOne("produtosComprados", obj);
      
        if (response) 
          resp.sendStatus(200);
        else 
          resp.sendStatus(400);
    }

    static putFavorito = async (req, resp) => {

        const resultValidaUsuario = await Usuario.valida(req.params._idUsuario, req.body.senha);
        if(!resultValidaUsuario) {resp.sendStatus(400); return;}

        let produto = await dm.getOne("produtos", req.params);

        let favoritos = produto.favoritos;

        if (isNaN(favoritos)) favoritos = 1;

        if (req.body.status == "adicionar") favoritos = favoritos + 1;
        if (req.body.status == "remover") favoritos = favoritos - 1;

        let obj = {
            _id: sanitizeHtml(req.params.id),
            favoritos: favoritos
        }

        let response = await dm.putOne("produtos", obj);
      
        if (response) 
          resp.sendStatus(200);
        else 
          resp.sendStatus(400);
    }

    static put = async (req, resp) => {

  
        if (req.params._idParceiro != req.body._idParceiro) {
          
          resp.sendStatus(400);
          return;
        }
      
        const resultValidaParceiro = await Parceiro.valida(req.params._idParceiro, req.body.senha);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}
      
        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.body.senha);
        if(!resultValidaParceiroAdmin) {
      
          const resultValidaProduto = await this.valida(req.body._id, req.body._idParceiro);
          if(!resultValidaProduto) {resp.sendStatus(400); return;}
        }
      
        let obj = this.objProduto(req.body);
        if(!await this.validaForm(obj)){resp.sendStatus(400); return;}
      
        let response = await dm.putOne("produtos", obj);
      
        if (response) 
          resp.sendStatus(200);
        else 
          resp.sendStatus(400);
    }

    static postImagens = async (req, res) => {

        try {
    
            let imgUploaded = await ProdutoImagem.validaImagem(req, res);
            let imgNames = ProdutoImagem.pushImageNames(req);
            
            imgNames = ProdutoImagem.imagensApagar(req, imgNames);
            imgNames = ProdutoImagem.modificarImagens(imgNames, imgUploaded);
    
            if (!imgUploaded) {return;}
    
            res.status(200).send(imgNames);
    
        } catch (e){
    
            console.log(e);
            res.sendStatus(400);
        }
    }

    static deleteImagens = async (req, res) => {

        const resultValidaParceiro = await Parceiro.valida(req.body._idParceiro, req.body.senha);
        if(!resultValidaParceiro) {res.sendStatus(400); console.log("não é parceiro!"); return;}

        ProdutoImagem.imagensApagar(req, req.body.imagesApagar);
        res.sendStatus(200);

    }

    static postMulti = async (req, res) => {

        if (typeof req.body._idParceiro == "undefined") {
            console.log("id invalido");
            return res.sendStatus(400);
        }
        
        const resultValidaParceiro = await Parceiro.valida(req.body._idParceiro, req.body.senha);
        //console.log("validaParceiro " + resultValidaParceiro);
        if(!resultValidaParceiro) {res.sendStatus(400); console.log("não é parceiro!"); return;}
    
        if ((!req.files || Object.keys(req.files).length === 0) && typeof req.body.multiProdutos == "undefined") {
    
            console.log("No files were uploaded");
            return res.sendStatus(400);
        }
    
        await dm.postMulti(
            res, 
            "produtos", 
            req.files.multiProdutos, 
            this.validaForm, 
            this.objProduto, 
            sanitizeHtml(req.body._idParceiro)
        );
    }

    static delete = async (req, resp) => {

        const resultValidaParceiro = await Parceiro.valida(req.params._idParceiro, req.params.senha);
        if(!resultValidaParceiro) {resp.sendStatus(400); return;}
    
        const resultValidaParceiroAdmin = await Parceiro.validaAdmin(req.params._idParceiro, req.params.senha);
        if(!resultValidaParceiroAdmin) {
    
            const resultValidaProduto = await this.valida(req.params.id, req.params._idParceiro);
            if(!resultValidaProduto) {resp.sendStatus(400); return;}
        }
    
        let response = await dm.deleteOne("produtos", req.params, "produto removido");
    
        if (response) 
            resp.sendStatus(200);
        else 
            resp.sendStatus(400);
    }
}

module.exports = Produto;
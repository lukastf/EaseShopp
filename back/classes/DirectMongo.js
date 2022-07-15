const MongoClient = require('mongodb').MongoClient; 
const ObjectId = require('mongodb').ObjectId;
const formatarData = require('./formatarData');
const fs = require('fs');

class DirectMongo {
    
    static getDatabase = async () => {
    
        try {
    
            const db = await MongoClient.connect("mongodb://root:easeShop123@localhost:27017/", 
            { useNewUrlParser: true, useUnifiedTopology: true });
            
            const close = () => {
                try {
                    return db.close()
                } catch (e) {
                    console.log(e);
                }
            }
        
            const obj = {
        
                db: db.db("lojaVirtual"),
                close: close
            } 
        
            return obj;
    
        } catch (e) {
    
            console.log("não conseguiu conectar");
            return null;
        }
    
    }

    static createObj = (params) => {

        params.dataInicio = parseInt(params.dataInicio);
        if (isNaN(params.dataInicio)) params.dataInicio = "";
    
        params.dataTermino = parseInt(params.dataTermino);
        if (isNaN(params.dataTermino)) params.dataTermino = "";
    
        let obj = {
            _id: {$lte: ObjectId(params.id)},
            nome: new RegExp(params.nome, "ig"),
            nomeEmpresa: new RegExp(params.nomeEmpresa, "ig"),
            parceiro: new RegExp(params.parceiro, "ig"),
            categoria: params.categoria,
            dia: {$gt: params.dataInicio, $lt: params.dataTermino},
            _idParceiro: params._idParceiro,
            _idUsuario: params._idUsuario,
            status: {$ne:"Finalizado"}
        }
    
        // remover props undefined
    
        if (
            params.id === "" || 
            params.id === "undefined" || 
            typeof params.id === "undefined"
        ) {
            delete obj._id;
        }
    
        if (
            params.nome === "" || 
            params.nome === "undefined" || 
            typeof params.nome === "undefined"
        ) {
            delete obj.nome;
        }
    
        if (
            params.nomeEmpresa === "" || 
            params.nomeEmpresa === "undefined" || 
            typeof params.nomeEmpresa === "undefined"
        ) {
            delete obj.nomeEmpresa;
        }

        if (
            params.parceiro === "" || 
            params.parceiro === "undefined" || 
            typeof params.parceiro === "undefined"
        ) {
            delete obj.parceiro;
        }
    
        if (params.categoria == "Todos") params.categoria = "";
    
        if (
            params.categoria === "" || 
            params.categoria === "undefined" || 
            typeof params.categoria === "undefined"
        ) {
            delete obj.categoria;
        }
    
        if (
            params.dataInicio === "" || 
            params.dataInicio === "undefined" || 
            typeof params.dataInicio === "undefined"
        ) {
            delete obj.dia;
        }
    
        if (
            params.dataTermino === "" || 
            params.dataTermino === "undefined" || 
            typeof params.dataTermino === "undefined"
        ) {
            delete obj.dia;
        }
    
        if (
            params._idParceiro === "" || 
            params._idParceiro === "undefined" || 
            typeof params._idParceiro === "undefined"
        ) {
            delete obj._idParceiro;
        }
    
        if (
            params._idUsuario === "" || 
            params._idUsuario === "undefined" || 
            typeof params._idUsuario === "undefined"
        ) {
            delete obj._idUsuario;
        }

        if (
            params.status === "" || 
            params.status === "undefined" || 
            typeof params.status === "undefined" ||
            params.removerStatusFinalizado !== true
        ) {
            delete obj.status;
        }
    
        return obj;
    }

    static sort = (params) => {

        let sort = {_id:-1};

        if (params.sort == "-_id") sort = {_id:-1};
        if (params.sort == "+_id") sort = {_id:1};
        if (params.sort == "+valorNum") sort = {valorNum:-1};
        if (params.sort == "-valorNum") sort = {valorNum:1};
        if (params.sort == "+favoritos") sort = {favoritos:-1};
        //if (params.sort == "-favoritos") sort = {favoritos:1};
        if (params.sort == "+vendidos") sort = {vendidos:-1};
        //if (params.sort == "-vendidos") sort = {vendidos:1};

        return sort;
    }

    static getOne = async (collection, params) => {

        const objDb = await this.getDatabase();
        const db = objDb.db;
        
        try {

            let manterSenha = params.manterSenha;
            delete params.manterSenha;
    
            let obj = { _id: ObjectId(params.id) }
    
            // usuario check
            if (typeof params.id === 'undefined') obj = params;
    
            let res = await db.collection(collection).findOne(obj);
    
            if (manterSenha !== true && res != null) delete res.senha;
    
            return res;
    
        } catch (e) {
    
            console.log(e);
            return null;
            
        } finally {
    
            objDb.close();
        }
    }

    static getManyPagination = async (collection, params) => {

        const objDb = await this.getDatabase();
        const db = objDb.db;
    
        try {
    
            let itensPageControle = parseInt(params.itensPage);
    
            let obj = this.createObj(params);
            let sort = this.sort(params);

            const res = await db.collection(collection)
                                .find(obj)
                                .sort(sort)
                                .project({_id:1})
                                .toArray();
    
            if (res.length === 0) return null;
    
            let pagination = [];
    
            let itensPage = 0;
    
            pagination.push(res[0]._id);
    
            for (let i = 0; i < res.length; i ++) {
    
                if (itensPage == itensPageControle) {
    
                    itensPage = 0;
    
                    pagination.push(res[i]._id);
                }
    
                itensPage++;
            }
    
            return pagination;
    
        } catch (e) {
    
            console.log(e);
            return null;
            
        } finally {
    
            objDb.close();
        }
    }

    static getMany = async (collection, params) => {

        const objDb = await this.getDatabase();
        const db = objDb.db;
    
        try {
    
            let itensPage = parseInt(params.itensPage);
            
            params.id = params.pageId;
            let obj = this.createObj(params);
            let sort = this.sort(params);
        
            return await db.collection(collection)
                            .find(obj)
                            .sort(sort)
                            .project({carrinho:0, favoritos:0, senha:0})
                            .limit(itensPage)
                            .toArray();
    
        } catch (e) {
    
            //console.log(e);
            return null;
    
        } finally {
    
            objDb.close();
        }
    }

    static count = async (collection) => {

        const objDb = await this.getDatabase();
        const db = objDb.db;
    
        try {
        
            return await db.collection(collection).count();
    
        } catch (e) {
    
            //console.log(e);
            return null;
    
        } finally {
    
            objDb.close();
        }
    }

    static postOne = async (collection, obj) => {

        const objDb = await this.getDatabase();
        const db = objDb.db;
        
        try {
    
            delete obj._id;
    
            return await db.collection(collection).insertOne(obj);
    
        } catch (e) {
    
            console.log(e);
            return null;
    
        } finally {
    
            objDb.close();
        }
    }
    
    static postMulti = async (res, collection, file, validaFunctionForm, objModel, _idParceiro = "") => {

        const objPreModelProduto = (obj) => {

            obj.imagens = [
                                
                obj.imagens[0],
                obj.imagens[1],
                obj.imagens[2],
                obj.imagens[3],
                obj.imagens[4]
            ]
            obj.imagensLinkExterno = [true, true, true, true, true];
            obj._idParceiro = _idParceiro;
        
            return obj;
        }
    
        const objDb = await this.getDatabase();
        const dbo = objDb.db;
    
        try {
    
            let type = file.mimetype.split("/");
            if (type[1] !== "json" ) res.sendStatus(400);
            let fileUploaded = '../back/public/tmp/'+ formatarData() + '.'+ type[1];
    
            file.mv(fileUploaded , (err) => {
                if (err) res.sendStatus(400);
    
                fs.readFile(fileUploaded, async (err, data) => {
                    //if (err) throw err;
    
                    let objsComErro = [];
                    let objsJaCadastrados = [];
                    let objsCadastrados = [];
    
                    let objs = JSON.parse(data);
    
                    for (let i = 0; i < objs.length; i++) {
    
                        let objValido = true;
                        if (collection == "produtos") objs[i] = objPreModelProduto(objs[i]);
                        let obj = objModel(objs[i]);
                        delete obj._id;
    
                        if(!await validaFunctionForm(obj)) {
    
                            objsComErro.push(obj);
                            objValido = false;
                        }

                        //console.log(obj);
                        //return;
                        
                        let check = await dbo.collection(collection).findOne(obj);

                        
                        if (check) {
    
                            objsJaCadastrados.push(obj);
                            objValido = false;
                        }
    
                        if (objValido) objsCadastrados.push(obj);
                    }
                        
                    if (objsCadastrados.length > 0) dbo.collection(collection).insertMany(objsCadastrados);
    
                    let response = {
    
                        objsComErro: objsComErro,
                        objsJaCadastrados: objsJaCadastrados,
                        objsCadastrados: objsCadastrados
                    }
    
                    res.status(200).send(response);

                    objDb.close();
    
                    // remove o arquivo temporario
                    // checa se existe
                    fs.access(fileUploaded, fs.F_OK, (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
            
                        //remove
                        fs.unlink(fileUploaded, (err) => {
                            //if (err) throw err;
                        });
                    });
                });
            });
    
        } catch (e) {
    
            console.log(e);
            objDb.close();
        }
    }

    static postMulti2 = async (objUsuarioPreCadastrado, validaPreCadastradoForm) => {

        let objsCadastrados = [];

        const objDb = await this.getDatabase();
        const dbo = objDb.db;
    
        try {

            fs.readdir('../usuarios/', (err, filenames) => {

                if (err) { console.log(err); return; }

                for (let index = 0; index < filenames.length; index++) {

                    console.log(filenames[index])

                    //if (index > 2000){
                    //    return;
                    //}

                    

                    fs.readFile('../usuarios/' + filenames[index], (err, content) => {

                        try {

                            if (err) { console.log(err); return; }

                            let c = JSON.parse(content);
                            
                            for (let i = 0; i < c.length; i++) {

                                let obj = objUsuarioPreCadastrado(c[i]);
                                delete obj._id;

                                let objValido = true;

                                //if(!await validaPreCadastradoForm(obj)) { objValido = false; }

                                //let check = await dbo.collection("usuariosPreCadastrados").findOne(obj);

                                //if (check) { objValido = false; }

                                if (objValido) objsCadastrados.push(obj);

                                //console.log(objsCadastrados)
                                if (i === c.length - 1) {

                                    if (objsCadastrados.length > 0) dbo.collection("usuariosPreCadastrados").insertMany(objsCadastrados);
                                    objsCadastrados = [];

                                    if (index === filenames.length - 1) {
                                        //console.log("Last callback call at index " + idx + " with value " + i ); 
                                        //objDb.close();
                                    }
                                }
                            }

                        } catch (e) {
    
                            console.log(e);
                            //console.length("merda")
                            //objDb.close();
                        }
                    });
                    
                }

                /*filenames.forEach((filename, idx, array) => {

                    if (idx > 1000) {
                        objDb.close();
                        break
                    }
    
                    fs.readFile('../usuarios/' + filename, async (err, content) => {

                        if (err) { console.log(err); return; }

                        //let c = JSON.parse(JSON.stringify(content))
                        
                        //let a = content.toString();
                        let c = JSON.parse(content)
                        //let d = JSON.stringify(c)
                        //c = JSON.parse(d)

                        console.log(filename);
                        //await new Promise(resolve => setTimeout(resolve, 5000));
                        //console.log("fim " + idx)
                        
                        for (let i = 0; i < c.length; i++) {

                            let obj = objUsuarioPreCadastrado(c[i])
                            delete obj._id;

                            let objValido = true;

                            if(!await validaPreCadastradoForm(obj)) { objValido = false; }

                            let check = await dbo.collection("usuariosPreCadastrados").findOne(obj);

                            if (check) { objValido = false; }

                            if (objValido) objsCadastrados.push(obj);

                            //console.log(objsCadastrados)
                            if (i === c.length - 1) {

                                if (objsCadastrados.length > 0) await dbo.collection("usuariosPreCadastrados").insertMany(objsCadastrados);
                                objsCadastrados = [];

                                if (idx === array.length - 1) {
                                    //console.log("Last callback call at index " + idx + " with value " + i ); 
                                    objDb.close();
                                }
                            }
                        }
                    });
                });*/
            });

        } catch (e) {
    
            console.log(e);
            //console.length("merda")
            //objDb.close();
        }
    }

    static putOne = async (collection, obj) => {

        const objDb = await this.getDatabase();
        const db = objDb.db;
    
        try {
    
            obj._id = ObjectId(obj._id);

            return await db.collection(collection).updateOne({ "_id":obj._id }, {$set: obj});
    
        } catch (e) {
    
            console.log(e);
            return null;
    
        } finally {
            objDb.close();
        }
    }

    static deleteOne = async (collection, params) => {

        const objDb = await this.getDatabase();
        const db = objDb.db;
    
        try {
    
            let obj = { _id: ObjectId(params.id) }
    
            return await db.collection(collection).deleteOne(obj);
    
        } catch (e) {
    
            console.log(e);
            return null;
            
        } finally {
    
            objDb.close();
        }
    }

    static deleteMany = async (collection, params) => {

        const objDb = await this.getDatabase();
        const db = objDb.db;
    
        try {
    
            let obj = params;
    
            return await db.collection(collection).deleteMany(obj);
    
        } catch (e) {
    
            console.log(e);
            return null;
            
        } finally {
    
            objDb.close();
        }
    }
}

module.exports = DirectMongo;

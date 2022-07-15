const Parceiro = require('./Parceiro');
const formatarData = require('./formatarData');
const fs = require('fs');

class ProdutoImagem {

  static validaImagem = async (req, res) => {

    if (typeof req.body._idParceiro == "undefined") {

      console.log("id invalido");
      res.sendStatus(400);
      return false;
    }

    const resultValidaParceiro = await Parceiro.valida(req.body._idParceiro, req.body.senha);
    if(!resultValidaParceiro) {res.sendStatus(400); return;}

    if ((!req.files || Object.keys(req.files).length === 0) && typeof req.body.images == "undefined") {

      console.log("No files were uploaded");
      res.sendStatus(400);
      return false;
    }

    return this.checarImagem(req, res);
  }

  static checarImagem = (req, res) => {

    if (req.files) {

      let file = req.files.images;

      if (!Array.isArray(file)) {
          
        file = [file];
      }

      for (let i=0; i < file.length; i++) {

        let type = file[i].mimetype.split("/");

        if(!this.typeIsImg(type, file))
        { res.sendStatus(401); return false; }

        if(!this.typeIsExtValid(type, file))
        { res.sendStatus(402); return false; }

        if(!this.checkSize(file))
        { res.sendStatus(403); return false; }
      }

      return this.uploadImg(file);
    }

    return [];
  }

  static checkSize  = (file) => {

    let validaSize = true;

    for (let i=0; i < file.length; i++) {

      let size = file[i].size;

      if (size > 21000000) {
      //if (size > 36290) {

        console.log("imagem muito pesada!");
        validaSize = false;
      }
    }

    return validaSize;
  }

  static typeIsImg  = (type, file) => {

    let validaImg = true;

    if (type[0] != 'image') {

      for (let i=0; i < file.length; i++) {

        let path = file[i].tempFilePath;

        // checa se existe
        fs.access(path, fs.F_OK, (err) => {
          if (err) {
            console.error(err)
            return;
          }

          //remove
          fs.unlink(path, (err) => {
            //if (err) throw err;
          });
        });
      }
      
      console.log("nao e imagem");
      validaImg = false;
    }

    return validaImg;
  }

  static typeIsExtValid  = (type, file) => {

    let validaImg = true;
  
    if (type[1] != 'jpeg' && type[1] != 'png' && type[1] != 'jpg') {
  
      for (let i=0; i < file.length; i++) {
  
        let path = file[i].tempFilePath;
  
        // checa se existe
        fs.access(path, fs.F_OK, (err) => {
          if (err) {
            console.error(err)
            return;
          }
  
          //remove
          fs.unlink(path, (err) => {
            //if (err) throw err;
          });
        });
      }
  
      console.log("formato invalido");
      validaImg = false;
    }
  
    return validaImg;
  }

  static uploadImg = (file) => {

    let imgUploaded = [];
  
    for (let i=0; i < file.length; i++) {
    
      let type = file[i].mimetype.split("/");
  
      // envia no começo da array
      imgUploaded.push(formatarData() + '_' + i +'.'+ type[1]);
  
      file[i].mv('../back/public/images/'+ formatarData() + '_' + i +'.'+ type[1] , (err) => {
  
        if (err) {
  
          console.log(err);
  
          let path = file[i].tempFilePath;
  
          // checa se existe
          fs.access(path, fs.F_OK, (err) => {
            if (err) {
              console.error(err)
              return;
            }
  
            //remove
            fs.unlink(path, (err) => {
              //if (err) throw err;
              //console.log("imagem removida");
            });
          });
  
          console.log("erro");
        }
  
        console.log('File uploaded!');
      });
    }
    return imgUploaded;
  }

  static pushImageNames = (req) => {

    let imgNames = [];

    if (
      req.body.images != 'undefined' && req.body.images != 'null' &&
      req.body.images != undefined && req.body.images != null
    ) {

      if (!Array.isArray(req.body.images)) {
        req.body.images = [req.body.images];
      }

      for (let i=0; i < req.body.images.length; i++) {

        imgNames.push(req.body.images[i]);
      }
    }

    return imgNames;
  }

  static imagensApagar = (req, imgNames) => {

    try {

      if (
        req.body.imagesApagar != undefined && req.body.imagesApagar != null &&
        req.body.imagesApagar != 'undefined' && req.body.imagesApagar != 'null'
      ) {
      
        if (!Array.isArray(req.body.imagesApagar)) {
          req.body.imagesApagar = [req.body.imagesApagar];
        }

        for (let i=0; i < req.body.imagesApagar.length; i++) {
        
          if (
            req.body.imagesApagar[i] != 'undefined' && req.body.imagesApagar[i] != 'null' &&
            req.body.imagesApagar[i] != undefined && req.body.imagesApagar[i] != null
          ) {
              
            let path = '../back/public/images/'+req.body.imagesApagar[i];

            // checa se existe
            fs.access(path, fs.F_OK, (err) => {
              if (err) {
                console.error(err)
                return;
              }

              //remove
              fs.unlink(path, (err) => {
                //if (err) throw err;
                //console.log("imagem removida");
              });
            });
          }

          for (let index=0; index < imgNames.length; index++) {

            if (imgNames[index] == req.body.imagesApagar[i]) {

              imgNames[index] = null;
            }
          }
        }
      }

      return imgNames;

    } catch (e) {

      console.log(e);
      return null
    }
  }

  static modificarImagens = (imgNames, imgUploaded) => {

    for (let i=0; i < imgNames.length; i++) {

      if (
        imgNames[i] == 'undefined' || imgNames[i] == 'null'  || 
        imgNames[i] == null || imgNames[i] == undefined 
      ) {
  
        if (imgUploaded != 'undefined' && imgUploaded != undefined && imgUploaded != null) {

          for (let index=0; index < imgUploaded.length; index++) {
  
            if (imgUploaded[index] != 'undefined' && imgUploaded[index] != 'null' && 
            imgUploaded[index] != undefined && imgUploaded[index] != null) {
    
              imgNames[i] = imgUploaded[index];
              imgUploaded[index] = null;
              break;
            }
          }
        }
      }
    }

    return imgNames;
  }
}

module.exports = ProdutoImagem;
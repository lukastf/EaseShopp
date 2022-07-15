const express = require('express');
const router = express.Router();
const axios = require('axios');
const CryptoJS = require("crypto-js");
const decryptKey = "easeShopplegal123@";
const Correios = require('node-correios');

const server = "http://localhost:3001";
//const server = "https://easeshopp.com.br:81";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/calcularFrete', async (req, res) => {

  let correios = new Correios();

  correios.calcPrecoPrazo(req.body)
  .then(result => {

    let resposta = {
      valor: result[0].Valor,
      prazoEntrega: result[0].PrazoEntrega
    }

    if (resposta.valor != '0,00') 
      res.status(200).send(resposta);
    else 
      res.sendStatus(400);
  })
  .catch(error => {
    //console.log(error);
  });
});

router.post('/finalizarCompra/:numeroPedido/:key1/:key2/:key3', async (req, res) => {

  //http://localhost:3002/usuarios/finalizarCompra/S-1630350571953ILHfm/U2FsdGVkX18Zgvu8pj8nyibZpzY/rnfoLv/IU9l9wAI=

  /*{
    "0210": {
        "39": "00",
        "62": "sucesso"
      }
  }*/

  let key = req.params.key1 + "/" + req.params.key2 + "/" + req.params.key3;

  chaveOrg = "U2FsdGVkX18Zgvu8pj8nyibZpzY/rnfoLv/IU9l9wAI=";
  let ocorreu = "nada";
  let statusMsg = "ERROR";

  if (key !== chaveOrg) res.send("chave incorreta");
  
  try {

    let status = req.body["0210"]["39"];
    status = parseInt(status);
    
    bytes = CryptoJS.AES.decrypt(key, decryptKey);
    str = bytes.toString(CryptoJS.enc.Utf8);

    if (str === "computação" && status === 00) {

      ocorreu = "compra realizada com sucesso";
      statusMsg = "SUCESS";

      axios.post(server + "/usuarios/finalizarCompra/" + req.params.numeroPedido, { status: 200 })
      .then(()=>{
      }).catch((e)=>{
        //console.log(e.message);

        if(e.response)
          console.log(e.response.data);
      })
    }
    else if (str === "computação") {

      let errorMessage = req.body["0210"]["62"];

      ocorreu = "erro na compra: " + errorMessage;

      axios.post(server + "/usuarios/finalizarCompra/" + req.params.numeroPedido, 
      { status: 400, errorMessage: errorMessage });
    }

  } catch (e) {
    //console.log(e);
  }

  res.send({ "status": statusMsg });

});

module.exports = router;
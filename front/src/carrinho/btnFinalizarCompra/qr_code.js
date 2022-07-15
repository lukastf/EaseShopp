
import React from 'react';
import Axios from 'axios';
import { serverUrl } from '../../config';
import $ from 'jquery';
import routes from '../../navbar/routes/routes';
import setRoute from '../../navbar/routes/setRoute';
import { moneyMask } from '../../forms/utilidades/masks';

const randonLetter = (length) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

const qr_code = (context, valorTotal, saque = false) => {

    let nome = context.props.navbar.props.app.state.nome;
    let cidade = context.props.navbar.props.app.state.cidade;
    let _idSession = context.props.navbar.props.app.state._id;
    let senha = context.props.navbar.props.app.state.senha;

    let merchantAccountInformation = {

        cnpj: "07907815000106",
        instituicao: "00000000",
        tipoConta: "0000",
        agencia: "00000000",
        conta: "00000000000000000000"
    };

    //tirar virgula
    valorTotal = valorTotal.replace(".", "");
    valorTotal = valorTotal.replace(",", "");

    let merchantCategoryCode = "0000";
    let transactionCurrency = "986"; //(R$)
    let transactionAmount = valorTotal;
    let countryCode = "BR";
    let merchantName = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
    let merchantCity = cidade.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();

    let unreservedTemplates = {

        gui: "",
        ur: "https://easeshopp.com.br:82/usuarios/finalizarCompra"
    }

    let dataAtual = new Date();
    let vendaOuSaque = "V-";
    if (saque) vendaOuSaque = "S-";
    let numeroPedido = vendaOuSaque + dataAtual.getTime() + randonLetter(5);
    let ano = dataAtual.getFullYear();
    
    let mes = (dataAtual.getMonth() + 1);
    if(mes < 10) mes = "0" + mes;

    let dia = dataAtual.getDate();
    if(dia < 10) dia = "0" + dia;

    dataAtual = ano + "-" + mes + "-" + dia;

    let json = {

        "00" : "01",
        "01" : "12",
        "26" : {
            "00" : merchantAccountInformation.cnpj,
            "21" : merchantAccountInformation.instituicao,
            "22" : merchantAccountInformation.tipoConta,
            "23" : merchantAccountInformation.agencia,
            "24" : merchantAccountInformation.conta
        },
        "52" : merchantCategoryCode,
        "53" : transactionCurrency,
        "54" : transactionAmount,
        "58" : countryCode,
        "59":  merchantName,
        "60":  merchantCity,
        "62" : {
            "05" : numeroPedido,
            "06": dataAtual
        },
        "80" : {
            "00" : unreservedTemplates.gui,
            "25" : unreservedTemplates.ur
        },
        "63" : "0x34D1"
    }

    json = JSON.stringify(json);
    let data = encodeURI(json);

    valorTotal = moneyMask(valorTotal);

    let finalizarCompra = {

        _idUsuario: _idSession,
        senha: senha,
        numeroPedido: numeroPedido,
        dataPedido: dataAtual,
        valorTotal: valorTotal,
        saque: saque
    }

    Axios.post(serverUrl + "/usuarios/finalizarCompra", finalizarCompra)
    .then((response) => {  

        let foda = 0;

        if (!localStorage.intervalo || localStorage.intervalo === "false") {

            localStorage.intervalo = "true";

            let intervalo = setInterval(() => {
                
                foda++;

                if (foda > 30) {
                    clearInterval(intervalo); localStorage.intervalo = "false"
                }

                Axios.get(serverUrl + "/usuarios/finalizarCompra/" + _idSession + "/" + senha)
                .then((finalizarCompra) => {

                    if (
                        //response.data.length < 1 && 
                        finalizarCompra.data.status === 200) {

                        console.log("sucesso")

                        $('#exampleModalCenter').modal('hide');
                        $('#checarEndereco').modal('hide');
                        
                        clearInterval(intervalo); 
                        localStorage.intervalo = "false";
                        if (!saque) context.props.navbar.props.app.state.carrinho = [];

                        let mensagem = {
                            color: "green",
                            mensagem: "Transação finalizada com sucesso"
                        }

                        setRoute(context.props.navbar, "/mensagem");
                        routes(context.props.navbar, mensagem, "/mensagem");
                        return;
                    }
                    
                    else if (finalizarCompra.data.status === 400) {

                        console.log("erro")

                        $('#exampleModalCenter').modal('hide');
                        $('#checarEndereco').modal('hide');
                        
                        clearInterval(intervalo); 
                        localStorage.intervalo = "false";

                        let mensagem = {
                            color: "red",
                            mensagem: finalizarCompra.data.errorMessage
                        }

                        setRoute(context.props.navbar, "/mensagem");
                        routes(context.props.navbar, mensagem, "/mensagem");
                    }
                })

            }, 10000);
        }

    }).catch((error) => {});

    const copiarQrCode = () => {

        navigator.clipboard.writeText(json);
    }
    

    return (
        <>
            <img className="" src={"https://api.qrserver.com/v1/create-qr-code/?data=" + data } alt="" title="" />
            <button type="button" className="btn btn-primary mx-3" onClick={copiarQrCode}>Copiar Qr Code</button>
        </>
    );
}

export default qr_code;
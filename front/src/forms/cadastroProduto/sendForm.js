import axios from 'axios';

import resetForm from './resetForm';
import { serverUrl } from '../../config';
import objProduto from '../../carrinho/objProduto';
import { erro, sucesso } from '../cadastroResult';
import checkValidVar from '../utilidades/checkValidVar';

const getSendObj = (cadastroProduto, _idParceiro) => {

    let imagensLinkExterno = [];
    let linkExterno = cadastroProduto.state.linkExterno;

    for( let i = 0; i < linkExterno.length; i++ ) {

        let temp = false;

        if(checkValidVar(linkExterno[i])) {

            //imagensLinkExterno.push(true);
            temp = true;
        } 
        //else {
            //imagensLinkExterno.push(false);
        //}

        imagensLinkExterno.push(temp);
    }

    let obj = objProduto(cadastroProduto.state);
    obj._idParceiro = _idParceiro;
    obj.imagensLinkExterno = imagensLinkExterno;

    return obj;
}

const produtoEditar = (cadastroProduto, _idParceiro) => {

    if (!cadastroProduto.props.editar) {

        resetForm(cadastroProduto);

        let novoProduto = objProduto(false);

        novoProduto._idParceiro = _idParceiro;
        cadastroProduto.setState(novoProduto);
    }
}

const checkOpcoesMedida = (obj) => {

    if (obj.opcoesMedida === "Nenhuma") {
        
        obj.voltagem = [];
        obj.tamanhoRoupas = [];
        obj.tamanhoCalcados = [];
    }

    if (obj.opcoesMedida === "Voltagem") {
        
        obj.tamanhoRoupas = [];
        obj.tamanhoCalcados = [];
    }

    if (obj.opcoesMedida === "TamanhoRoupas") {
        
        obj.voltagem = [];
        obj.tamanhoCalcados = [];
    }

    if (obj.opcoesMedida === "TamanhoCalcados") {
        
        obj.voltagem = [];
        obj.tamanhoRoupas = [];
    }

    return obj;
}

const sendForm = (cadastroProduto) => {

    let _idParceiro = cadastroProduto.props.navbar.props.app.state._id;
    let senha = cadastroProduto.props.navbar.props.app.state.senha;

    let obj = getSendObj(cadastroProduto, _idParceiro);
    obj.senha = senha;

    obj = checkOpcoesMedida(obj);
    
    let url = serverUrl + "/produtos";
    let sendHttp = axios.post;

    if (cadastroProduto.props.editar) {

        url = serverUrl + "/produtos/" + cadastroProduto.state._id + "/" + _idParceiro;
        sendHttp = axios.put;
    }

    sendHttp(url, obj).then((response) => {

        sucesso(cadastroProduto);
        produtoEditar(cadastroProduto, _idParceiro);
    })
    .catch((error) => {

        //console.log(cadastroProduto.state.imagens);

        let obj = {
            _idParceiro: _idParceiro,
            senha: senha,
            imagesApagar: cadastroProduto.state.imagens
        }

        axios.post(serverUrl + "/produtos/deleteImagens", obj);
        erro(cadastroProduto, error); 
    });
}

export default sendForm;
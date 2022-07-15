
import axios from 'axios';

import sendForm from './sendForm';
import { serverUrl } from '../../config';
import { erroCustom } from '../cadastroResult';
import checkValidVar from '../utilidades/checkValidVar';

const appendImages = (imgs, imgsValues, imagemRecebida) => {

    let formData = new FormData();

    for (let i = 0; i < imagemRecebida.length; i++) {

        if (imgs[i] != null) {
    
            formData.append("images", imgs[i], imgsValues[i]);
    
            if (typeof imagemRecebida[i] !== "undefined" && imagemRecebida[i] != null) {
                formData.append("imagesApagar", imagemRecebida[i]);
            }
        }

        formData.append("images", imagemRecebida[i]);
    }

    return formData;
}

const checarUmaImagem = (cadastroProduto) => {

    let imgUrl =  cadastroProduto.state.imgUrl;
    let valid = false;

    for (let i = 0; i < imgUrl.length; i++) {

        if (checkValidVar(imgUrl[i])) valid = true;
    }

    if (!valid) {
        erroCustom(cadastroProduto, "Escolha pelo menos uma imagem");
        return false;
    }

    return true;
}

const uploadImage = (cadastroProduto, e) => {

    e.preventDefault();

    // depois de 3 sec o erro some
    setTimeout(() => { cadastroProduto.setState({ cadastroResult: "" }); }, 3000);

    if (!checarUmaImagem(cadastroProduto)) return;

    let img = cadastroProduto.state.img;
    let imgValue = cadastroProduto.state.imgValue;
    let linkExterno = cadastroProduto.state.linkExterno;
    let imgUrl = cadastroProduto.state.imgUrl;
    
    let imagemRecebida = ["null", "null", "null", "null", "null"];

    if (typeof cadastroProduto.props.produto !== "undefined") 
        imagemRecebida = cadastroProduto.props.produto.imagens;
    
    for (let i = 0; i < imgUrl.length; i++) {

        if (linkExterno[i] !== "") imagemRecebida[i] = linkExterno[i];
        if(imgUrl[i] === null) imagemRecebida[i] = "null";
    }

    let formData = appendImages(img, imgValue, imagemRecebida);
    formData.append("_idParceiro", cadastroProduto.props.navbar.props.app.state._id);
    formData.append("senha", cadastroProduto.props.navbar.props.app.state.senha);

    axios.post(serverUrl + "/produtos/imagens", formData, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
    })
    .then((response) => {

        cadastroProduto.setState({
            imagens: response.data
        });

        sendForm(cadastroProduto);

    })
    .catch((error) => {

        if (error.response.status === 400) 
            erroCustom(cadastroProduto, "Imagens Invalidas");
        

        if (error.response.status === 401) 
            erroCustom(cadastroProduto, "Envie apenas imagens PNG, JPEG ou JPG");
        

        if (error.response.status === 402) 
            erroCustom(cadastroProduto, "Formato de imagem invalido use apenas PNG, JPEG ou JPG");

        if (error.response.status === 403) 
            erroCustom(cadastroProduto, "Imagem pesada! Máximo de 20 Mb por imagem!");
        
    });
}

export default uploadImage;
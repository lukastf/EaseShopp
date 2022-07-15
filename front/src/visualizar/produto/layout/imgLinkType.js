

import styles from '../VisualizarProduto.module.css';
import { serverUrl } from '../../../config';

const imgLinkType = (visualizarProduto) => {

    let imgSrc = [];
    let displayImg = [];
    let displayImgLimit = 0;

    let imagens = visualizarProduto.props.produto.imagens;
    let imagensLinkExterno = visualizarProduto.props.produto.imagensLinkExterno;

    for (let i = 0; i < imagens.length; i++) {

        // seleciona o tipo de imagem
        if(imagensLinkExterno[i]) {

            imgSrc.push(imagens[i]);

        } else {

            imgSrc.push(serverUrl + "/images/" + imagens[i]);
        }

        // esconde campos em branco
        if(
            imagens[i] === "" || 
            imagens[i] === "undefined" ||  
            imagens[i] === "null" ||
            typeof imagens[i] == "undefined" ||
            imagens[i] == null
        ) {
            displayImg.push("d-none");
        } else {
            displayImg.push("");
            displayImgLimit ++;
        }
    }

    visualizarProduto.setState({
        imgSrc: imgSrc,
        imgSrcSelected: imgSrc[0],
        borderImg1: styles.border,
        displayImg: displayImg,
        displayImgLimit: displayImgLimit
    });
}

export default imgLinkType;
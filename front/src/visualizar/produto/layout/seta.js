import styles from '../VisualizarProduto.module.css';

const seta = (visualizarProduto, salto) => {

    let borderImgs = [];

    borderImgs.push(
        visualizarProduto.state.borderImg1,
        visualizarProduto.state.borderImg2,
        visualizarProduto.state.borderImg3,
        visualizarProduto.state.borderImg4,
        visualizarProduto.state.borderImg5
    );

    let imgSrc = "";


    for (let i = 0; i < borderImgs.length; i ++) {

        if (borderImgs[i] === styles.border) {

            if ( i+salto === -1 || i+salto === borderImgs.length || i+salto === visualizarProduto.state.displayImgLimit) {
                return;
            }

            borderImgs[i] = "";
            borderImgs[i+salto] = styles.border;
            imgSrc = visualizarProduto.state.imgSrc[i+salto];

            break;
        }
    }

    visualizarProduto.setState({

        imgSrcSelected: imgSrc,
        borderImg1: borderImgs[0],
        borderImg2: borderImgs[1],
        borderImg3: borderImgs[2],
        borderImg4: borderImgs[3],
        borderImg5: borderImgs[4]
    });
}

export default seta;
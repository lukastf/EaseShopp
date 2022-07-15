
import styles from '../VisualizarProduto.module.css';

const changeImageView = (visualizarProduto, e) => {

    visualizarProduto.setState({

        imgSrcSelected: e.target.src,
        borderImg1: "",
        borderImg2: "",
        borderImg3: "",
        borderImg4: "",
        borderImg5: ""
    });

    switch(e.target.src) {

        case visualizarProduto.state.imgSrc[0]:

            visualizarProduto.setState({
                borderImg1: styles.border
            });
        break; 
        case visualizarProduto.state.imgSrc[1]:

            visualizarProduto.setState({
                borderImg2: styles.border
            });
        break; 
        case visualizarProduto.state.imgSrc[2]:

            visualizarProduto.setState({
                borderImg3: styles.border
            });
        break; 
        case visualizarProduto.state.imgSrc[3]:

            visualizarProduto.setState({
                borderImg4: styles.border
            });
        break; 
        case visualizarProduto.state.imgSrc[4]:

            visualizarProduto.setState({
                borderImg5: styles.border
            });
        break;
        default:
        break;
    }
}

export default changeImageView;
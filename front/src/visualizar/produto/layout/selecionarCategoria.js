import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fas
} from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { serverUrl } from '../../../config';

const categoriaConstructor = (visualizarProduto, nome, icone) => {

    const cc = (display) => {

        return(
            <div className={"row m-2 categorias " + display}>
                <div className="sqr my-4 mx-3 sqr-selecionado" style={{cursor: "auto"}}>
                    <FontAwesomeIcon className="icone-principal" icon={icone} />
                    <p> {nome} </p>
                </div>
            </div>
        );
    }

    visualizarProduto.setState({
        categoria: cc("d-none d-md-block"),
        categoriaMobile: cc("d-block d-md-none")
    });
}

const selecionarCategoria = async (visualizarProduto) => {

    let categoria = visualizarProduto.props.produto.categoria;
    let response = await Axios.get( serverUrl + "/produtos/categorias/listar");

    for (let i = 0; i < response.data.length; i++) {

        if (categoria === response.data[i].nome) {

            categoriaConstructor(visualizarProduto, categoria, fas[response.data[i].icone]);
        }
    }
}

export default selecionarCategoria;
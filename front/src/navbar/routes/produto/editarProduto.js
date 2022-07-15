import React from 'react';
import { Route } from 'react-router-dom';
import CadastroProduto from '../../../forms/cadastroProduto/CadastroProduto';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const editarProduto = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path={"/editarProduto/"+props._id}>
        <CadastroProduto

            navbar={navbar}
            produto={props}

            editar={true}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default editarProduto;
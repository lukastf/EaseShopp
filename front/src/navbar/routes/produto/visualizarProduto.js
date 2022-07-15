import React from 'react';
import { Route } from 'react-router-dom';
import VisualizarProduto from '../../../visualizar/produto/VisualizarProduto';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const visualizarProduto = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path={"/visualizarProduto/"+props._id}>
        <VisualizarProduto
            navbar={navbar}
            produto={props}
            />
    </Route>;

    criarModificarRota(navbar, route);
}

export default visualizarProduto;

import React from 'react';
import { Route } from 'react-router-dom';
import VisualizarParceiro from '../../../visualizar/parceiro/VisualizarParceiro';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const visualizarParceiro = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path={"/visualizarParceiro/"+props._id}>
        <VisualizarParceiro
            navbar={navbar}
            parceiro={props}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default visualizarParceiro;
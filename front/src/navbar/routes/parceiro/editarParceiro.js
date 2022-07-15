import React from 'react';
import { Route } from 'react-router-dom';
import CadastroParceiro from '../../../forms/cadastroParceiro/CadastroParceiro';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const editarParceiro = (navbar, props) => {
    
    let route = 
    <Route key={currentDateTime()} path={"/editarParceiro/"+props._id}>
        <CadastroParceiro
            navbar={navbar}
            parceiro={props}
            editar={true}
            />
    </Route>;

    criarModificarRota(navbar, route);
}

export default editarParceiro;
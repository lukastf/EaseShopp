
import React from 'react';
import { Route } from 'react-router-dom';
import RemoveParceiro from '../../../forms/cadastroParceiro/RemoveParceiro';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const removerParceiro = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path={"/removerParceiro/"+props._id}>
        <RemoveParceiro
            navbar={navbar}
            parceiro={props}
            editar={true}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default removerParceiro;
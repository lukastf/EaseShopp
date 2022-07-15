import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';
import CadastroParceiro from '../../../forms/cadastroParceiro/CadastroParceiro';
import { currentDateTime } from '../../../config';

const cadastroParceiro = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/cadastroParceiro">
        <CadastroParceiro 
            navbar={navbar}
            parceiro={props}
            editar={false}
        />
    </Route>

    criarModificarRota(navbar, route);
}

export default cadastroParceiro;
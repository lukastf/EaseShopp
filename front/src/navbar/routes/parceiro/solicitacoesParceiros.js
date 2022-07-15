
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ListarSolicitarParceiros from '../../../listar/ListarSolicitarParceiros';
import { currentDateTime } from '../../../config';

const solicitacoesParceiros = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/solicitacoesParceiros">
        <ListarSolicitarParceiros
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default solicitacoesParceiros;
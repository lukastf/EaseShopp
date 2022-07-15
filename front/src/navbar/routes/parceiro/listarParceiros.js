
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ListarParceiros from '../../../listar/ListarParceiros';
import { currentDateTime } from '../../../config';

const listarParceiros = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/parceiros">
        <ListarParceiros 
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default listarParceiros;
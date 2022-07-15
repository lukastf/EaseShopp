
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ListarSolicitarConvenio from '../../../listar/ListarSolicitarConvenio';
import { currentDateTime } from '../../../config';

const solicitacoesConvenio = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/solicitacoesConvenio">
        <ListarSolicitarConvenio
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default solicitacoesConvenio;

import React from 'react';
import { Route } from 'react-router-dom';

import ListarIndicacoes from '../../../listar/ListarIndicacoes';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const listarIndicacoes = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/indicacoes">
        <ListarIndicacoes 
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default listarIndicacoes;
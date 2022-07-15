
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ListarCategorias from '../../../listar/ListarCategorias';
import { currentDateTime } from '../../../config';

const listarCategorias = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/listarCategorias">
        <ListarCategorias
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default listarCategorias;
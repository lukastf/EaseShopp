
import React from 'react';
import { Route } from 'react-router-dom';

import ListarUsuarios from '../../../listar/ListarUsuarios';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const listarUsuarios = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/usuarios">
        <ListarUsuarios 
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default listarUsuarios;

import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ListarResgates from '../../../listarResgate/ListarResgate';
import { currentDateTime } from '../../../config';

const listarResgates = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/resgates">
        <ListarResgates
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default listarResgates;
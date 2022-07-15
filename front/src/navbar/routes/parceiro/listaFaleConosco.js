
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ListarFaleConosco from '../../../listar/ListarFaleConosco';
import { currentDateTime } from '../../../config';

const listaFaleConosco = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/listaFaleConosco">
        <ListarFaleConosco
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default listaFaleConosco;
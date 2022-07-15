

import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';
import MinhasVendas from '../../../minhasVendas/MinhasVendas';
import { currentDateTime } from '../../../config';

const minhasVendas = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/minhasVendas">
        <MinhasVendas 
            navbar={navbar}
            parceiro={props}
        />
    </Route>

    criarModificarRota(navbar, route);
}

export default minhasVendas;
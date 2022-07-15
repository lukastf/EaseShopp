

import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';
import MeusProdutos from '../../../meusProdutos/MeusProdutos';
import { currentDateTime } from '../../../config';

const meusProdutos = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/meusProdutos">
        <MeusProdutos 
            navbar={navbar}
            parceiro={props}
        />
    </Route>

    criarModificarRota(navbar, route);
}

export default meusProdutos;
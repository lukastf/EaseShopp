
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ListarProdutosComprados from '../../../listarProdutosComprados/ListarProdutosComprados';
import { currentDateTime } from '../../../config';

const listarProdutosComprados = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/produtosComprados">
        <ListarProdutosComprados
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default listarProdutosComprados;
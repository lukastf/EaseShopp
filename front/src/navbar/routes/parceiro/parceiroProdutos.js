
import React from 'react';
import { Route } from 'react-router-dom';
import ParceiroProdutos from '../../../parceiroProdutos/ParceiroProdutos';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const parceiroProdutos = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path={"/parceiroProdutos/"+props._id}>
        <ParceiroProdutos
            navbar={navbar}
            parceiro={props}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default parceiroProdutos;
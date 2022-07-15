
import React from 'react';
import { Route } from 'react-router-dom';
import CadastroProduto from '../../../forms/cadastroProduto/CadastroProduto';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const cadastroProduto = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/cadastroProduto">
        <CadastroProduto 
            navbar={navbar}
            editar={false}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default cadastroProduto;
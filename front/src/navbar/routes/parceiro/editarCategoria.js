
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

import CadastrarCategoria from '../../../categorias/CadastrarCategoria';

const cadastro = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path={"/editarCategoria/"+props._id}>
        <CadastrarCategoria
            navbar={navbar}
            categoria={props}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default cadastro;
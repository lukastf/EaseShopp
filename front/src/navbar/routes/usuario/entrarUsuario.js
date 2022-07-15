
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import Entrar from '../../../forms/entrar/Entrar';
import { currentDateTime } from '../../../config';

const entrarUsuario = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/entrarUsuario">
        <Entrar 
            navbar={navbar}
            parceiroClicado={false} 
            cadastroOk={props.cadastroOk}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default entrarUsuario;
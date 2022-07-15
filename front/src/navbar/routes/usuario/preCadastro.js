import React from 'react';
import PreCadastro from '../../../forms/preCadastroUsuario/PreCadastro';
import { Route } from 'react-router-dom';
import { PrivateRouteCadastroUsuario } from './privateRoutes';
import criarModificarRota from '../criarModificarRota';
import PreCadastroErro from '../../../forms/preCadastroUsuario/PreCadastroErro';
import { currentDateTime } from '../../../config';

const preCadastro = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/preCadastro">
        <PreCadastro
            navbar={navbar}
            cadastroOk={props.cadastroOk}
        />
    </Route>;

    let route2 =
    <Route key={currentDateTime()} path="/cadastroUsuario">
        <PrivateRouteCadastroUsuario />
    </Route>;

    let route3 = 
    <Route key={currentDateTime()} path="/preCadastroErro">
        <PreCadastroErro />
    </Route>;

    criarModificarRota(navbar, route);
    criarModificarRota(navbar, route2);
    criarModificarRota(navbar, route3);
}

export default preCadastro;
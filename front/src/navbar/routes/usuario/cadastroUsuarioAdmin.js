import React from 'react';
import CadastroUsuario from '../../../forms/cadastroUsuario/CadastroUsuario';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';
import PreCadastroUsuarioMultiplos from '../../../forms/preCadastroUsuario/PreCadastroUsuarioMultiplos';
import { currentDateTime } from '../../../config';

const cadastroUsuarioAdmin = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/cadastroUsuario">
        <CadastroUsuario
            navbar={navbar}
            usuario={props}
            editar={false}
        />
        <PreCadastroUsuarioMultiplos
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default cadastroUsuarioAdmin;
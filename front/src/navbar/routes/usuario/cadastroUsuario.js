import React from 'react';
import { PrivateRouteCadastroUsuario } from './privateRoutes';
import CadastroUsuario from '../../../forms/cadastroUsuario/CadastroUsuario';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const cadastroUsuario = (navbar, props) => {

    let route = 
    <PrivateRouteCadastroUsuario key={currentDateTime()} path="/cadastroUsuario" cadastroPermission={navbar.state.cadastroPermission}>
        <CadastroUsuario
            navbar={navbar}
            usuario={props}
            editar={false}
        />
    </PrivateRouteCadastroUsuario>;

    criarModificarRota(navbar, route);
}

export default cadastroUsuario;
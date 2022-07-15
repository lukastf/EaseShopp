
import React from 'react';
import { Route } from 'react-router-dom';
import RemoveUsuario from '../../../forms/cadastroUsuario/RemoveUsuario';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const removerUsuario = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path={"/removerUsuario/"+props._id}>
        <RemoveUsuario
            navbar={navbar}
            usuario={props}
            editar={true}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default removerUsuario;
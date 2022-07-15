import React from 'react';
import { Route } from 'react-router-dom';
import CadastroUsuario from '../../../forms/cadastroUsuario/CadastroUsuario';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const editarUsuario = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path={"/editarUsuario/"+props._id}>
        <CadastroUsuario 
            navbar={navbar}
            usuario={props}
            editar={true}
        />
    </Route>;
    
    criarModificarRota(navbar, route);
}

export default editarUsuario;
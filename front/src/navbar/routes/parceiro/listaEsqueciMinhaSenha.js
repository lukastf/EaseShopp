
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ListarEsqueciMinhaSenha from '../../../listar/ListarEsqueciMinhaSenha';
import { currentDateTime } from '../../../config';

const listaEsqueciMinhaSenha = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/listaEsqueciMinhaSenha">
        <ListarEsqueciMinhaSenha
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default listaEsqueciMinhaSenha;

import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import EsqueciMinhaSenha from '../../../forms/entrar/EsqueciMinhaSenha';
import { currentDateTime } from '../../../config';

const esqueciMinhaSenha = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/esqueciMinhaSenha">
        <EsqueciMinhaSenha 
            navbar={navbar}
            //parceiroClicado={false} 
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default esqueciMinhaSenha;
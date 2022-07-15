
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from './criarModificarRota';
import Mensagem from '../../mensagem/Mensagem';
import { currentDateTime } from '../../config';

const mensagem = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/mensagem">
        <Mensagem 
            navbar={navbar}
            props={props} 
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default mensagem;
import React from 'react';
import { Route } from 'react-router-dom';
import Conta from '../../conta/Conta';
import criarModificarRota from './criarModificarRota';
import { currentDateTime } from '../../config';

const conta = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/conta">
        <Conta
            navbar={navbar}
            conta={props}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default conta;
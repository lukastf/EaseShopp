
import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from './criarModificarRota';
import { currentDateTime } from '../../config';
import ValidarEmail from '../../validarEmail/ValidarEmail';

const validarEmail = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/validarEmail">
        <ValidarEmail
            navbar={navbar}
            props={props}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default validarEmail;
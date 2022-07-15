
import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';
import ComoComprar from '../../../comoComprar/ComoComprar';

const comoComprar = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/comoComprar">
        <ComoComprar
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default comoComprar;
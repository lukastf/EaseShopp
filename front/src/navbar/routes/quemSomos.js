
import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from './criarModificarRota';
import { currentDateTime } from '../../config';
import QuemSomos from '../../quemSomos/QuemSomos';

const quemSomos = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/quemSomos">
        <QuemSomos
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default quemSomos;
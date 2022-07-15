
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import Sacar from '../../../sacar/Sacar';
import { currentDateTime } from '../../../config';

const sacar = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/sacar">
        <Sacar 
            navbar={navbar}
            //parceiroClicado={false} 
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default sacar;
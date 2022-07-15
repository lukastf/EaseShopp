
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import Extrato from '../../../Extrato/Extrato';
import { currentDateTime } from '../../../config';

const extrato = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/extrato">
        <Extrato 
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default extrato;
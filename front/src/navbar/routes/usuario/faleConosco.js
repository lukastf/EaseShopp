
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';

import FaleConosco from '../../../FaleConosco/FaleConosco';
import { currentDateTime } from '../../../config';

const extrato = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/faleConosco">
        <FaleConosco 
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default extrato;

import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ContaResgate from '../../../ContaResgate/ContaResgate';
import { currentDateTime } from '../../../config';

const contaResgate = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/contaResgate">
        <ContaResgate 
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default contaResgate;
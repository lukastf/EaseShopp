
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import ExtratoSaques from '../../../ExtratoSaques/ExtratoSaques';
import { currentDateTime } from '../../../config';

const extratoSaques = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/extratoSaques">
        <ExtratoSaques 
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default extratoSaques;

import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from '../criarModificarRota';
import SejaUmParceiro from '../../../sejaUmParceiro/SejaUmParceiro';
import { currentDateTime } from '../../../config';

const sejaUmParceiro = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/sejaUmParceiro">
        <SejaUmParceiro
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default sejaUmParceiro;

import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';

import Favoritos from '../../../favoritos/Favoritos';
import { currentDateTime } from '../../../config';

const favoritos = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/favoritos">
        <Favoritos
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default favoritos;
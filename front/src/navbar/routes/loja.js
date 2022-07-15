import React from 'react';
import { Route } from 'react-router-dom';

import Loja from '../../loja/Loja';
import criarModificarRota from './criarModificarRota';
import { currentDateTime } from '../../config';

const loja = (navbar, props) => {
    
    let route = 
    <Route key={currentDateTime()} path="/loja">
        <Loja
            navbar={navbar}
            />
    </Route>;

    criarModificarRota(navbar, route);
}

export default loja;
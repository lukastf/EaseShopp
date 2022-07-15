
import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';

import Carrinho from '../../../carrinho/Carrinho';
import { currentDateTime } from '../../../config';

const carrinho = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/carrinho">
        <Carrinho
            navbar={navbar}
        />
    </Route>;
    
    criarModificarRota(navbar, route);
}

export default carrinho;
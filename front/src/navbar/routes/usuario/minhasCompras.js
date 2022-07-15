
import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';
import MinhasCompras from '../../../minhasCompras/MinhasCompras';

const minhasCompras = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/minhasCompras">
        <MinhasCompras 
            navbar={navbar}
            usuario={props}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default minhasCompras;
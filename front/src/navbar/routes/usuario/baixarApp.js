
import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';
import BaixarApp from '../../../baixarApp/BaixarApp';

const baixarApp = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/baixarApp">
        <BaixarApp
            navbar={navbar}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default baixarApp;
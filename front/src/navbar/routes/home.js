import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../home/Home';
import criarModificarRota from './criarModificarRota';
import { currentDateTime } from '../../config';

const home = (navbar, props) => {
    
    let route = 
    <Route key={currentDateTime()} path="/">
        <Home
            navbar={navbar}
            />
    </Route>;

    criarModificarRota(navbar, route);
}

export default home;
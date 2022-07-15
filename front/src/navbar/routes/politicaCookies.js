
import React from 'react';
import { Route } from 'react-router-dom';

import criarModificarRota from './criarModificarRota';
import PoliticaCookies from '../../cookieConsent/PoliticaCookies';
import { currentDateTime } from '../../config';

const politicaCookies = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/politica-de-cookies-easeshopp">
        <PoliticaCookies 
            navbar={navbar}
            //props={props} 
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default politicaCookies;
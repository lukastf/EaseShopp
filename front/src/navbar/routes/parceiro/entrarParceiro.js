
import React from 'react';
import { Route } from 'react-router-dom';
import criarModificarRota from '../criarModificarRota';
import Entrar from '../../../forms/entrar/Entrar';
import { currentDateTime } from '../../../config';

const entrarParceiro = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path="/entrarParceiro">
        <Entrar 
            navbar={navbar}
            parceiroClicado={true} 
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default entrarParceiro;
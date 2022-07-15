import React from 'react';
import { Route } from 'react-router-dom';
import RemoveProduto from '../../../forms/cadastroProduto/RemoveProduto';
import criarModificarRota from '../criarModificarRota';
import { currentDateTime } from '../../../config';

const removerProduto = (navbar, props) => {

    let route = 
    <Route key={currentDateTime()} path={"/removerProduto/"+props._id}>
        <RemoveProduto
            navbar={navbar}
            produto={props}
            editar={true}
        />
    </Route>;

    criarModificarRota(navbar, route);
}

export default removerProduto;
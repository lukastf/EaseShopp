

import React from 'react';

import Listar from '../listarBase/Listar';

export default function ListarResgates(props) {

    return (
        <>
        <Listar 
            navbar={props.navbar}
            title={"Produtos Comprados"}
            route={"/produtos/produtosComprados"}
            removerDireto={true}
        />
        </>
    );
}
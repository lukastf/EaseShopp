

import React from 'react';

import Listar from '../listarBase/Listar';
import setRoute from '../navbar/routes/setRoute';

export default function ListarResgates(props) {

    const click = () => {
        setRoute(props.navbar, "/produtosComprados");
    }

    return (
        <>
        <button
            type="button" 
            onClick={click}
            className="btn btn-primary btn-lg btn-block"> 
            Produtos Comprados 
        </button>
        <Listar 
            navbar={props.navbar}
            title={"Listar Resgates"}
            route={"/usuarios/saques"}
            removerDireto={true}
        />
        </>
    );
}
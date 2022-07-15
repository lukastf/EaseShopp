import React from 'react';
import Listar from '../listarBase/Listar';

class ListarSolicitarParceiro extends React.Component {

    render(){
        return(
            <Listar 
                navbar={this.props.navbar}
                title={"Solicitações Parceiros"}
                route={"/parceiros/solicitarParceiros"}
                removerDireto={true}
            />
        )
    }
}

export default ListarSolicitarParceiro;
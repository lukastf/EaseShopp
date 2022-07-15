import React from 'react';
import Listar from '../listarBase/Listar';

class ListarParceiros extends React.Component {

    render(){
        return(
            <Listar 
                navbar={this.props.navbar}
                title={"Listar Parceiros"}
                route={"/parceiros"}
                editar={"/editarParceiro"}
                remover={"/removerParceiro"}
                contador={"Numero de Parceiros:"}
            />
        )
    }
}

export default ListarParceiros;
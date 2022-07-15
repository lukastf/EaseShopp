
import React from 'react';
import Listar from '../listarBase/Listar';

class ListarUsuarios extends React.Component {

    render(){
        return(
            <Listar 
                navbar={this.props.navbar}
                title={"Listar Usuarios"}
                route={"/usuarios"}
                editar={"/editarUsuario"}
                remover={"/removerUsuario"}
                contador={"Numero de Usuarios:"}
            />
        )
    }
}

export default ListarUsuarios;
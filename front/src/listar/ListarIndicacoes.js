
import React from 'react';
import Listar from '../listarBase/Listar';

class ListarUsuarios extends React.Component {

    render(){
        return(
            <Listar 
                navbar={this.props.navbar}
                title={"Listar Indicações"}
                route={"/usuarios/indicacoes"}
                removerDireto={true}
                //editar={"/editarUsuario"}
                //remover={"/removerIndicacao"}
            />
        )
    }
}

export default ListarUsuarios;
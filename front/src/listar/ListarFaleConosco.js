import React from 'react';
import Listar from '../listarBase/Listar';

class ListarFaleConosco extends React.Component {

    render(){
        return(
            <Listar 
                navbar={this.props.navbar}
                title={"Fale Conosco Mensagens"}
                route={"/usuarios/faleConosco"}
                removerDireto={true}
            />
        )
    }
}

export default ListarFaleConosco;
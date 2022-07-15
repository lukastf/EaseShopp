import React from 'react';
import Listar from '../listarBase/Listar';

class ListarFaleConosco extends React.Component {

    render(){
        return(
            <Listar 
                navbar={this.props.navbar}
                title={"Esqueci Minha Senha Mensagens"}
                route={"/usuarios/esqueciMinhaSenha"}
                removerDireto={true}
            />
        )
    }
}

export default ListarFaleConosco;
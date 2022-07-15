import React from 'react';
import Listar from '../listarBase/Listar';
import setRoute from '../navbar/routes/setRoute';

class ListarSolicitarConvenio extends React.Component {

    click = () => {
        setRoute(this.props.navbar, "/solicitacoesParceiros");
    }

    render(){
        return(
            <>
            <button
                type="button" 
                onClick={this.click}
                className="btn btn-primary btn-lg btn-block"> 
                Solicitações Parceiros 
            </button>
            <Listar 
                navbar={this.props.navbar}
                title={"Solicitações Convenio"}
                route={"/usuarios/solicitarConvenio"}
                removerDireto={true}
            />
            </>
        )
    }
}

export default ListarSolicitarConvenio;
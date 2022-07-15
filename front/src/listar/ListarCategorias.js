import React from 'react';
import Listar from '../listarBase/Listar';
import { Link } from 'react-router-dom';

class ListarCategorias extends React.Component {

    render(){
        return(
            <>
            <div className="row form-group justify-content-center col-12 mt-5">
                <Link 
                    className="btn btn-success btn-lg m-4" 
                    type="button"
                    to="/cadastroCategoria" 
                    //onClick={sendForm} 
                    //disabled={this.state.buttonDisabled}
                    >  
                    Criar Categoria
                </Link>
            </div>
            <Listar 
                navbar={this.props.navbar}
                title={"Listar Categorias"}
                route={"/produtos/categorias/listar"}
                editar={"/editarCategoria"}
                removerDireto={true}
            />
            </>
        )
    }
}

export default ListarCategorias;
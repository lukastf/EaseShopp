import axios from 'axios';
import React from 'react';
import { serverUrl } from '../../config';

import cadastrarMultiplos from './cadastrarMultiplos';

class PreCadastroUsuarioMultiplos extends React.Component {

    constructor(props){

        super(props);

        this.state = {

            multiUsuariosValue: "",
            multiUsuarios: null,
            cadastroResult: ""
        }
    }

    cadastrarMultiplos = (e) => {

        cadastrarMultiplos(this, e);
    }

    importarUsuarios = async (e) => {

        e.preventDefault();

        let _idParceiro = this.props.navbar.props.app.state._id;
        let senha = this.props.navbar.props.app.state.senha;


        let formData = new FormData();

        formData.append("_idParceiro", _idParceiro);
        formData.append("senha", senha);
        //formData.append("multi"+layoutNome, file, fileValue);

        return await axios.post(serverUrl + "/usuarios/multi2" , formData)
        .then((response) => { console.log("ok"); })
        .catch((error) => { console.log(error); });
    }

    changeHandler = (e) => {
        
        switch(e.target.id) {

            case "multiUsuarios":

                this.setState({
                    multiUsuariosValue: e.target.value,
                    multiUsuarios: e.target.files[0],
                    multiProdutosError: ""
                });

            break;
                
            default:
        }
    } 

    render() {
        return(
            <div className="row justify-content-center col-12">

                <div className="col-12 text-center">
                    <h1 className="col-12">Pre Cadastro Multiplos ( Org Card )</h1>

                    <div className="row justify-content-center col-12 my-5">
                        <input type="file" className="" id="multiUsuarios" onChange={this.changeHandler} value={this.state.multiUsuariosValue}/>
                    </div>

                    <div className="row justify-content-center col-12 mt-5">
                        <button type="button" className="btn btn-primary" onClick={this.cadastrarMultiplos}>Cadastrar Multiplos </button>
                    </div>
                    <div className="row justify-content-center col-12 mt-5">
                        <button type="button" className="btn btn-primary" onClick={this.importarUsuarios}>Importar Multiplos da pasta USUARIOS </button>
                    </div>
                </div>
                {this.state.cadastroResult}
            </div>
        );
    }
}

export default PreCadastroUsuarioMultiplos;
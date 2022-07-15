import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch

} from '@fortawesome/free-solid-svg-icons';

import Paginacao from '../paginacao/Paginacao';
import getObjs from './getObjs';
import { serverUrl } from '../config';
import axios from 'axios';

class Listar extends React.Component {
    
    itensPage = 16;
    pageId = 0;
    position = 0;

    pesquisaString = "undefined";

    constructor(props) {

        super(props);

        this.state = {

            listaObjs: "",
            lista: "",
            listaDetalhes: "",

            paginacao: 
            <Paginacao 
                url={serverUrl + this.props.route +"/admin/" + this.props.navbar.props.app.state._id + 
                "/" + this.props.navbar.props.app.state.senha +
                "/itensPage/" + this.itensPage + "/pesquisaString/" + this.pesquisaString }
                itensPage={this.itensPage}
                atualizarObjs={this.getObjs}
                changePageId={this.changePageId}
            />,

            contador: 0
        }
    }

    getContador = () => {

        let _id = this.props.navbar.props.app.state._id;
        let senha = this.props.navbar.props.app.state.senha;

        axios.get(serverUrl + this.props.route +"/contador/admin/" + _id + "/" + senha)
        .then((response) => {
            // handle success
            console.log(response.data.contador);

            this.setState({
                contador: response.data.contador
            });
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .then(() => {
            // always executed
        });
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        getObjs(this, this.itensPage, this.pageId);
        this.getContador();
    }

    pesquisar = (e) => {

        this.resetPaginacao();
        
        this.pesquisaString = e.target.value;

        if (e.target.value === "") {

            this.pesquisaString = "undefined";
        }

        getObjs(this, this.itensPage, this.pageId);
    }

    changePageId = (id) => {

        this.pageId = id;
    }

    getObjs = (itensPage, pageId) => {
        getObjs(this, itensPage, pageId);
    }

    paginacao = (url) => {

        this.setState({
          paginacao: 
          <Paginacao 
            url={url}
            itensPage={this.itensPage}
            atualizarObjs={this.getObjs}
            changePageId={this.changePageId}
          />
        });
    }

    resetPaginacao = () => {

        this.setState({
            paginacao: ""
        });
    }

    contadorRender = () => {

        if (typeof this.props.contador === "undefined") return;

        return(
        <div className="row col-12 justify-content-center">
            <h3>{this.props.contador} {this.state.contador}</h3>
        </div>
        );
    }

    render(){
        return(
            <div className="col-12 justify-content-center mt-5">
                <h1 className="col-12 text-center"> {this.props.title} </h1>

                <div className="row justify-content-center m-2">
                    <div className="input-group input-group-lg col-9 col-md-5 m-5">
                        <input type="text" className="form-control" aria-label="Large" placeholder="Pesquisar" aria-describedby="inputGroup-sizing-sm"
                        id="pesquisar"
                        onChange={this.pesquisar} />
                        <div className="input-group-append">
                            <span className="input-group-text" id="inputGroup-sizing-lg"><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                    </div>
                </div>

                {this.contadorRender()}

                {this.state.paginacao}
                
                <div className="row col-12 justify-content-center mx-auto mt-5">
                    <div className="col-12 col-md-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            {this.state.lista}
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="tab-content" id="nav-tabContent">
                            {this.state.listaDetalhes}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Listar;


import React from 'react';

import styles from './FaleConosco.module.css';
import InputNome from '../forms/inputs/Nome';
import InputCidade from '../forms/inputs/Cidade';
import InputEmail from '../forms/inputs/Email';
import getAccessLevel from '../usuario/getAccessLevel';
import SideNavbar from '../sideNavbar/SideNavbar';
import SaldoCartao from '../conta/SaldoCartao';
import { serverUrl } from '../config';
import { sucessoEnviado, erroEnviado } from '../forms/cadastroResult';
import Axios from 'axios';


class FaleConosco extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            accessLevel: 0,

            nome:this.props.navbar.props.app.state.nome,
            cidade:this.props.navbar.props.app.state.cidade,
            email:this.props.navbar.props.app.state.email,
            duvida: "",
            mensagem: "",

            cadastroResult: "",
            hide: ""
        }
    }

    componentDidMount () {

        getAccessLevel(this);
    }

    sideNavbar = () => {
        
        if (this.state.accessLevel === 0) {

            return <SideNavbar navbar={this.props.navbar} hideSidebar={this.state.hideSidebar} />

        }
    }

    saldoCartao = () => {

        if (this.state.accessLevel === 0) {

            return <SaldoCartao />
        }
    }

    changeDuvida = (e) => {

        this.setState({
            duvida: e.target.value
        })
    }

    changeMensagem = (e) => {

        this.setState({
            mensagem: e.target.value
        })
    }

    sendForm = (e) => {

        e.preventDefault();

        let obj = this.state;

        Axios.post(serverUrl + "/usuarios/faleConosco", obj)
        .then((response) => {

            sucessoEnviado(this);
        })
        .catch((error) => {

            erroEnviado(this, error);
        });
    }

    render(){
        return(
            <div className="row col-12">

                {this.sideNavbar()}

                <h1 className={"col-6 mt-5 " + styles.titulo} > Fale Conosco </h1>

                {this.saldoCartao()}
                
                <div className={"row col-10 mt-5 " + this.state.hide + " " + styles.corpo}>

                    <table className={"table table-bordered mb-0 " + styles.tableColor }>
                        <thead>
                            <tr>
                                <th> Contato </th>
                            </tr>
                        </thead>
                    </table>

                    <table className={"table table-bordered "}>

                        <thead>
                            <tr>
                                <td><InputNome context={this} cols={""} /></td>
                                <td><InputCidade context={this} cols={""} /></td>
                                <td><InputEmail context={this} cols={""}/></td>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                            </tr>
                        </tbody>
                    </table>

                    <div className="row col-12  justify-content-center">
                        <label htmlFor="nome" className="col-12 text-center">Duvida</label>
                        <input type="text" className="form-control col-6"
                        placeholder="Duvida" maxLength="60" value={this.state.duvida} onChange={this.changeDuvida} required />
                    </div>

                    <div className="row col-12">
                        <label htmlFor="nome">Mensagem</label>
                        <textarea className="form-control" rows="5" onChange={this.changeMensagem} value={this.state.mensagem}></textarea>
                    </div>

                    <div className="row col-12 justify-content-end mt-5">
                        <button className="btn btn-success btn-lg " onClick={this.sendForm}>Enviar</button>
                    </div>

                </div>
                
                <div className="row col-12 justify-content-center">
                    {this.state.cadastroResult}
                </div>
            </div>
        );
    }
}

export default FaleConosco;

import React from 'react';

import SideNavbar from '../sideNavbar/SideNavbar';
import SaldoCartao from '../conta/SaldoCartao';
import { dataNascMask } from '../forms/utilidades/masks';

import styles from './Extrato.module.css';
import Paginacao from '../paginacao/Paginacao';

import getAccessLevel from '../usuario/getAccessLevel';
import pesquisaExtrato from './pesquisaExtrato';
import getExtrato from './getExtrato';

class Extrato extends React.Component {

    itensPage = 10;
    pageId = 0;
    listaUsariosSelectedPosition = 0;

    parceiro = "undefined";
    pesquisaString = "undefined";
    categoria = "undefined";

    constructor(props) {

        super(props);

        this.state = {

            dataInicio: "",
            dataTermino: "",
            accessLevel: 0,

            produtosComprados: "",
            extrato: []
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

    chageInicio = (e) => {

        let time = dataNascMask(e.target.value);

        this.setState({
            dataInicio: time
        })

        this.convertTime(time);
    }

    changeTermino = (e) => {

        this.setState({
            dataTermino:  dataNascMask(e.target.value)
        })
    }

    convertTime = (time) => {

        time = time.split("/");

        let year = parseInt(time[2]);
        let month = parseInt(time[1]) -1;
        let day = parseInt(time[0]);

        let d = new Date(year, month, day);

        return d.getTime();

    }

    changePageId = (id) => {

        this.pageId = id;
    }

    getExtrato = (itensPage, pageId) => {
        getExtrato(this, itensPage, pageId);
    }

    paginacao = (url) => {

        this.setState({
          paginacao: 
          <Paginacao
            url={url}
            itensPage={this.itensPage}
            atualizarObjs={this.getExtrato}
            changePageId={this.changePageId}
          />
        });
    }

    resetPaginacao = () => {

        this.setState({
          paginacao: ""
        });
    }

    pesquisaExtrato = () => {
        pesquisaExtrato(this);
    }

    render(){
        return(
            <div className="row col-12">

                {this.sideNavbar()}

                <h1 className={"col-6 mt-5 " + styles.titulo} > Extrato </h1>

                {this.saldoCartao()}

                <div className={"row col-9 " + styles.corpo}>

                    <p className={"col-12 p-0 "}>Digite as datas de início e término da consulta</p>

                    <form className="form-inline">

                        <input type="text" className="form-control" id="inicio" placeholder="Data Inicio dd/mm/aaaa" name="inicio" maxLength="10"
                        value={this.state.dataInicio} onChange={this.chageInicio} />

                        <label className="mx-3"> Até: </label>

                        <input type="text" className="form-control" id="termino" placeholder="Data Termino dd/mm/aaaa" name="termino" maxLength="10"
                        value={this.state.dataTermino} onChange={this.changeTermino} />
                        <button type="button" className="btn btn-primary ml-3" onClick={this.pesquisaExtrato}> Pesquisar </button>

                    </form>
                </div>

                <div className={"row col-10 justify-content-center " + styles.corpo}>
                    {this.state.paginacao}
                </div>

                <div className={"row col-10 mt-5 " + styles.corpo}>

                    <table className={"table table-bordered mb-0 " + styles.tableColor }>
                        <thead>
                            <tr>
                                <th>Extrato do período {this.state.dataInicio} até {this.state.dataTermino}</th>
                            </tr>
                        </thead>
                    </table>

                    <table className={"table table-bordered "}>

                        <thead className={styles.tableColor}>
                            <tr>
                                <th>dia</th>
                                <th>Parceiro</th>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Valor Unitario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.extrato}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Extrato;
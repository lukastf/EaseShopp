import React from 'react';

import styles from './Sacar.module.css';
import getAccessLevel from '../usuario/getAccessLevel';
import SideNavbar from '../sideNavbar/SideNavbar';
import SaldoCartao from '../conta/SaldoCartao';
import { serverUrl } from '../config';
//import { sucessoEnviado, erroEnviado } from '../forms/cadastroResult';
import Axios from 'axios';
import qr_code from '../carrinho/btnFinalizarCompra/qr_code';
import setRoute from '../navbar/routes/setRoute';
import routes from '../navbar/routes/routes';
import { moneyMask } from '../forms/utilidades/masks';


class Sacar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            accessLevel: 0,

            cadastroResult: "",
            hideTerms: "",
            hideForm: "",
            cadastrarContaBtn: "disabled",

            valor: "",
            valorResgate: "",
            check: false,
            valorInvalido: <p style={{color:"red"}}> O valor deve ser maior que 100,00 </p>,
            btnSacarDisabled: true,

            _idUsuario: this.props.navbar.props.app.state._id,
            senha: this.props.navbar.props.app.state.senha
        }
    }

    getContaResgate = () => {

        Axios.get(serverUrl + "/usuarios/contaResgate/" + this.state._idUsuario + "/" + this.state.senha)
        .then((response) => {

            let res = response.data;

            this.setState({
                _id: res._id,
                tipoConta: res.tipoConta,
                banco: res.banco,
                agencia: res.agencia,
                numeroConta: res.numeroConta,
                digito: res.digito,
                nome: res.nome,
                cpf: res.cpf,

                hideTerms: "d-none",
                hideForm: ""

            });
        })
        .catch((error) => {

            setRoute(this.props.navbar, "/contaResgate");
            routes(this.props.navbar, "", "/contaResgate");
        });
    }

    componentDidMount () {

        getAccessLevel(this);
        this.getContaResgate();
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

    changeValor = (e) => {

        let valor = moneyMask(e.target.value);

        this.setState({
            valor: valor
        });

        let checkValor = valor.replace(",",".");
        checkValor = parseFloat(checkValor);

        this.setState({
            valorInvalido: "",
            //btnSacarDisabled: false
        });

        if (this.state.check && checkValor > 99) this.setState({ btnSacarDisabled: false });

        if (checkValor < 100) {

            this.setState({
                valorInvalido: <p style={{color:"red"}}> O valor deve ser maior que 100,00 </p>,
                btnSacarDisabled: true
            });
        }

        //let valorResgate = checkValor * 0.9;
        let valorResgate = checkValor * 0.1;

        if (isNaN(valorResgate)) valorResgate = 0

        valorResgate = valorResgate.toFixed(2);
        valorResgate = valorResgate.toString();
        valorResgate = valorResgate.replace(".", ",");
        
        //valorResgate = moneyMask(valorResgate);
        
        this.setState({
            valorResgate: valorResgate
        });
    }

    /*sendForm = (e) => {

        e.preventDefault();

        let obj = {

            _id: this.state._id,
            tipoConta: this.state.tipoConta,
            banco: this.state.banco,
            agencia: this.state.agencia,
            numeroConta: this.state.numeroConta,
            digito: this.state.digito,
            nome: this.state.nome,
            cpf: this.state.cpf,
            _idUsuario: this.state._idUsuario,
            senha: this.state.senha
        }

        let axiosHttp = Axios.post;
        let url = serverUrl + "/usuarios/contaResgate"

        if (this.state._id !== "") {
            axiosHttp = Axios.put;
            url = serverUrl + "/usuarios/contaResgate/" + this.state._idUsuario;
        }

        //console.log(obj);

        axiosHttp(url, obj)
        .then((response) => {

            this.setState({
                hideForm: "d-none"
            });

            sucessoEnviado(this);
        })
        .catch((error) => {

            console.log(error);

            erroEnviado(this, error);
        });
    }*/

    changeCheck = () => {

        let check = !this.state.check

        this.setState({
            check: check
        });

        let v =  this.state.valor.replace(",",".");
        v = parseFloat(v);

        if (check && v > 99) this.setState({ btnSacarDisabled: false });
        else this.setState({ btnSacarDisabled: true });
    }

    render(){
        return(
            <div className="row col-12">

                {this.sideNavbar()}

                <h1 className={"col-6 mt-5 " + styles.titulo} > Resgatar Saldo</h1>

                {this.saldoCartao()}
                
                <div className={"row col-10 mt-5 " + this.state.hideForm + " " + styles.corpo}>

                    <div className="row col-12 justify-content-center mt-5">
                        <div className="col-md-4">
                            <label htmlFor="valor">Valor em R$</label>
                            <input 
                                type="text" 
                                className={"form-control " + this.state.classError} 
                                placeholder="Valor" 
                                maxLength="10" 
                                onChange={this.changeValor} 
                                value={this.state.valor} 
                                required 
                            />
                            {this.state.valorInvalido}

                            <p>* para qualquer resgate é cobrado 10% de custo operacional</p>
                            <label htmlFor="valor">Custo Operacional R$</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                //placeholder="Valor" 
                                //maxLength="10" 
                                //onChange={this.changeValor} 
                                disabled={true}
                                value={this.state.valorResgate}  
                            />

                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" onChange={this.changeCheck} />Estou ciente e concordo com a operação
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row col-12 justify-content-center mt-5">
                        <div className="col-md-4">
                            
                        </div>
                    </div>

                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Finalizar resgate no aplicativo</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-auto">
                                {qr_code(this, this.state.valor, true)}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row col-12 justify-content-end mt-5">
                        <button className="btn btn-success btn-lg " 
                        data-toggle="modal" data-dismiss="modal" data-target="#exampleModalCenter"
                        disabled={this.state.btnSacarDisabled}
                        >Resgatar</button>
                    </div>

                </div>
                
                <div className="row col-12 justify-content-center">
                    {this.state.cadastroResult}
                </div>
            </div>
        );
    }
}

export default Sacar;
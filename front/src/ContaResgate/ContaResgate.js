

import React from 'react';

import styles from './ContaResgate.module.css';
import getAccessLevel from '../usuario/getAccessLevel';
import SideNavbar from '../sideNavbar/SideNavbar';
import SaldoCartao from '../conta/SaldoCartao';
import { serverUrl } from '../config';
import { sucessoEnviado, erroEnviado } from '../forms/cadastroResult';
import Axios from 'axios';
import { cpfMask } from '../forms/utilidades/masks';


class ContaResgate extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            accessLevel: 0,

            cadastroResult: "",
            hideTerms: "",
            hideForm: "d-none",
            cadastrarContaBtn: "disabled",
            
            _id: "",
            tipoConta: "",
            banco: "",
            agencia: "",
            numeroConta: "",
            digito: "",
            nome: "",
            cpf: this.props.navbar.props.app.state.cpf,

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

                hideTerms: "d-none",
                hideForm: ""

            });
        })
        .catch((error) => {
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

    changeTipoConta = (e) => {

        this.setState({
            tipoConta: e.target.value
        });
    }

    changeBanco = (e) => {

        this.setState({
            banco: e.target.value
        });
    }

    changeAgencia = (e) => {

        this.setState({
            agencia: e.target.value
        });
    }

    changeNumeroConta = (e) => {

        this.setState({
            numeroConta: e.target.value
        });
    }

    changeDigito = (e) => {

        this.setState({
            digito: e.target.value
        });
    }

    changeNome = (e) => {

        this.setState({
            nome: e.target.value
        });
    }

    changeCpf = (e) => {

        let cpf = cpfMask(e.target.value)

        this.setState({
            cpf: cpf
        });
    }

    concordar = () => {
        this.setState({
            cadastrarContaBtn: ""
        });
    }

    cadastrarConta = () => {

        if (this.state.cadastrarContaBtn !== "") return;

        this.setState({
            hideTerms: "d-none",
            hideForm: ""
        });
    }

    sendForm = (e) => {

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
    }

    render(){
        return(
            <div className="row col-12">

                {this.sideNavbar()}

                <h1 className={"col-6 mt-5 " + styles.titulo} > Conta de Resgate</h1>

                {this.saldoCartao()}

                <div className={"row col-10 mt-5 " + this.state.hideTerms + " " + styles.corpo}>

                    <div className="col-12 text-center justify-content-center mt-3">

                        <h4 className="my-5">Política de Cancelamentos e Ressarcimentos</h4>

                        <div className="jumbotron overflow-auto text-left" style={{height: "20rem"}}>

                        <p>O cancelamento de um pedido pode ser solicitado a qualquer momento antes do pedido ser entregue ou em até 07 (sete) dias após o recebimento do produto, conforme prevê o artigo 49 do CDC. 
                        A solicitação deve ser feita pela nossa Central de Atendimento (site da EASE ou pela página do cliente em nosso site da EASE (conta do cliente).
                        Havendo necessidade em cancelar um pedido que já está em rota de entrega, deve-se fazer a recusa do pedido no ato do recebimento. Se o pedido não for recusado, a EASE entrará em contato com o cliente para entender como ele quer proceder e, caso ainda haja interesse em cancelar, o cancelamento seguirá o processo regular de troca ou devolução, desde que atendidas as regras desse processo, as quais podem ser acessadas no site do estabelecimento que realizou a venda.
                        A solicitação de cancelamento será analisada e, de acordo com a situação atual do pedido, pode ocorrer o processo de cancelamento ou de troca/devolução.
                        Ao solicitar o cancelamento de um pedido em que o pagamento já foi efetuado, a restituição será realizada na mesma modalidade em que o pagamento foi efetuado, não cabendo, em nenhuma hipótese, a restituição do valor de forma distinta.
                        Em caso de devolução de um produto já entregue, as regras para restituição do valor pago permanecem as mesmas.
                        </p>

                        <p><b>Pedidos pagos com boleto bancário</b></p>
                        <p>Os pedidos pagos por meio de boleto podem ser restituídos por depósito bancário na conta corrente do titular da compra. Na impossibilidade de realizar esse procedimento, a EASE se dispõe a realizar uma Ordem de Pagamento ao titular da compra, por meio do Banco (NOME DO BANCO), em até 10 (dez) dias úteis, a contar da data do cancelamento efetivo do pedido. Referido valor ficará disponível para saque em qualquer agência do banco (NOME DO BANCO) até 30 (trinta) após sua emissão.
                        Em caso de boleto não pago até a data de vencimento, será possível gerar um novo boleto.
                        Se este também não for pago, o pedido será automaticamente cancelado.
                        </p>

                        <p>Pedidos pagos com cartão de débito ou crédito (cartão EASE e outros)
                        Os pedidos pagos na modalidade “cartão de crédito/débito” serão restituídos por meio de estorno a ser realizado pela administradora de cartões. Após a confirmação do cancelamento pela EASE com a administradora do cartão, o prazo para restituição/estorno é de 2 (duas) a 3 (três) faturas subsequentes, a depender da política da respectiva administradora de cartões.
                        Mesmo que o pedido tenha sido parcelado no momento da compra, o valor é integralmente devolvido à administradora do cartão, sendo restituídas ao cliente as parcelas já pagas. Em caso de cartão de crédito recusado pela administradora, será possível escolher um novo cartão para realizar o pagamento. Se este também for recusado, o pedido será automaticamente cancelado. 
                        </p>

                        <p><b>Pedidos pagos com mais de uma forma de pagamento</b></p>
                        <p>Os pedidos pagos com mais de uma forma de pagamento terão a restituição efetuada em cada um dos meios utilizados de forma proporcional às formas de pagamento utilizadas no momento da compra. Havendo necessidade em cancelar um pedido que já está em rota de entrega, deve-se fazer a recusa do pedido no ato do recebimento. Se o pedido não for recusado, a EASE entrará em contato com o cliente para entender como ele quer proceder e, caso ainda haja interesse em cancelar, o cancelamento seguirá o processo regular de troca ou devolução, desde que atendidas as regras desse processo, as quais podem ser acessadas no site do estabelecimento que realizou a venda.
                        A solicitação de cancelamento será analisada e, de acordo com a situação atual do pedido, pode ocorrer o processo de cancelamento ou de troca/devolução.
                        Ao solicitar o cancelamento de um pedido em que o pagamento já foi efetuado, a restituição será realizada na mesma modalidade em que o pagamento foi efetuado, não cabendo, em nenhuma hipótese, a restituição do valor de forma distinta.
                        Em caso de devolução de um produto já entregue, as regras para restituição do valor pago permanecem as mesmas.
                        </p>

                        <p><b>Pedidos de resgate de valores</b></p>
                        <p>Os pedidos de resgate serão feitos conforme a forma de pagamento. Em caso de pagamento na forma de boleto, cartão de crédito ou débito, o valor a ser reembolsado ficará disponível na conta digital do usuário no site da EASE, em forma de crédito para realização de futuras compras.
                        Caso o usuário deseje resgatar o saldo da sua conta EaseShopp, será feito em até 12 horas do pedido, uma transferência do crédito para uma conta corrente/poupança e será cobrado uma taxa de resgate de 10% (dez por cento).
                        A transferência do crédito supramencionado para resgate será feita somente em contas do próprio nome do titular da conta no site da EASE, cadastrada pelo mesmo.
                        Será realizado uma verificação antes do resgate dos dados da conta cadastrada pelo usuário e não sendo está em seu próprio nome, a operação não realizada e o valor voltará para o saldo na conta da EASE.
                        </p>
                        </div>
                    </div>

                    <div className="row col-12 justify-content-center mt-5">
                        <button className="btn btn-success btn-lg mr-5" onClick={this.concordar}>Concordar</button>
                        <button className={"btn btn-success btn-lg " + this.state.cadastrarContaBtn} onClick={this.cadastrarConta}>Cadastrar Conta</button>
                    </div>

                    

                </div>
                
                <div className={"row col-10 mt-5 " + this.state.hideForm + " " + styles.corpo}>

                    <div className="row col-12 justify-content-center">
                        <div className="col-md-4">
                            <label>Tipo de Conta</label>
                            <select 
                                className="form-control" 
                                onChange={this.changeTipoConta} 
                                value={this.state.tipoConta} 
                            >
                                <option value="">Selecione o tipo de conta</option>
                                <option value="Corrente">Corrente</option>
                                <option value="Poupanca">Poupança</option>
                            </select>
                        </div>
                    </div>

                    <div className="row col-12 justify-content-center mt-5">
                        <div className="col-md-4">
                            <label>Nome do Banco</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Nome do Banco" 
                                maxLength="50" 
                                onChange={this.changeBanco} 
                                value={this.state.banco} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="row col-12 justify-content-center mt-5">
                        <div className="col-md-4">
                            <label>Agencia</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Agencia" 
                                maxLength="5" 
                                onChange={this.changeAgencia} 
                                value={this.state.agencia} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="row col-12 justify-content-center mt-5">
                        <div className="col-md-3">
                            <label>Numero da Conta</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Numero da Conta" 
                                maxLength="20" 
                                onChange={this.changeNumeroConta} 
                                value={this.state.numeroConta} 
                                required 
                            />
                        </div>
                        <div className="col-md-1">
                            <label>Digito</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Digito" 
                                maxLength="1" 
                                onChange={this.changeDigito} 
                                value={this.state.digito} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="row col-12 justify-content-center mt-5">
                        <div className="col-md-4">
                            <label>Nome do Titular</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Nome do Titular" 
                                maxLength="50" 
                                onChange={this.changeNome} 
                                value={this.state.nome} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="row col-12 justify-content-center mt-5">
                        <div className="col-md-4">
                            <label>Cpf do Titular</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Cpf do Titular"
                                onChange={this.changeCpf} 
                                value={this.state.cpf} 
                                disabled
                                required 
                            />
                        </div>
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

export default ContaResgate;
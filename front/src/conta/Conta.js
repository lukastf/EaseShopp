import React from 'react';
import checks from './checks';
import Sair from './Sair';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBell,
    faTshirt, 
    faCashRegister,  
    faHeadset,
    faBlender, 
    faTag,
    faKey,
    faUpload,
    faCartArrowDown
} from '@fortawesome/free-solid-svg-icons';
import SideNavbar from '../sideNavbar/SideNavbar';
import SaldoCartao from './SaldoCartao';

import blockConta from './blockConta';
import resetRoute from '../navbar/routes/resetRoute';


class Conta extends React.Component {

    _isMounted = false;

    constructor(props) {

        super(props);

        this.state = {

            contaAdmin: "",

            rg: "",
            usuarioOuParceiro: "",
            cpfOuCnpj: "",
            codigo: "",
            telefone: "",
            celular: "",
            whatsapp: "",
            dataNasc: "",

            hideInfoAcc: "d-none",
            showInfoAcc: "",

            accessLevel: 0
        }
    }

    componentDidMount() {

        window.scrollTo(0, 0);
        this._isMounted = true;
        checks(this);
    }

    componentWillUnmount() {

        this._isMounted = false;
    }

    blockMaker = (text, icon, needLevel, link) => {

        let level = this.state.accessLevel;

        if (needLevel === 0 && (level === 1 || level === 2)) return;

        let show1 = "";
        let show2 = "";

        if (level === needLevel || level === 2) {
            
            show1 = "";
            show2 = "";
        }
        else if (level === 1) {

            show1 = "";
            show2 = "d-none";
        }
        else {

            show1 = "d-none";
            show2 = "d-none";
        }

        const rr = () => resetRoute(this.props.navbar);

        return (
        <div className={"row justify-content-center col-12 col-md-3 mt-5 " + show1}>
            <Link to={link} className={"sqr "+ show2} onClick={rr} style={{height: "19.4rem"}}>
                <div className="miau text-center">
                    <FontAwesomeIcon className="icone-principal" icon={icon} />
                    <p > {text} </p>
                </div>
            </Link>
        </div>
        );
    }

    sideNavbar = () => {
        
        if (this.state.accessLevel === 0 && this._isMounted) {

            return <SideNavbar navbar={this.props.navbar} />

        }
    }

    saldoCartao = () => {

        if (this.state.accessLevel === 0) {

            return <SaldoCartao />
        }
    }

    sacar = () => {

        //let dinheiro = 250;

        //if (dinheiro > 300)
            return this.blockMaker("Resgate", faUpload, 0, "/sacar");
        
        //return;
    }

    render() {
        return (

            <div className="row col-12 m-0 mt-4 justify-content-center">

                {this.sideNavbar()}

                <div className="row col-12 justify-content-end mt-5">
                    <Sair 
                        navbar={this.props.navbar}
                    />
                </div>

                {this.saldoCartao()}

                <div className="row col-12 justify-content-center">
                    <h1 className="col-12 text-center">
                        Seja Bem Vindo, {this.props.navbar.props.app.state.nome} 
                    </h1>
                    {this.state.contaAdmin}
                    <p className="col-12 text-center">
                        {this.props.welcomeMsg}
                    </p>
                </div>

                {/* primeira linha */}

                {this.blockMaker("Solicitações Convenio", faBell, 2, "/solicitacoesConvenio")}

                {this.blockMaker("Cadastrar novo item", faBlender, 1, "/cadastroProduto")}

                {blockConta(this)}

                {this.sacar()}

                {this.blockMaker("Minhas Compras", faCartArrowDown, 0, "/minhasCompras")}

                {this.blockMaker("Fale Conosco", faHeadset, 2, "/listaFaleConosco")}

                {/* segunda linha */}

                {this.blockMaker("Categorias", faTag, 2, "/listarCategorias")}

                {this.blockMaker("Minhas Vendas", faCashRegister, 1, "/minhasVendas")}

                {this.blockMaker("Meus Produtos", faTshirt, 1, "/meusProdutos")}

                {this.blockMaker("Esqueci Minha Senha", faKey, 2, "/listaEsqueciMinhaSenha")}

            </div>
        );
    }

}

export default Conta;
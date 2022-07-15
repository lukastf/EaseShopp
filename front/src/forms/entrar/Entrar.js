import React from 'react';
import { Link } from 'react-router-dom';

import initialState from './initialState';
import entrarFunction from './entrarFunction';
import resetForm from './resetForm';
import InputEmail from '../inputs/Email';
import InputSenha from '../inputs/Senha';
import InputCodigo from '../inputs/Codigo';
import resetRoute from '../../navbar/routes/resetRoute';
import checkSessionTime from '../../navbar/checkSessionTime';

import $ from 'jquery/dist/jquery.js';
import setRoute from '../../navbar/routes/setRoute';
import routes from '../../navbar/routes/routes';
import { sucessoEmailAtivar } from '../cadastroResult';

class Entrar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            email: "",
            senha: "",
            codigo: "",
            buttonDisabled: "",
            loginError: "",
            loginParceiroError: "",

            hideUsuarioForm: "row col-12 justify-content-center",
            hideParceiroForm: "row col-12 justify-content-center",

            cadastroResult: ""
        }
    }
    
    UNSAFE_componentWillReceiveProps(oi) {

        initialState(this, oi);
    }

    componentDidMount() {
        initialState(this, this.props);

        if( typeof this.props.cadastroOk != "undefined" && this.props.cadastroOk !== null ) {

            if(this.props.cadastroOk) {

                sucessoEmailAtivar(this);
            }
        }
    }

    sendFormUsuario = (e) => {
        e.preventDefault();
        resetForm(this);
        //setRoute(this.props.navbar, "/")
        entrarFunction(this, this.state.email, this.state.senha, '/usuario');
    }

    sendFormParceiro = (e) => {
        e.preventDefault();
        resetForm(this);
        //setRoute(this.props.navbar, "/conta")
        entrarFunction(this, this.state.codigo, this.state.senha, '/parceiro');
    }

    esqueciMinhaSenha = (e) => {
        e.preventDefault();

        setRoute(this.props.navbar, "/esqueciMinhaSenha");
        routes(this.props.navbar, "", "/esqueciMinhaSenha");
    }

    sejaUmParceiro = (e) => {

        e.preventDefault();

        setRoute(this.props.navbar, "/sejaUmParceiro");
        routes(this.props.navbar, "", "/sejaUmParceiro");
    }

    render() {
        return (
            <div>

                {/* usuario form */}

                <form className={this.state.hideUsuarioForm} noValidate>
                    <div className="row form-group justify-content-center col-12 mt-5">
                        <h1 className="text-center">Acessar conta de Usuario</h1>
                    </div>
                    <div className="row form-group justify-content-center col-12 mt-5">
                        <InputEmail context={this} cols={"col-md-3"} />
                    </div>
                    <div className="row form-group justify-content-center col-12 mt-2">
                        <InputSenha context={this} cols={"col-md-3"} />
                    </div>
                    
                    <div className="row form-group justify-content-center col-12 mt-3">

                    {this.state.loginError}
                    {this.state.cadastroResult}

                        <div className="row justify-content-center col-12">
                            <button 
                                type="button" 
                                onClick={this.esqueciMinhaSenha} 
                                className="btn btn-link my-3" 
                            >
                                Esqueci minha senha
                            </button>
                        </div>
                    

                        <button 
                            type="submit" 
                            onClick={this.sendFormUsuario} 
                            className="btn btn-primary my-3 mr-5"  
                            disabled={this.state.buttonDisabled} 
                        >
                            Entrar
                        </button>
                    
                        <Link 
                            type="button" 
                            className="btn btn-outline-primary my-3 mr-5" 
                            onClick={() => { 
                                $('.navbar .navbar-collapse').removeClass("show");
                                checkSessionTime(this.props.navbar); 
                                resetRoute(this.props.navbar); 
                            }}
                            to="/preCadastro"
                        >
                            Criar Conta
                        </Link>

                    </div>
                </form>
                
                {/* parceiros form */}

                <form className={this.state.hideParceiroForm} noValidate>
                    <div className="row form-group justify-content-center col-12 mt-5">
                        <h1 className="text-center">Acessar conta de Parceiro</h1>
                    </div>
                    <div className="row form-group justify-content-center col-12 mt-5">
                        <InputCodigo context={this} cols={"col-md-3"} />
                    </div>
                    <div className="row form-group justify-content-center col-12 mt-2">
                        <InputSenha context={this} cols={"col-md-3"} />
                    </div>
                    <div className="row form-group justify-content-center col-12 mt-3">
                        <div className="col-12 col-md-4">
                            <button type="button" 
                            onClick={this.sejaUmParceiro} 
                            className="btn btn-link ml-5"  
                            //disabled={this.state.buttonDisabled} 
                            >Seja um Parceiro</button>
                        {/*</div>
                        <div className="col-12 col-md-4">*/}
                            <button type="submit" 
                            onClick={this.sendFormParceiro} 
                            className="btn btn-primary float-right mr-5"  
                            disabled={this.state.buttonDisabled} >Entrar</button>
                        </div>
                    </div>
                    {this.state.loginParceiroError}
                </form>
            </div>
        );
    }
}

export default Entrar;
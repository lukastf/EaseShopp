import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAddressCard, 
    faPencilAlt, 
} from '@fortawesome/free-solid-svg-icons';
import routes from '../navbar/routes/routes';
import setRoute from '../navbar/routes/setRoute';

import styles from './SaldoCartao.module.css';

const blockConta = (conta) => {

    const verUsuario = (e) => {

        e.preventDefault();
        e.stopPropagation();
    
        if (conta.state.hideInfoAcc === "d-none") {
    
            conta.setState({
    
                hideInfoAcc: "",
                showInfoAcc: "d-none"
            });
        }
    
        else if (conta.state.hideInfoAcc === "") {
    
            conta.setState({
    
                hideInfoAcc: "d-none",
                showInfoAcc: ""
            });
        }
    }

    const ajustarBlk = () => {

        if (conta.state.accessLevel !== 0) return;
        return styles.ajustarBlocos;
    }

    return (
        <div className={"row justify-content-center col-12 col-md-3 mt-5 " + ajustarBlk()}>
                
            <Link to="" onClick={verUsuario} className="sqr">

                <div className={"miau text-center " + conta.state.showInfoAcc}>
                    <FontAwesomeIcon className="icone-principal" icon={faAddressCard} />
                    <p> Informações da conta </p>
                </div>

                <div className={"auau text-center "+ conta.state.hideInfoAcc}>

                    <div className="col-12 col-md-12 mt-3">
                        <p>Nome: {conta.props.conta.nome} </p>
                    </div>

                    <div className="col-12 col-md-12 mt-3">
                        {conta.state.cpfOuCnpj}
                    </div>

                    {conta.state.rg}

                    <div className="col-12 col-md-12 mt-3">
                        <p>email: {conta.props.conta.email} </p>
                    </div>

                    {conta.state.codigo}

                    <div className="col-12 col-md-12 mt-3">
                        <p>Senha: {conta.props.conta.senha} </p>
                    </div>

                    {conta.state.telefone}

                    {conta.state.celular}

                    {conta.state.whatsapp}

                    {conta.state.dataNasc}

                    <div className="col-12 col-md-12 mt-3">
                        <p>CEP: {conta.props.conta.cep} </p>
                    </div>

                    <div className="col-12 col-md-12 mt-3">
                        <p>Estado: {conta.props.conta.estado} </p>
                    </div>

                    <div className="col-12 col-md-12 mt-3">
                        <p>Cidade: {conta.props.conta.cidade} </p>
                    </div>

                    <div className="col-12 col-md-12 mt-3">
                        <p>Endereço: {conta.props.conta.endereco} </p>
                    </div>

                    <div className="col-12 col-md-12 mt-3">
                        <p>Numero: {conta.props.conta.numeroEndereco} </p>
                    </div>

                    <button
                        type="button"
                        className="btn btn-warning btn-lg"
                        onClick={(e)=>{ 
                            e.preventDefault();

                            setRoute(conta.props.navbar, "/editar" + conta.state.usuarioOuParceiro+"/"+conta.props.navbar.props.app.state._id);
                            routes(conta.props.navbar, conta.props.conta, "/editar" + conta.state.usuarioOuParceiro);
                        }}
                    >
                        Editar <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    
                </div>
            </Link>
        </div>
    );
}

export default blockConta;
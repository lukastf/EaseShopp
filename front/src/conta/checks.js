
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCrown } from '@fortawesome/free-solid-svg-icons';

const checkAdmin = (conta) => {

    let admin = conta.props.conta.admin;

    // parceiro admin
    if (admin === 1) {

        conta.setState({

            contaAdmin:
            <div className="col-12 text-center">
                <h5 style={{color:"#ffe000"}}>Administrador <FontAwesomeIcon className="icone-principal" icon={faCrown} /> </h5>
            </div>,
            accessLevel: 2
        });
    } else {
        conta.setState({
            accessLevel: 1
        });
    }
}

const checkRg = (conta) =>{

    let rg = conta.props.conta.rg;

    if (rg !== "" && typeof rg !== "undefined" && rg != null) {

        conta.setState({

            rg:
            <div className="col-12 col-md-12 mt-3">
                <p>Rg: {rg} </p>
            </div>
        });
    }
}

const checkCpfOuCnpj = (conta) => {

    let cpf = conta.props.conta.cpf;
    let cnpj = conta.props.conta.cnpj;

    if (typeof cpf !== "undefined" && cpf != null) {

        conta.setState({

            usuarioOuParceiro: "Usuario",
            cpfOuCnpj: <p>Cpf: {cpf} </p>,
            accessLevel: 0
        });

    } else if (typeof cnpj !== "undefined" && cnpj != null) {

        conta.setState({

            usuarioOuParceiro: "Parceiro",
            cpfOuCnpj: <p>Cnpj: {cnpj} </p>
        });
    }

}

const checkCodigoParceiro = (conta) => {

    let codigo = conta.props.codigo;

    if (codigo !== "" && typeof codigo !== "undefined" && codigo != null) {

        conta.setState({

            codigo:
            <div className="col-12 col-md-12 mt-3">
                <p>Codigo: {codigo} </p>
            </div>
        });
    }
}

const checkTelefone = (conta) => {

    let telefone = conta.props.conta.telefone;

    if (telefone !== "" && typeof telefone !== "undefined" && telefone != null) {

        conta.setState({

            telefone:
            <div className="col-12 col-md-12 mt-3">
                <p>Telefone: {telefone} </p>
            </div>
        });
    }
}

const checkCelular = (conta) => {

    let celular = conta.props.conta.celular;

    if (celular !== "" && typeof celular !== "undefined" && celular != null) {

        conta.setState({

            celular:
            <div className="col-12 col-md-12 mt-3">
                <p>Celular: {celular} </p>
            </div>
        });
    }

}

const checkWhatsapp = (conta) => {

    let whatsapp = conta.props.conta.whatsapp;

    if (whatsapp !== "" && whatsapp !== "undefined" && whatsapp != null) {

        conta.setState({

            telefone:
            <div className="col-12 col-md-12 mt-3">
                <p>WhatsApp: {whatsapp} </p>
            </div>
        });
    }
}

const checkDataNasc = (conta) => {

    let dataNasc = conta.props.conta.dataNasc;

    if (dataNasc !== "" && dataNasc !== "undefined" && dataNasc != null) {

        conta.setState({

            dataNasc:
            <div className="col-12 col-md-12 mt-3">
                <p>Data de Nascimento: {dataNasc} </p>
            </div>
        });
    }
}

const checks = (conta) => {

    checkAdmin(conta);

    checkRg(conta);
    checkCpfOuCnpj(conta);
    checkCodigoParceiro(conta);
    checkTelefone(conta);
    checkCelular(conta);
    checkWhatsapp(conta);
    checkDataNasc(conta);
}

export default checks;
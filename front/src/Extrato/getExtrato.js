
import axios from 'axios';

import {serverUrl} from '../config';

import listaExtrato from './listaExtrato';

const getExtrato = (extrato, itensPage, pageId) => {

    let _id = extrato.props.navbar.props.app.state._id;
    let senha = extrato.props.navbar.props.app.state.senha;

    axios.get(
        serverUrl + "/produtos" +
        "/usuario/" + _id + 
        "/" + senha +
        "/itensPage/" + itensPage + 
        "/pageId/" + pageId +
        "/dataInicio/" + extrato.convertTime(extrato.state.dataInicio) + 
        "/dataTermino/" + extrato.convertTime(extrato.state.dataTermino)
    )
    .then((response) => {

        extrato.setState({
            produtosComprados: response.data
        });

        listaExtrato(extrato, response.data);

        extrato.paginacao(
            serverUrl + "/produtos" +
            //"/usuario/" + extrato.props._id +
            "/usuario/" + _id + 
            "/" + senha +
            "/itensPage/" + itensPage + 
            "/dataInicio/" + extrato.convertTime(extrato.state.dataInicio) + 
            "/dataTermino/" + extrato.convertTime(extrato.state.dataTermino)
        );

    }).catch((error) => {

        console.log(error);

    });
}

export default getExtrato;
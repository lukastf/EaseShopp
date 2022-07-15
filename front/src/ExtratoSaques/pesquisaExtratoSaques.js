
import axios from 'axios';

import {serverUrl} from '../config';
import getExtrato from './getExtratoSaques';

const pesquisaExtratoSaques = (extrato) => {

    extrato.resetPaginacao();

    if (extrato.pageId === 0) {

        let _id = extrato.props.navbar.props.app.state._id;
        let senha = extrato.props.navbar.props.app.state.senha;

        axios.get(
            serverUrl + "/produtos/saques" +
            "/usuario/" + _id +
            "/" + senha +
            "/itensPage/" + extrato.itensPage + 
            "/dataInicio/" + extrato.convertTime(extrato.state.dataInicio) + 
            "/dataTermino/" + extrato.convertTime(extrato.state.dataTermino)
        )
        .then((response) => {

            extrato.pageId = response.data[0];
            getExtrato(extrato, extrato.itensPage, extrato.pageId);

        }).catch((error) => {

            console.log(error);
        });

    } else {

        getExtrato(extrato, extrato.itensPage, extrato.pageId);
    }
}

export default pesquisaExtratoSaques;
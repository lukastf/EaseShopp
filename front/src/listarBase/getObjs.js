import axios from 'axios';

import lista from "./lista";
import { serverUrl } from '../config';


const getObjs = (context, itensPage, pageId) => {

    let _idParceiro = context.props.navbar.props.app.state._id;
    let senha = context.props.navbar.props.app.state.senha;

    //let route = "faleConosco";
    let route = context.props.route;

    axios.get(serverUrl + route +"/admin/" + _idParceiro + "/" + senha +
    "/itensPage/" + itensPage + "/pesquisaString/" + context.pesquisaString + "/pageId/" + pageId)

    .then((response) => {

        context.setState({
            listaObjs: response.data
        });

        lista(context, context.pageId, response.data);

        context.paginacao(serverUrl + route +"/admin/" + _idParceiro + "/" + senha +
        "/itensPage/" + itensPage + "/pesquisaString/" + context.pesquisaString );

    }).catch((error) => {

        console.log(error);

    });
}

export default getObjs;
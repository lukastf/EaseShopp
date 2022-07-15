
import axios from 'axios';
//import resetForm from './resetForm';
import { serverUrl, currentDateTime } from '../../config';

import objParceiro from '../../usuario/objParceiro';
import routes from '../../navbar/routes/routes';
import { erro, sucesso } from '../cadastroResult';

const parceiroEditar = (cadastroParceiro, data) => {

    if (cadastroParceiro.state.editar) {

        //routes(cadastroParceiro.props.navbar, data, "/editarParceiro");

        if (cadastroParceiro.props.navbar.props.app.state._id === data._id) {
            
            // atualiza conta
            routes(cadastroParceiro.props.navbar, data, "/conta");
        }

        return true;
    }

    return false;
}

const sendForm = (cadastroParceiro, e) => {

    e.preventDefault();

    let obj = objParceiro(cadastroParceiro.state);

    let url = serverUrl + "/parceiros";
    let sendHttp = axios.post;

    obj.usuarioSession = currentDateTime();
    obj._idSession = cadastroParceiro.props.navbar.props.app.state._id;
    obj.senhaAdm = cadastroParceiro.props.navbar.props.app.state.senha;


    if (cadastroParceiro.state.editar) {

        url = serverUrl + "/parceiros/" + cadastroParceiro.state._id;
        sendHttp = axios.put;
    }

    sendHttp(url, obj).then((response) => {

        sucesso(cadastroParceiro);

        if (parceiroEditar(cadastroParceiro, obj)) return;

        //resetForm(cadastroParceiro);
        //resetForm
        cadastroParceiro.setState(objParceiro(false));
        cadastroParceiro.setState({editar: false});
    })
    .catch((error) => { erro(cadastroParceiro, error); });

    setTimeout(() => { cadastroParceiro.setState({ cadastroResult: "" }); }, 3000);
}

export default sendForm;
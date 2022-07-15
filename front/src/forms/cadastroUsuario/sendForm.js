import axios from 'axios';
//import resetForm from './resetForm';

import objUsuario from '../../usuario/objUsuario';
import { serverUrl, currentDateTime } from '../../config';

import routes from '../../navbar/routes/routes';
import { sucesso, erro } from '../cadastroResult';
import resetRoute from '../../navbar/routes/resetRoute';
import setRoute from '../../navbar/routes/setRoute';

const getSendObj = (cadastroUsuario) => {

    const checkOpcoes = (op) => {

        if (typeof op === "undefined") return;
    
        let opcoesUsuario = {
          retirada: false,
          entrega: true
        }
    
        if (op.retirada && !op.entrega) {
    
          opcoesUsuario = {
            retirada: true,
            entrega: false
          }
        }
    
        return opcoesUsuario;
    }

    let favoritos = cadastroUsuario.props.navbar.props.app.state.favoritos;
    let carrinho = cadastroUsuario.props.navbar.props.app.state.carrinho;

    let favoritosIds = [];

    if (typeof favoritos != "undefined" && favoritos.length > 0) {
        for (let i = 0; i < favoritos.length; i++) {
            favoritosIds.push(favoritos[i]._id);
        }
    }

    let carrinhoIds = [];

    if (typeof carrinho != "undefined" && carrinho.length > 0) {
        for (let i = 0; i < carrinho.length; i++) {
    
            let carrinhoObj = {
              
              _id: carrinho[i]._id,
              quantidade: carrinho[i].quantidadeCarrinho,
              opcoesUsuario: checkOpcoes(carrinho[i].opcoesUsuario)
            }
        
            carrinhoIds.push(carrinhoObj);
        }
    }

    let obj = objUsuario(cadastroUsuario.state);

    obj.carrinho = carrinhoIds;
    obj.favoritos = favoritosIds;

    obj.carrinhoSession = currentDateTime();
    obj.usuarioSession = currentDateTime();

    let _idSession = 0;
    let _id = cadastroUsuario.props.navbar.props.app.state._id;
    let senha = cadastroUsuario.props.navbar.props.app.state.senha;

    if (_id !== null || typeof _id !== "undefined" || _id !== "") {
        _idSession = _id;
    }

    obj._idSession = _idSession;
    obj.senhaAdm = senha;

    return obj;
}

const checkAdmin = (cadastroUsuario) => {
    
    let admin = cadastroUsuario.props.navbar.props.app.state.admin;
    if (admin === 1) {

        //resetForm
        cadastroUsuario.setState(objUsuario(false));
        cadastroUsuario.setState({editar: false});

        return true;
    }
    return false;
}

const usuarioEditar = (cadastroUsuario, data) => {

    if (cadastroUsuario.state.editar) {

        // atualiza conta
        routes(cadastroUsuario.props.navbar, data, "/conta");

        cadastroUsuario.props.navbar.props.app.setState({
            cep: data.cep,
            estado: data.estado,
            cidade: data.cidade,
            endereco: data.endereco,
            numeroEndereco: data.numeroEndereco
        });
        return true;
    }
    return false;
}

const veioDoPreCadastro = (cadastroUsuario, data) => {

    if (cadastroUsuario.props.usuario.veioDoPreCadastro) {
    
        cadastroUsuario.props.navbar.setState({
            cadastroPermission: false
        });
        data.cadastroOk = true;
    
        resetRoute(cadastroUsuario.props.navbar);
        //routes(cadastroUsuario.props.navbar, data, "/preCadastro");
        routes(cadastroUsuario.props.navbar, data, "/entrarUsuario");
        setRoute(cadastroUsuario.props.navbar, "/entrarUsuario");
        return true;
    }
    return false;
}


const sendForm = (cadastroUsuario, e) => {

    e.preventDefault();

    let obj = getSendObj(cadastroUsuario);

    let url = serverUrl + "/usuarios";
    let sendHttp = axios.post;

    if (cadastroUsuario.state.editar) {

        url = serverUrl + "/usuarios/"+cadastroUsuario.state._id;
        sendHttp = axios.put;
    }

    sendHttp(url, obj).then((response) => {
          
        sucesso(cadastroUsuario);

        if(checkAdmin(cadastroUsuario)) return;
        if(usuarioEditar(cadastroUsuario, obj)) return;

        cadastroUsuario.setState(objUsuario(false));
        cadastroUsuario.setState({editar: false});

        if(veioDoPreCadastro(cadastroUsuario, obj)) return;
    })
    .catch((error) => { erro(cadastroUsuario, error); });

    setTimeout(() => { cadastroUsuario.setState({ cadastroResult: "" }); }, 3000);
}

export default sendForm;

import cadMulti from '../utilidades/cadastrarMultiplos';
import { erroCustom } from '../cadastroResult';

const cadastrarMultiplos = async (preCadastroUsuarios, e) => {

    e.preventDefault();

    let cadastroResult = await cadMulti(
        "Usuarios",
        preCadastroUsuarios.props.navbar.props.app.state._id, 
        preCadastroUsuarios.props.navbar.props.app.state.senha,
        preCadastroUsuarios.state.multiUsuarios, 
        preCadastroUsuarios.state.multiUsuariosValue,
        "/usuarios/multi"
    );

    if (cadastroResult) {

        preCadastroUsuarios.setState({
            cadastroResult
        });

    } else {

        erroCustom(preCadastroUsuarios, "Fomato Invalido");
    }
}

export default cadastrarMultiplos;
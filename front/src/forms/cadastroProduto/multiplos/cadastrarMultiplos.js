
import { erroCustom } from '../../cadastroResult';
import cadMulti from '../../utilidades/cadastrarMultiplos';

const cadastrarMultiplos = async (cadastroProduto, e) => {

    e.preventDefault();

    let cadastroResult = await cadMulti(
        "Produtos",
        cadastroProduto.props.navbar.props.app.state._id, 
        cadastroProduto.props.navbar.props.app.state.senha,
        cadastroProduto.state.multiProdutos, 
        cadastroProduto.state.multiProdutosValue,
        "/produtos/multi"
    );

    if (cadastroResult) {

        cadastroProduto.setState({
            cadastroResult
        });

    } else {

        erroCustom(cadastroProduto, "Fomato Invalido");
    }
}

export default cadastrarMultiplos;
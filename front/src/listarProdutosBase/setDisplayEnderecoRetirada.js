import listaProdutoss from "./listaProdutos";

const setDisplayEnderecoRetirada = (context, index, value) => {

    let v = context.state.displayEnderecoRetirada;
    v[index] = value;

    context.setState({
        displayEnderecoRetirada: v
    });

    listaProdutoss(context);
}

export default setDisplayEnderecoRetirada;
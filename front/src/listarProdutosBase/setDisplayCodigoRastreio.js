
import listaProdutoss from "./listaProdutos";

const setDisplayCodigoRastreio = (context, index, value) => {

    let v = context.state.displayCodigoRastreio;

    v[index] = value;

    context.setState({
        displayCodigoRastreio: v
    });

    listaProdutoss(context);
}

export default setDisplayCodigoRastreio;
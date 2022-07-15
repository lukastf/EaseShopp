import listaProdutoss from "./listaProdutos";

const setDisplayProduto = (context, index) => {

    let displayDetalhesProduto = context.state.displayDetalhesProduto;

    if (typeof displayDetalhesProduto[index] === "undefined") displayDetalhesProduto[index] = "d-none";
    else if (displayDetalhesProduto[index] === "d-none") displayDetalhesProduto[index] = "";
    else if (displayDetalhesProduto[index] === "") displayDetalhesProduto[index] = "d-none";

    context.setState({
        displayDetalhesProduto: displayDetalhesProduto
    });

    listaProdutoss(context);
}

export default setDisplayProduto;
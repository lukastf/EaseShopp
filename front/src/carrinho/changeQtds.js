
import { numberMask } from "../forms/utilidades/masks";
import btnFinalizarCompra from "./btnFinalizarCompra/btnFinalizarCompra";
import listarProdutos from "./listarProdutos";
import changeQtdsBase from "./changeQtdsBase";
import adicionarFrete from "./adicionarFrete";


const changeQtds = (context, e) => {

    e.preventDefault();
    e.stopPropagation();

    let carrinho = context.props.navbar.props.app.state.carrinho;
    let app = context.props.navbar.props.app;

    let qtds = context.state.qtds;
    let valoresTotais = context.state.valoresTotais;
    let errors = context.state.errors;

    let tempArr = e.target.id.split("quantidade");
    let i = parseInt(tempArr[1]);

    if (typeof e.target.value !== "undefined")
    carrinho[i].quantidadeCarrinho = parseInt(numberMask(e.target.value));

    let produto = changeQtdsBase(app, carrinho[i]);

    qtds[i] = produto.quantidadeCarrinho;
    valoresTotais[i] = produto.valorTotal;
    errors[i] = produto.error;

    let values = {

        qtds: qtds,
        valoresTotais: valoresTotais,
        errors: errors
    }

    context.setState(values);

    let frete = "";

    if (context.state.tipoFrete === "Pac") frete = context.state.fretePac[i];
    if (context.state.tipoFrete === "Sedex") frete = context.state.freteSedex[i];

    adicionarFrete(context, frete, i);

    listarProdutos(context, values);
    btnFinalizarCompra(context, values);
}

export default changeQtds;
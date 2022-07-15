
const adicionarFrete = (context, frete, index) => {

    let carrinho = context.props.navbar.props.app.state.carrinho;

    //console.log(frete);
    //console.log(index);
    //if (carrinho[index].opcoesUsuario.retirada) frete = "0,00";
    if (typeof carrinho[index].opcoesUsuario != "undefined") 
        if (carrinho[index].opcoesUsuario.retirada) return;
    
    //if (typeof carrinho[index].opcoes.freteGratis != "undefined") 
        if (carrinho[index].opcoes.freteGratis) return;

    let valoresTotais = context.state.valoresTotais;
    let valorTotal = context.state.valoresTotais[index];
    let qtd = context.state.qtds[index];
    qtd = parseInt(qtd);

    if (isNaN(qtd) || qtd <= 0) {

        qtd = 1;
    }

    valorTotal = valorTotal.replace("R$", "");
    valorTotal = valorTotal.replace(",", ".");
    valorTotal = parseFloat(valorTotal);

    if (typeof frete === "undefined") return;

    frete = frete.replace(",", ".");
    frete = parseFloat(frete);

    valorTotal = valorTotal + frete * qtd;
    valorTotal = valorTotal.toFixed(2);

    valorTotal = "R$" + valorTotal;
    valorTotal = valorTotal.replace(".", ",");

    valoresTotais[index] = valorTotal;

    context.setState({
        valoresTotais: valoresTotais
    });
}

export default adicionarFrete;

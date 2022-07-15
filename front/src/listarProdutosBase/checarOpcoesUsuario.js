
const checarOpcoesUsuario = (produto) => {

    if (produto.opcoesUsuario !== null && typeof produto.opcoesUsuario !== "undefined" && 
        produto.opcoesUsuario.retirada && !produto.opcoesUsuario.entrega) return "retirada";

    return "entrega";
}

export default checarOpcoesUsuario;
import objProduto from "../../carrinho/objProduto";
import routes from "../../navbar/routes/routes";
import setRoute from "../../navbar/routes/setRoute";

const visualizarProdutoClick = (context, e) => {

    let obj = {};
    let id = e.currentTarget.id;

    let produtos = context.state.produtos;
    let carrinho = context.props.navbar.props.app.state.carrinho;

    
    for (let i=0; i < produtos.length; i++) {
    
        if (
            id === produtos[i]._id + "_visualizar"
        ) {

            obj = objProduto(produtos[i]);
            obj.quantidadeTotal = produtos[i].quantidade;

            if (typeof carrinho !== "undefined" && carrinho !== null) {

                for (let i2 = 0; i2 < carrinho.length; i2++) {

                    if (carrinho[i2]._id === produtos[i]._id) {
                        
                        obj.quantidadeCarrinho = carrinho[i2].quantidadeCarrinho;
                    }
                }
            }
        }
     
        if (e.currentTarget.id === produtos[i]._id + "_visualizar") {

            setRoute(context.props.navbar, "/visualizarProduto/"+obj._id);
            routes(context.props.navbar, obj, "/visualizarProduto");
        }
    }
}

export default visualizarProdutoClick; 
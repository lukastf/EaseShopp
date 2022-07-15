import axios from "axios";
import { serverUrl } from "../config";
import calcularFrete from "../usuario/calcularFrete";
import adicionarFrete from "./adicionarFrete";
import btnFinalizarCompra from "./btnFinalizarCompra/btnFinalizarCompra";
import listarProdutos from "./listarProdutos";


const getValues = (context) => {

    let carrinho = context.props.navbar.props.app.state.carrinho;

    let qtds = [];
    let valoresTotais = [];

    for (let i=0; i < carrinho.length; i++) {

        if (carrinho[i].quantidadeCarrinho === "") carrinho[i].quantidadeCarrinho = 1;
        if (carrinho[i].valorTotal.includes("NaN")) carrinho[i].valorTotal = carrinho[i].valor;
        
        qtds[i] = carrinho[i].quantidadeCarrinho;
        valoresTotais[i] = carrinho[i].valorTotal;
    }

    let values = {

        qtds: qtds,
        valoresTotais: valoresTotais
    }

    for (let i=0; i < carrinho.length; i++) {

        if (typeof context.state.fretePac[i] === "undefined" || typeof context.state.freteSedex[i] === "undefined") {
            
            let usuario = context.props.navbar.props.app.state;
            
            const setFretePac = (frete) => {

                context.state.fretePac[i] = frete.valor;
                context.state.prazoEntregaPac[i] = frete.prazoEntrega;

                //adicionarFrete(context, frete.valor, i);
    
                listarProdutos(context, values);
                btnFinalizarCompra(context, values);
            }
    
            const setFreteSedex = (frete) => {

                context.state.freteSedex[i] = frete.valor;
                context.state.prazoEntregaSedex[i] = frete.prazoEntrega;
    
                adicionarFrete(context, frete.valor, i);
    
                listarProdutos(context, values);
                btnFinalizarCompra(context, values);
            }
    
            axios.get(serverUrl + "/parceiros/" + carrinho[i]._idParceiro)
            .then((response) => {
    
                calcularFrete({
                    usuario: usuario,
                    setFretePac: setFretePac,
                    setFreteSedex: setFreteSedex,
                    produto: carrinho[i],
                    parceiro: response.data
                });
            }).catch((error) => {});
        }
    }


    context.setState(values);


    return values;
}

export default getValues;
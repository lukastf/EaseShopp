import axios from "axios";
import converterDinheiro from "../carrinho/converterDinheiro";
import { serverUrl } from "../config";


const getCarrinho = async (responseCarrinho) => {
    
    // preenche carrinho

    let carrinho = [];

    for (let i = 0; i < responseCarrinho.length; i++) {

        let response = await axios.get(serverUrl + "/produtos/" + responseCarrinho[i]._id)

        response.data.quantidadeTotal = response.data.quantidade;
        delete response.data.quantidade;
        response.data.quantidadeCarrinho = responseCarrinho[i].quantidade;

        let valorTotal = converterDinheiro(response.data.valor, responseCarrinho[i].quantidade);
        response.data.valorTotal = valorTotal;

        response.data.opcoesUsuario = responseCarrinho[i].opcoesUsuario;
        response.data.voltagemUsuario = responseCarrinho[i].voltagemUsuario;
        response.data.tamanhoRoupaUsuario = responseCarrinho[i].tamanhoRoupaUsuario;
        response.data.tamanhoCalcadoUsuario = responseCarrinho[i].tamanhoCalcadoUsuario;

        carrinho.push(response.data);
    }

    return carrinho;
}

export default getCarrinho;
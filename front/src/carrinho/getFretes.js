import React from 'react';
import adicionarFrete from './adicionarFrete';
import btnFinalizarCompra from './btnFinalizarCompra/btnFinalizarCompra';
import listarProdutos from './listarProdutos';
import converterDinheiro from './converterDinheiro';

const getFretes = (context, prod, index, values, optRadio) => {
    
    const optPac = (e) => {

        e.stopPropagation();

        let valoresTotais = context.state.valoresTotais;
        valoresTotais[index] = converterDinheiro(prod.valor, prod.quantidadeCarrinho);

        context.setState({
            tipoFrete: "Pac",
            valoresTotais: valoresTotais
        });

        adicionarFrete(context, context.state.fretePac[index], index);
        listarProdutos(context, values);
        btnFinalizarCompra(context, values);
    }

    const optSedex = (e) => {
        e.stopPropagation();

        let valoresTotais = context.state.valoresTotais;
        valoresTotais[index] = converterDinheiro(prod.valor, prod.quantidadeCarrinho);

        context.setState({
            tipoFrete: "Sedex",
            valoresTotais: valoresTotais
        });

        adicionarFrete(context, context.state.freteSedex[index], index);
        listarProdutos(context, values);
        btnFinalizarCompra(context, values);
    }

    /*const checkRetirarLoja = () => {

        if (prod.opcoesUsuario.retirada) return true;
        return false;
    }*/

    const multiFrete = (frete, qtd) => {

        if (typeof frete === "undefined") return 0;
        if (qtd === "") qtd = 1;

        let f = frete.replace(",", ".");
        f = parseFloat(f);

        f = f * qtd;
        f = f.toFixed(2);
        f = f.toString();
        f = f.replace(".", ",");

        return f;
    }

    //if (prod.opcoes.retirada || prod.opcoesUsuario.retirada) return;
    if (typeof prod.opcoesUsuario != "undefined") if (prod.opcoesUsuario.retirada) return;

    if (prod.opcoes.freteGratis) return;

    return(
        <>
        {
        //checkRetirarLoja()
        //console.log(context.state)
        }
        <label className="radio">
            <input 
                className="mr-2"
                type="radio" 
                name={"optradioFrete" + optRadio + prod._id} 
                onClick={optPac} 
                defaultChecked={false}
            />
                 Frete Pac R${multiFrete(context.state.fretePac[index], context.state.qtds[index])} 
                <p> em {context.state.prazoEntregaPac[index]} dias uteis</p>
        </label>
        <label className="radio">
            <input 
                className="mr-2"
                type="radio" 
                name={"optradioFrete" + optRadio + prod._id} 
                onClick={optSedex} 
                defaultChecked={true}
            />
                 Frete Sedex R${multiFrete(context.state.freteSedex[index], context.state.qtds[index])} 
                <p> em {context.state.prazoEntregaSedex[index]} dias uteis </p>
        </label>
        </>
    );
}

export default getFretes;